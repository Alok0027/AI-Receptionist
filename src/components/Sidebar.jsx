import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  PhoneCall,
  Calendar,
  History,
  Brain,
  CreditCard,
  Settings,
  PlugZap,
  HelpCircle,
  User,
  LogOut,
} from "lucide-react";
import kairologo from "../assets/kairologo.png";

const navItems = [
    { href: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { href: "/call-management", icon: <PhoneCall size={20} />, label: "Call Management" },
    { href: "/appointments", icon: <Calendar size={20} />, label: "Appointments Scheduling" },
    { href: "/billing", icon: <CreditCard size={20} />, label: "Billing & Subscription" },
    { href: "/integrations", icon: <PlugZap size={20} />, label: "Integrations" },
    { href: "/support-help", icon: <HelpCircle size={20} />, label: "Support / Help" },
    { href: "/profile", icon: <User size={20} />, label: "Profile / Account" },
];

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)

    return (
        <div style={container}>
            <motion.nav
                initial={false}
                animate={isCollapsed ? "closed" : "open"}
                custom={height}
                ref={containerRef}
                style={nav}
            >
                <motion.div style={background} variants={sidebarVariants} custom={height} />
                {/* Logo Container */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '64px', // Match topbar height
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '1px solid #e5e7eb',
                        padding: '0 16px',
                    }}
                    variants={itemVariants}
                >
                    <img 
                        src={kairologo} 
                        alt="Kairo AI" 
                        style={{
                            height: '32px',
                            width: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </motion.div>
                <Navigation />
                <MenuToggle toggle={toggleSidebar} />
            </motion.nav>
        </div>
    )
}

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const Navigation = () => (
    <motion.ul style={list} variants={navVariants}>
        {navItems.map((item, i) => (
            <MenuItem item={item} key={i} />
        ))}
        {/* Logout Button */}
        <motion.li
            style={{
                ...listItem,
                marginTop: 'auto',
                borderTop: '1px solid #e5e7eb',
                paddingTop: '16px'
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                to="/"
                style={{
                    ...iconPlaceholder,
                    color: '#dc2626',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}
                onClick={() => {
                    // Clear any stored authentication data
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('user');
                }}
            >
                <LogOut size={20} />
                <span>Logout</span>
            </Link>
        </motion.li>
    </motion.ul>
)

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const MenuItem = ({ item }) => {
    return (
        <motion.li
            style={listItem}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={item.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ ...iconPlaceholder }}>{item.icon}</div>
                <div style={{ ...textPlaceholder }}>{item.label}</div>
            </Link>
        </motion.li>
    )
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ toggle }) => (
    <button style={toggleContainer} onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
)

/**
 * ==============   Styles   ================
 */

const container = {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: 300,
    maxWidth: "100%",
    height: "100vh",
    backgroundColor: "transparent",
    borderRadius: 0,
    overflow: "hidden",
    zIndex: 40,
}

const nav = {
    width: 300,
}

const background = {
    backgroundColor: "#fafaf9",
    position: "absolute",
    top: -10,
    left: 0,
    bottom: 0,
    width: 300,
    borderRight: "1px solid #e5e7eb",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
}

const toggleContainer = {
    outline: "none",
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "absolute",
    top: 8, // Adjusted to be higher and centered with the topbar
    left: 15,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "transparent",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const list = {
    listStyle: "none",
    padding: "25px",
    margin: 0,
    position: "absolute",
    top: 64, 
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 64px)", 
    paddingLeft: "40px", 
    paddingRight: "40px",
}

const listItem = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    margin: "0 0 20px 0",
    listStyle: "none",
    cursor: "pointer",
    color: "#000",
}

const iconPlaceholder = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    flex: "40px 0",
    marginRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const textPlaceholder = {
    borderRadius: 5,
    width: 200,
    height: 20,
    flex: 1,
}

/**
 * ==============   Utils   ================
 */

const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 })

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}

export default Sidebar;