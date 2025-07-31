import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Billing = () => {
  useEffect(() => {
    // Usage Chart
    const ctx = document.getElementById('usageChart').getContext('2d');
    let chartInstance = null;
    if (ctx) {
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jul 1', 'Jul 8', 'Jul 15', 'Jul 22', 'Jul 29'],
          datasets: [{
            label: 'AI Interactions',
            data: [1200, 1900, 2100, 2400, 2847],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }

    // Add click handlers for buttons
    const buttons = document.querySelectorAll('.btn');
    const buttonClickHandler = (e) => {
      e.preventDefault();
      e.currentTarget.style.transform = 'scale(0.95)';
      setTimeout(() => {
        e.currentTarget.style.transform = '';
      }, 150);
    };
    buttons.forEach(button => {
      button.addEventListener('click', buttonClickHandler);
    });

    // Add hover effects to payment cards
    const paymentCards = document.querySelectorAll('.payment-card');
    const paymentCardClickHandler = (e) => {
      if (e.currentTarget.querySelector('.card-brand')) {
        alert('Edit payment method functionality would be implemented here');
      } else {
        alert('Add new payment method functionality would be implemented here');
      }
    };
    paymentCards.forEach(card => {
      card.addEventListener('click', paymentCardClickHandler);
    });

    // Cleanup function
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
      buttons.forEach(button => {
        button.removeEventListener('click', buttonClickHandler);
      });
      paymentCards.forEach(card => {
        card.removeEventListener('click', paymentCardClickHandler);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #f9fafb;
            min-height: 100vh;
            color: #1a202c;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        .page-header {
            margin-bottom: 2rem;
            text-align: center;
        }

        .page-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 0.5rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .page-subtitle {
            color: rgba(255,255,255,0.8);
            font-size: 1.1rem;
        }

        .dashboard-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .card {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.2);
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        .current-plan {
            background: #ffffff;
            color: #1a202c;
            position: relative;
            overflow: hidden;
        }

        .plan-badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 1rem;
            backdrop-filter: blur(10px);
        }

        .plan-name {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .plan-price {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        .plan-features {
            list-style: none;
            margin-bottom: 1.5rem;
        }

        .plan-features li {
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
        }

        .plan-features li::before {
            content: '✓';
            color: #4ade80;
            font-weight: bold;
            margin-right: 0.5rem;
            font-size: 1.2rem;
        }

        .usage-stats {
            grid-column: span 2;
        }

        .stats-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .stats-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a202c;
        }

        .usage-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .usage-item {
            background: #f1f5f9;
            color: #1a202c;
            padding: 1.5rem;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .usage-item:hover {
            transform: scale(1.05);
        }

        .usage-number {
            font-size: 2rem;
            font-weight: 800;
            display: block;
        }

        .usage-label {
            font-size: 0.875rem;
            opacity: 0.9;
            margin-top: 0.5rem;
        }

        .chart-container {
            height: 300px;
            background: white;
            border-radius: 15px;
            padding: 1rem;
        }

        .billing-history {
            grid-column: span 2;
        }

        .history-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }

        .history-table th,
        .history-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
        }

        .history-table th {
            background: #f8fafc;
            font-weight: 600;
            color: #4a5568;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .status-paid {
            background: #d1fae5;
            color: #065f46;
        }

        .status-pending {
            background: #fef3c7;
            color: #92400e;
        }

        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }

        .btn-primary {
            background: #1f2937;
            color: #fff;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(31,41,55,0.15);
        }

        .btn-outline {
            background: transparent;
            border: 2px solid #d1d5db;
            color: #1f2937;
        }

        .btn-outline:hover {
            background: #f3f4f6;
            border-color: #9ca3af;
        }

        .upgrade-section {
            grid-column: span 2;
            background: #f3f4f6;
            text-align: center;
            padding: 3rem 2rem;
        }

        .upgrade-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #7c2d12;
        }

        .upgrade-description {
            color: #9a3412;
            margin-bottom: 2rem;
            font-size: 1.1rem;
        }

        .plans-comparison {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .plan-card {
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .plan-card:hover {
            transform: translateY(-10px);
            border-color: #667eea;
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
        }

        .plan-card.popular {
            border-color: #f59e0b;
            position: relative;
        }

        .plan-card.popular::before {
            content: 'Most Popular';
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: #f59e0b;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
        }

        .payment-methods {
            margin-top: 2rem;
        }

        .payment-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }

        .payment-card {
            background: white;
            border-radius: 15px;
            padding: 1.5rem;
            border: 2px solid #e2e8f0;
            transition: all 0.3s ease;
        }

        .payment-card:hover {
            border-color: #667eea;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.1);
        }

        .card-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .card-brand {
            font-weight: 600;
            color: #1a202c;
        }

        .card-number {
            color: #6b7280;
            font-family: monospace;
        }

        @media (max-width: 768px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
            }
            
            .usage-stats,
            .billing-history,
            .upgrade-section {
                grid-column: span 1;
            }
            
            .page-title {
                font-size: 2rem;
            }
            
            .container {
                padding: 1rem;
            }
        }
      `}</style>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title" style={{ color: 'black' }}>Billing & Subscription</h1>
          <p className="page-subtitle" style={{ color: 'black' }}>Manage your AI Reception service plan and billing details</p>
        </div>

        <div className="dashboard-grid">
          {/* Current Plan */}
          <div className="card current-plan">
            <div className="plan-badge">Active Plan</div>
            <h2 className="plan-name">Professional Plan</h2>
            <div className="plan-price">$49<span style={{ fontSize: '1rem', opacity: 0.8 }}>/month</span></div>
            <ul className="plan-features">
              <li>Unlimited AI Receptions</li>
              <li>Advanced Analytics</li>
              <li>24/7 Priority Support</li>
              <li>Custom Integrations</li>
              <li>Multi-language Support</li>
            </ul>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-outline">Change Plan</button>
              <button className="btn btn-outline">Cancel</button>
            </div>
          </div>

          {/* Account Summary */}
          <div className="card">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a202c' }}>Account Summary</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#6b7280' }}>Next Billing Date:</span>
                <span style={{ fontWeight: 600 }}>Aug 15, 2025</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#6b7280' }}>Account Status:</span>
                <span style={{ color: '#059669', fontWeight: 600 }}>Active</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#6b7280' }}>Auto-Renewal:</span>
                <span style={{ color: '#059669', fontWeight: 600 }}>Enabled</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: '#6b7280' }}>Member Since:</span>
                <span style={{ fontWeight: 600 }}>Jan 2024</span>
              </div>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Update Billing Info</button>
          </div>

          {/* Usage Statistics */}
          <div className="card usage-stats">
            <div className="stats-header">
              <h3 className="stats-title">Usage This Month</h3>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Resets on Aug 15</span>
            </div>
            
            <div className="usage-grid">
              <div className="usage-item">
                <span className="usage-number">2,847</span>
                <span className="usage-label">AI Interactions</span>
              </div>
              <div className="usage-item" style={{ background: '#f3f4f6', color: '#1a202c' }}>
                <span className="usage-number">156</span>
                <span className="usage-label">Hours Active</span>
              </div>
              <div className="usage-item" style={{ background: '#e5e7eb', color: '#1a202c' }}>
                <span className="usage-number">94%</span>
                <span className="usage-label">Satisfaction Rate</span>
              </div>
              <div className="usage-item" style={{ background: '#f9fafb', color: '#1a202c' }}>
                <span className="usage-number">12</span>
                <span className="usage-label">Integrations</span>
              </div>
            </div>

            <div className="chart-container">
              <canvas id="usageChart"></canvas>
            </div>
          </div>

          {/* Billing History */}
          <div className="card billing-history">
            <h3 className="stats-title">Billing History</h3>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jul 15, 2025</td>
                  <td>Professional Plan - Monthly</td>
                  <td>$49.00</td>
                  <td><span className="status-badge status-paid">Paid</span></td>
                  <td><a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Download</a></td>
                </tr>
                <tr>
                  <td>Jun 15, 2025</td>
                  <td>Professional Plan - Monthly</td>
                  <td>$49.00</td>
                  <td><span className="status-badge status-paid">Paid</span></td>
                  <td><a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Download</a></td>
                </tr>
                <tr>
                  <td>May 15, 2025</td>
                  <td>Professional Plan - Monthly</td>
                  <td>$49.00</td>
                  <td><span className="status-badge status-paid">Paid</span></td>
                  <td><a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Download</a></td>
                </tr>
                <tr>
                  <td>Apr 15, 2025</td>
                  <td>Professional Plan - Monthly</td>
                  <td>$49.00</td>
                  <td><span className="status-badge status-paid">Paid</span></td>
                  <td><a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Download</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Upgrade Section */}
          <div className="card upgrade-section">
            <h2 className="upgrade-title" style={{ color: 'black' }}>Ready to Scale Up?</h2>
            <p className="upgrade-description" style={{ color: 'black' }}>
              Unlock advanced features and increased limits with our Enterprise plan
            </p>
            
            <div className="plans-comparison">
              <div className="plan-card">
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1a202c' }}>Starter</h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#667eea', marginBottom: '1rem' }}>$19<span style={{ fontSize: '1rem', color: '#6b7280' }}>/mo</span></div>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem', textAlign: 'left' }}>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    1,000 AI Interactions
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    Basic Analytics
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    Email Support
                  </li>
                </ul>
                <button className="btn btn-primary" style={{ width: '100%' }}>Current Plan</button>
              </div>

              <div className="plan-card popular">
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1a202c' }}>Professional</h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#667eea', marginBottom: '1rem' }}>$49<span style={{ fontSize: '1rem', color: '#6b7280' }}>/mo</span></div>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem', textAlign: 'left' }}>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    Unlimited Interactions
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    Advanced Analytics
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    24/7 Priority Support
                  </li>
                </ul>
                <button className="btn btn-primary" style={{ width: '100%', background: '#f59e0b' }}>Upgrade</button>
              </div>

              <div className="plan-card">
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1a202c' }}>Enterprise</h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#667eea', marginBottom: '1rem' }}>$149<span style={{ fontSize: '1rem', color: '#6b7280' }}>/mo</span></div>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem', textAlign: 'left' }}>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    Everything in Pro
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    White-label Solution
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    Dedicated Manager
                  </li>
                </ul>
                <button className="btn btn-primary" style={{ width: '100%' }}>Contact Sales</button>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="card payment-methods">
            <h3 className="stats-title">Payment Methods</h3>
            <div className="payment-grid">
              <div className="payment-card">
                <div className="card-info">
                  <div>
                    <div className="card-brand">Visa</div>
                    <div className="card-number">•••• •••• •••• 4242</div>
                    <div style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>Expires 12/26</div>
                  </div>
                  <div style={{ background: '#059669', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '5px', fontSize: '0.75rem' }}>Primary</div>
                </div>
              </div>
              <div className="payment-card">
                <div style={{ textAlign: 'center', color: '#6b7280', padding: '2rem 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>+</div>
                  <div>Add New Payment Method</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;