import React, { useState } from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  Plus, 
  Settings, 
  Zap, 
  Database, 
  Calendar, 
  MessageSquare, 
  Phone, 
  FileSpreadsheet, 
  Users, 
  Clock,
  Wifi,
  WifiOff,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Star,
  Sparkles,
  Search,
  Filter,
  Download,
  Upload,
  BarChart3,
  Shield,
  Globe,
  Mail,
  Video,
  Headphones,
  CreditCard,
  ShoppingCart,
  Truck,
  Building,
  BookOpen,
  Lock,
  Eye,
  Play,
  Pause,
  AlertCircle,
  Activity,
  Layers,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Printer,
  Camera,
  Mic,
  Speaker,
  X,
  Check,
  Info,
  Grid3X3,
  List
} from 'lucide-react';

const IntegrationsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all'); // all, connected, available

  const integrations = [
    // CRM Systems
    {
      id: 1,
      name: 'HubSpot',
      category: 'crm',
      description: 'Comprehensive CRM with marketing automation and sales tools',
      longDescription: 'HubSpot provides a complete customer platform with CRM, marketing, sales, and service tools. Sync contacts, track deals, and automate workflows seamlessly.',
      icon: '🔶',
      status: 'connected',
      lastSync: '2 mins ago',
      features: ['Contact Sync', 'Deal Tracking', 'Activity Logs', 'Email Marketing', 'Lead Scoring'],
      setupTime: '5 mins',
      difficulty: 'Easy',
      pricing: 'Free - $1,200/mo',
      rating: 4.8,
      reviews: 12500,
      popular: true,
      documentation: 'https://developers.hubspot.com',
      supportedFeatures: ['Two-way sync', 'Real-time updates', 'Custom fields', 'Webhooks'],
      dataTypes: ['Contacts', 'Companies', 'Deals', 'Tasks', 'Notes']
    },
    {
      id: 2,
      name: 'Salesforce',
      category: 'crm',
      description: 'World\'s #1 CRM platform for enterprise sales management',
      longDescription: 'Salesforce is the global leader in CRM software, offering comprehensive solutions for sales, service, marketing, and more with advanced AI capabilities.',
      icon: '☁️',
      status: 'connected',
      lastSync: '5 mins ago',
      features: ['Lead Management', 'Opportunity Tracking', 'Custom Fields', 'Reports & Dashboards', 'Einstein AI'],
      setupTime: '15 mins',
      difficulty: 'Advanced',
      pricing: '$25 - $300/user/mo',
      rating: 4.6,
      reviews: 8900,
      popular: true,
      documentation: 'https://developer.salesforce.com',
      supportedFeatures: ['API Integration', 'Custom objects', 'Workflow automation', 'Real-time sync'],
      dataTypes: ['Leads', 'Accounts', 'Opportunities', 'Contacts', 'Cases']
    },
    {
      id: 3,
      name: 'ClientNest',
      category: 'crm',
      description: 'Your custom-built CRM solution with AI-powered insights',
      longDescription: 'ClientNest is your proprietary CRM system designed specifically for reception AI workflows with advanced automation and intelligent customer insights.',
      icon: '🏠',
      status: 'connected',
      lastSync: '1 min ago',
      features: ['AI Insights', 'Custom Workflows', 'Real-time Sync', 'Advanced Analytics', 'Smart Routing'],
      setupTime: '2 mins',
      difficulty: 'Easy',
      pricing: 'Included',
      rating: 5.0,
      reviews: 450,
      popular: false,
      documentation: 'Internal docs',
      supportedFeatures: ['Native integration', 'Custom fields', 'Advanced automation', 'Real-time analytics'],
      dataTypes: ['Clients', 'Projects', 'Communications', 'Analytics', 'Reports'],
      isCustom: true
    },
    {
      id: 4,
      name: 'Pipedrive',
      category: 'crm',
      description: 'Sales-focused CRM designed by salespeople for salespeople',
      longDescription: 'Pipedrive is a sales CRM and pipeline management tool that helps teams organize leads and deals to boost sales productivity.',
      icon: '🚀',
      status: 'available',
      lastSync: null,
      features: ['Pipeline Management', 'Deal Tracking', 'Activity Reminders', 'Email Integration', 'Mobile App'],
      setupTime: '10 mins',
      difficulty: 'Moderate',
      pricing: '$15 - $99/user/mo',
      rating: 4.5,
      reviews: 3200,
      popular: false,
      documentation: 'https://developers.pipedrive.com',
      supportedFeatures: ['REST API', 'Webhooks', 'Custom fields', 'Bulk operations'],
      dataTypes: ['Deals', 'Contacts', 'Organizations', 'Activities', 'Products']
    },
    // Booking & Scheduling
    {
      id: 5,
      name: 'Calendly',
      category: 'booking',
      description: 'Automated scheduling software for meetings and appointments',
      longDescription: 'Calendly eliminates the back-and-forth emails by letting people schedule meetings with you based on your availability preferences.',
      icon: '📅',
      status: 'connected',
      lastSync: '3 mins ago',
      features: ['Auto Scheduling', 'Buffer Times', 'Meeting Types', 'Payment Collection', 'Team Scheduling'],
      setupTime: '5 mins',
      difficulty: 'Easy',
      pricing: 'Free - $16/user/mo',
      rating: 4.7,
      reviews: 5600,
      popular: true,
      documentation: 'https://developer.calendly.com',
      supportedFeatures: ['Webhook notifications', 'API access', 'Custom branding', 'Integrations'],
      dataTypes: ['Events', 'Invitees', 'Users', 'Organizations', 'Webhooks']
    },
    {
      id: 6,
      name: 'Vagaro',
      category: 'booking',
      description: 'All-in-one business management for salons and spas',
      longDescription: 'Vagaro provides scheduling, POS, marketing, and business management tools specifically designed for beauty and wellness businesses.',
      icon: '💄',
      status: 'available',
      lastSync: null,
      features: ['Appointment Booking', 'Staff Management', 'Payment Processing', 'Inventory Management', 'Marketing Tools'],
      setupTime: '20 mins',
      difficulty: 'Moderate',
      pricing: '$25 - $60/mo',
      rating: 4.3,
      reviews: 2100,
      popular: false,
      documentation: 'https://www.vagaro.com/api',
      supportedFeatures: ['API integration', 'Real-time booking', 'Staff scheduling', 'Payment processing'],
      dataTypes: ['Appointments', 'Clients', 'Staff', 'Services', 'Payments']
    },
    {
      id: 7,
      name: 'Acuity Scheduling',
      category: 'booking',
      description: 'Advanced scheduling with intake forms and packages',
      longDescription: 'Acuity Scheduling offers powerful appointment scheduling with advanced features like intake forms, packages, and group classes.',
      icon: '⏰',
      status: 'available',
      lastSync: null,
      features: ['Intake Forms', 'Package Booking', 'Group Classes', 'Payment Integration', 'Advanced Customization'],
      setupTime: '15 mins',
      difficulty: 'Moderate',
      pricing: 'Free - $50/mo',
      rating: 4.4,
      reviews: 1800,
      popular: false,
      documentation: 'https://developers.acuityscheduling.com',
      supportedFeatures: ['API access', 'Webhooks', 'Custom forms', 'White-label options'],
      dataTypes: ['Appointments', 'Clients', 'Forms', 'Packages', 'Classes']
    },
    {
      id: 8,
      name: 'Square Appointments',
      category: 'booking',
      description: 'Free appointment scheduling integrated with Square POS',
      longDescription: 'Square Appointments provides free online booking software that integrates seamlessly with Square\'s payment processing and POS systems.',
      icon: '⬜',
      status: 'available',
      lastSync: null,
      features: ['Free Online Booking', 'POS Integration', 'Staff Management', 'Customer Database', 'Marketing Tools'],
      setupTime: '10 mins',
      difficulty: 'Easy',
      pricing: 'Free - $50/mo',
      rating: 4.2,
      reviews: 950,
      popular: false,
      documentation: 'https://developer.squareup.com',
      supportedFeatures: ['Square API', 'Payment processing', 'Inventory sync', 'Customer management'],
      dataTypes: ['Appointments', 'Customers', 'Staff', 'Services', 'Payments']
    },
    // Communication Platforms
    {
      id: 9,
      name: 'WhatsApp Business',
      category: 'communication',
      description: 'Connect with customers via WhatsApp messaging platform',
      longDescription: 'WhatsApp Business API allows you to send and receive messages, provide customer support, and send notifications to customers on WhatsApp.',
      icon: '💬',
      status: 'connected',
      lastSync: '30 seconds ago',
      features: ['Message Templates', 'Media Sharing', 'Group Messaging', 'Business Profile', 'Analytics'],
      setupTime: '30 mins',
      difficulty: 'Advanced',
      pricing: 'Pay per message',
      rating: 4.6,
      reviews: 7800,
      popular: true,
      documentation: 'https://developers.facebook.com/docs/whatsapp',
      supportedFeatures: ['Business API', 'Webhooks', 'Message templates', 'Media support'],
      dataTypes: ['Messages', 'Contacts', 'Media', 'Templates', 'Analytics']
    },
    {
      id: 10,
      name: 'Twilio SMS',
      category: 'communication',
      description: 'Global SMS and voice communication platform',
      longDescription: 'Twilio provides programmable communication tools for SMS, voice, video, and email, enabling businesses to communicate with customers worldwide.',
      icon: '📱',
      status: 'connected',
      lastSync: '1 min ago',
      features: ['Global SMS', 'Two-way Messaging', 'Delivery Reports', 'Voice Calls', 'Video Chat'],
      setupTime: '15 mins',
      difficulty: 'Moderate',
      pricing: 'Pay per use',
      rating: 4.5,
      reviews: 4200,
      popular: true,
      documentation: 'https://www.twilio.com/docs',
      supportedFeatures: ['REST API', 'Webhooks', 'Message status', 'Phone number management'],
      dataTypes: ['Messages', 'Calls', 'Numbers', 'Logs', 'Analytics']
    },
    {
      id: 11,
      name: 'Slack',
      category: 'communication',
      description: 'Team collaboration and workflow automation platform',
      longDescription: 'Slack brings team communication together in one place with channels, direct messages, and powerful integrations for better collaboration.',
      icon: '💼',
      status: 'available',
      lastSync: null,
      features: ['Channel Notifications', 'Bot Integration', 'File Sharing', 'Video Calls', 'Workflow Automation'],
      setupTime: '10 mins',
      difficulty: 'Easy',
      pricing: 'Free - $15/user/mo',
      rating: 4.3,
      reviews: 8900,
      popular: false,
      documentation: 'https://api.slack.com',
      supportedFeatures: ['Bot API', 'Webhooks', 'Slash commands', 'Interactive components'],
      dataTypes: ['Messages', 'Channels', 'Users', 'Files', 'Workflows']
    },
    {
      id: 12,
      name: 'Microsoft Teams',
      category: 'communication',
      description: 'Enterprise communication and collaboration platform',
      longDescription: 'Microsoft Teams combines workplace chat, video meetings, file storage, and application integration in a single collaborative workspace.',
      icon: '🔷',
      status: 'available',
      lastSync: null,
      features: ['Team Chat', 'Video Meetings', 'File Collaboration', 'App Integration', 'Phone System'],
      setupTime: '20 mins',
      difficulty: 'Moderate',
      pricing: '$4 - $57/user/mo',
      rating: 4.1,
      reviews: 3400,
      popular: false,
      documentation: 'https://docs.microsoft.com/graph',
      supportedFeatures: ['Graph API', 'Bot framework', 'Tabs', 'Messaging extensions'],
      dataTypes: ['Messages', 'Teams', 'Channels', 'Files', 'Meetings']
    },
    {
      id: 13,
      name: 'Discord',
      category: 'communication',
      description: 'Voice, video and text communication for communities',
      longDescription: 'Discord provides voice, video, and text communication for communities and businesses with powerful bot integrations and server management.',
      icon: '🎮',
      status: 'available',
      lastSync: null,
      features: ['Voice Channels', 'Text Chat', 'Bot Integration', 'Server Management', 'Screen Sharing'],
      setupTime: '15 mins',
      difficulty: 'Moderate',
      pricing: 'Free - $10/user/mo',
      rating: 4.4,
      reviews: 2100,
      popular: false,
      documentation: 'https://discord.com/developers/docs',
      supportedFeatures: ['Bot API', 'Webhooks', 'Slash commands', 'Voice integration'],
      dataTypes: ['Messages', 'Guilds', 'Users', 'Channels', 'Voice']
    },
    // Email & Marketing
    {
      id: 14,
      name: 'Mailchimp',
      category: 'marketing',
      description: 'All-in-one marketing platform for email campaigns',
      longDescription: 'Mailchimp helps you market smarter with advanced email marketing, automation, and analytics tools to grow your business.',
      icon: '🐵',
      status: 'connected',
      lastSync: '15 mins ago',
      features: ['Email Campaigns', 'Marketing Automation', 'Audience Segmentation', 'A/B Testing', 'Analytics'],
      setupTime: '10 mins',
      difficulty: 'Easy',
      pricing: 'Free - $350/mo',
      rating: 4.2,
      reviews: 6700,
      popular: true,
      documentation: 'https://mailchimp.com/developer',
      supportedFeatures: ['Marketing API', 'Webhooks', 'List management', 'Campaign tracking'],
      dataTypes: ['Lists', 'Campaigns', 'Subscribers', 'Reports', 'Automations']
    },
    {
      id: 15,
      name: 'Gmail',
      category: 'communication',
      description: 'Google\'s email service with powerful integration capabilities',
      longDescription: 'Gmail integration allows you to send emails, manage conversations, and sync contact information directly from your reception AI.',
      icon: '📧',
      status: 'available',
      lastSync: null,
      features: ['Send Emails', 'Read Messages', 'Contact Sync', 'Label Management', 'Search'],
      setupTime: '5 mins',
      difficulty: 'Easy',
      pricing: 'Free with Google account',
      rating: 4.5,
      reviews: 12000,
      popular: true,
      documentation: 'https://developers.google.com/gmail',
      supportedFeatures: ['Gmail API', 'OAuth2', 'Push notifications', 'Batch operations'],
      dataTypes: ['Messages', 'Threads', 'Labels', 'Contacts', 'Attachments']
    },
    // Data & Analytics
    {
      id: 16,
      name: 'Microsoft Excel',
      category: 'data',
      description: 'Export and sync data with Excel spreadsheets',
      longDescription: 'Microsoft Excel integration enables automatic data export, real-time updates, and custom report generation for comprehensive business analytics.',
      icon: '📊',
      status: 'connected',
      lastSync: '10 mins ago',
      features: ['Auto Export', 'Real-time Updates', 'Custom Reports', 'Pivot Tables', 'Chart Generation'],
      setupTime: '5 mins',
      difficulty: 'Easy',
      pricing: '$6 - $57/user/mo',
      rating: 4.6,
      reviews: 9500,
      popular: true,
      documentation: 'https://docs.microsoft.com/graph',
      supportedFeatures: ['Graph API', 'Real-time sync', 'Custom formulas', 'Chart creation'],
      dataTypes: ['Workbooks', 'Worksheets', 'Tables', 'Charts', 'Ranges']
    },
    {
      id: 17,
      name: 'Google Sheets',
      category: 'data',
      description: 'Cloud-based spreadsheet with real-time collaboration',
      longDescription: 'Google Sheets provides cloud-based spreadsheet functionality with real-time collaboration, automatic sync, and powerful API integration.',
      icon: '📈',
      status: 'available',
      lastSync: null,
      features: ['Live Sync', 'Collaborative Editing', 'API Access', 'Add-ons', 'Custom Functions'],
      setupTime: '5 mins',
      difficulty: 'Easy',
      pricing: 'Free - $18/user/mo',
      rating: 4.4,
      reviews: 7800,
      popular: true,
      documentation: 'https://developers.google.com/sheets',
      supportedFeatures: ['Sheets API', 'Real-time updates', 'Custom functions', 'Add-on development'],
      dataTypes: ['Spreadsheets', 'Sheets', 'Cells', 'Charts', 'Named ranges']
    },
    {
      id: 18,
      name: 'Power BI',
      category: 'data',
      description: 'Business intelligence and data visualization platform',
      longDescription: 'Microsoft Power BI transforms your data into rich visuals and interactive dashboards for better business insights and decision making.',
      icon: '📊',
      status: 'available',
      lastSync: null,
      features: ['Interactive Dashboards', 'Data Modeling', 'Real-time Analytics', 'Custom Visuals', 'Mobile Access'],
      setupTime: '25 mins',
      difficulty: 'Advanced',
      pricing: '$10 - $20/user/mo',
      rating: 4.3,
      reviews: 2800,
      popular: false,
      documentation: 'https://docs.microsoft.com/power-bi',
      supportedFeatures: ['REST API', 'Embedded analytics', 'Custom visuals', 'Real-time streaming'],
      dataTypes: ['Datasets', 'Reports', 'Dashboards', 'Dataflows', 'Workspaces']
    },
    {
      id: 19,
      name: 'Tableau',
      category: 'data',
      description: 'Advanced data visualization and business intelligence',
      longDescription: 'Tableau helps people see and understand data with powerful visualization capabilities and advanced analytics for data-driven decisions.',
      icon: '📉',
      status: 'available',
      lastSync: null,
      features: ['Advanced Visualizations', 'Data Connections', 'Interactive Dashboards', 'Statistical Analysis', 'Mobile BI'],
      setupTime: '30 mins',
      difficulty: 'Advanced',
      pricing: '$70 - $150/user/mo',
      rating: 4.4,
      reviews: 1900,
      popular: false,
      documentation: 'https://help.tableau.com/current/api',
      supportedFeatures: ['REST API', 'Embedded analytics', 'Custom connectors', 'Webhooks'],
      dataTypes: ['Workbooks', 'Datasources', 'Projects', 'Users', 'Sites']
    },
    // Automation & Workflow
    {
      id: 20,
      name: 'Zapier',
      category: 'automation',
      description: 'Connect 5000+ apps with automated workflows',
      longDescription: 'Zapier enables you to connect your apps and automate workflows without coding, helping you be more productive and efficient.',
      icon: '⚡',
      status: 'connected',
      lastSync: '5 mins ago',
      features: ['Multi-step Zaps', 'Conditional Logic', 'Error Handling', 'Team Collaboration', 'Advanced Filters'],
      setupTime: '10 mins',
      difficulty: 'Easy',
      pricing: 'Free - $599/mo',
      rating: 4.7,
      reviews: 8200,
      popular: true,
      documentation: 'https://zapier.com/developer',
      supportedFeatures: ['CLI platform', 'Webhooks', 'Filters', 'Formatters'],
      dataTypes: ['Zaps', 'Triggers', 'Actions', 'Filters', 'Formatters']
    },
    {
      id: 21,
      name: 'Microsoft Power Automate',
      category: 'automation',
      description: 'Workflow automation across Microsoft and third-party services',
      longDescription: 'Power Automate helps you create automated workflows between your favorite apps and services to synchronize files, get notifications, and more.',
      icon: '🔄',
      status: 'available',
      lastSync: null,
      features: ['Business Process Flows', 'AI Builder', 'Desktop Automation', 'Approval Workflows', 'Integration'],
      setupTime: '20 mins',
      difficulty: 'Moderate',
      pricing: '$15 - $40/user/mo',
      rating: 4.1,
      reviews: 1500,
      popular: false,
      documentation: 'https://docs.microsoft.com/power-automate',
      supportedFeatures: ['REST API', 'Custom connectors', 'AI capabilities', 'Desktop flows'],
      dataTypes: ['Flows', 'Connections', 'Environments', 'Solutions', 'Approvals']
    },
    // Payment Processing
    {
      id: 22,
      name: 'Stripe',
      category: 'payment',
      description: 'Complete payment processing platform for businesses',
      longDescription: 'Stripe provides payment processing software and APIs for e-commerce websites and mobile applications with advanced fraud protection.',
      icon: '💳',
      status: 'available',
      lastSync: null,
      features: ['Payment Processing', 'Subscription Management', 'Fraud Prevention', 'Global Support', 'Mobile Payments'],
      setupTime: '15 mins',
      difficulty: 'Moderate',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.6,
      reviews: 5400,
      popular: true,
      documentation: 'https://stripe.com/docs',
      supportedFeatures: ['REST API', 'Webhooks', 'Connect platform', 'Mobile SDKs'],
      dataTypes: ['Payments', 'Customers', 'Subscriptions', 'Products', 'Invoices']
    },
    {
      id: 23,
      name: 'PayPal',
      category: 'payment',
      description: 'Global digital payment platform',
      longDescription: 'PayPal enables secure online payments and money transfers with buyer and seller protection for businesses of all sizes.',
      icon: '🅿️',
      status: 'available',
      lastSync: null,
      features: ['Online Payments', 'Buyer Protection', 'International Transfers', 'Mobile Payments', 'Invoicing'],
      setupTime: '10 mins',
      difficulty: 'Easy',
      pricing: '2.9% + fixed fee',
      rating: 4.2,
      reviews: 7800,
      popular: true,
      documentation: 'https://developer.paypal.com',
      supportedFeatures: ['REST API', 'SDK integration', 'Webhooks', 'Sandbox testing'],
      dataTypes: ['Payments', 'Orders', 'Subscriptions', 'Disputes', 'Webhooks']
    },
    // E-commerce
    {
      id: 24,
      name: 'Shopify',
      category: 'ecommerce',
      description: 'Complete e-commerce platform for online stores',
      longDescription: 'Shopify provides everything you need to start, sell, market and manage your business with a complete commerce platform.',
      icon: '🛍️',
      status: 'available',
      lastSync: null,
      features: ['Online Store', 'Inventory Management', 'Payment Processing', 'Marketing Tools', 'Analytics'],
      setupTime: '20 mins',
      difficulty: 'Moderate',
      pricing: '$29 - $299/mo',
      rating: 4.4,
      reviews: 4200,
      popular: true,
      documentation: 'https://shopify.dev',
      supportedFeatures: ['REST API', 'GraphQL API', 'Webhooks', 'App development'],
      dataTypes: ['Products', 'Orders', 'Customers', 'Inventory', 'Analytics']
    },
    {
      id: 25,
      name: 'WooCommerce',
      category: 'ecommerce',
      description: 'WordPress e-commerce plugin with extensive customization',
      longDescription: 'WooCommerce is a customizable, open-source e-commerce platform built on WordPress for creating online stores.',
      icon: '🔌',
      status: 'available',
      lastSync: null,
      features: ['WordPress Integration', 'Product Management', 'Order Tracking', 'Payment Gateways', 'Extensions'],
      setupTime: '25 mins',
      difficulty: 'Moderate',
      pricing: 'Free + extensions',
      rating: 4.3,
      reviews: 3100,
      popular: false,
      documentation: 'https://woocommerce.github.io/woocommerce-rest-api-docs',
      supportedFeatures: ['REST API', 'Webhooks', 'Custom post types', 'Plugin development'],
      dataTypes: ['Products', 'Orders', 'Customers', 'Coupons', 'Reports']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Integrations', icon: Sparkles, count: integrations.length },
    { id: 'crm', name: 'CRM & Sales', icon: Users, count: integrations.filter(i => i.category === 'crm').length },
    { id: 'booking', name: 'Booking & Scheduling', icon: Calendar, count: integrations.filter(i => i.category === 'booking').length },
    { id: 'communication', name: 'Communication', icon: MessageSquare, count: integrations.filter(i => i.category === 'communication').length },
    { id: 'marketing', name: 'Email & Marketing', icon: Mail, count: integrations.filter(i => i.category === 'marketing').length },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3, count: integrations.filter(i => i.category === 'data').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: integrations.filter(i => i.category === 'automation').length },
    { id: 'payment', name: 'Payments', icon: CreditCard, count: integrations.filter(i => i.category === 'payment').length },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: integrations.filter(i => i.category === 'ecommerce').length }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = activeCategory === 'all' || integration.category === activeCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || integration.status === filterStatus;
    return matchesCategory && matchesSearch && matchesStatus;
  });

  const connectedCount = integrations.filter(i => i.status === 'connected').length;
  const availableCount = integrations.filter(i => i.status === 'available').length;

  const handleConnect = (integration) => {
    setSelectedIntegration(integration);
    setShowConnectModal(true);
  };

  const handleDisconnect = (integrationId) => {
    console.log(`Disconnecting integration ${integrationId}`);
  };

  const handleConfigure = (integrationId) => {
    console.log(`Configuring integration ${integrationId}`);
  };

  const ConnectModal = () => {
    const [step, setStep] = useState(1);
    const [connecting, setConnecting] = useState(false);

    const handleProceedConnect = () => {
      setConnecting(true);
      setTimeout(() => {
        setConnecting(false);
        setStep(3);
      }, 2000);
    };

    if (!selectedIntegration) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-2xl">
                  {selectedIntegration.icon}
                </div>
                <div>
                  <h2 className="text-xl font-normal text-gray-900">Connect {selectedIntegration.name}</h2>
                  <p className="text-sm text-gray-500">{selectedIntegration.description}</p>
                </div>
              </div>
              <button
                onClick={() => setShowConnectModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Integration Overview</h3>
                  <p className="text-gray-600 mb-6">{selectedIntegration.longDescription}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Setup Time</span>
                      </div>
                      <p className="text-gray-600">{selectedIntegration.setupTime}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Activity className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Difficulty</span>
                      </div>
                      <p className="text-gray-600">{selectedIntegration.difficulty}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedIntegration.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Data Types</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedIntegration.dataTypes.map((type, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium"
                  >
                    Continue Setup
                  </button>
                  <button
                    onClick={() => setShowConnectModal(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Authentication & Permissions</h3>
                  <p className="text-gray-600 mb-6">
                    {selectedIntegration.name} will need access to your account to sync data. 
                    We'll redirect you to their secure login page.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900 mb-1">What we'll access:</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          {selectedIntegration.supportedFeatures.map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Security & Privacy</h4>
                    <p className="text-sm text-gray-600">
                      Your data is encrypted in transit and at rest. We never store your login credentials 
                      and only access the minimum data required for functionality.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={handleProceedConnect}
                    disabled={connecting}
                    className="flex-1 bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {connecting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Connecting...</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        <span>Connect to {selectedIntegration.name}</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Successfully Connected!</h3>
                  <p className="text-gray-600">
                    {selectedIntegration.name} has been connected to your account. 
                    Data synchronization will begin shortly.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Next Steps</h4>
                  <ul className="text-sm text-gray-600 space-y-1 text-left">
                    <li>• Initial data sync will complete in a few minutes</li>
                    <li>• Configure sync preferences in settings</li>
                    <li>• Set up automated workflows if needed</li>
                  </ul>
                </div>

                <button
                  onClick={() => setShowConnectModal(false)}
                  className="w-full bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const IntegrationCard = ({ integration }) => {
    const isConnected = integration.status === 'connected';
    
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:border-gray-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-2xl">
              {integration.icon}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-normal text-gray-900">{integration.name}</h3>
                {integration.popular && (
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                    Popular
                  </span>
                )}
                {integration.isCustom && (
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    Custom
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{integration.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({integration.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {isConnected ? (
              <>
                <div className="flex items-center space-x-1 text-green-600">
                  <Wifi className="w-4 h-4" />
                  <span className="text-xs font-medium">Connected</span>
                </div>
                <button
                  onClick={() => handleConfigure(integration.id)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4 text-gray-400" />
                </button>
              </>
            ) : (
              <button
                onClick={() => handleConnect(integration)}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
              >
                Connect
              </button>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{integration.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{integration.setupTime} setup</span>
          <span>{integration.difficulty}</span>
          <span>{integration.pricing}</span>
        </div>

        {isConnected && (
          <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg">
            <span className="text-sm text-green-700">Last sync: {integration.lastSync}</span>
            <RefreshCw className="w-4 h-4 text-green-600" />
          </div>
        )}

        <div className="flex flex-wrap gap-1 mt-3">
          {integration.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              {feature}
            </span>
          ))}
          {integration.features.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{integration.features.length - 3} more
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-medium text-gray-900">Integrations</h1>
                <p className="text-gray-600 mt-1">Connect your favorite tools and automate your workflow</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">{connectedCount} Connected</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">{availableCount} Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent w-full sm:w-64"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="connected">Connected</option>
              <option value="available">Available</option>
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-stone-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-stone-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-stone-700 text-stone-200'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Integrations Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
        }`}>
          {filteredIntegrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No integrations found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>

      {/* Connect Modal */}
      {showConnectModal && <ConnectModal />}
    </div>
  );
};

export default IntegrationsPage;