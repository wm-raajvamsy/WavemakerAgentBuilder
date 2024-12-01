'use client';
import React from 'react';
import "./header.css";
export default function Header() {
    return (
        <div className="headerContainer">
            {/* Logo Section */}
            <div className="headerLogo">
                {/* <img
                    src="/logo.png"
                    alt="Logo"
                    className="logo"
                /> */}
                <span className="logoText">WaveAI</span>
            </div>

            {/* Navigation Buttons */}
            <div className="headerNav">
                <button className="navButton">Workflow</button>
                <button className="navButton">Export</button>
                <button className="navButton">Analytics</button>
                <button className="navButton">Manager</button>
            </div>

            {/* Breadcrumb and Actions */}
            <div className="headerActions">
                <button className="actionButton greenButton">Share</button>
                <button className="actionButton">Run</button>
                <button className="actionButton">Save</button>
                <button className="actionButton">Restore</button>
                <button className="actionButton blackButton">Publish</button>
            </div>
        </div>
    );
}
