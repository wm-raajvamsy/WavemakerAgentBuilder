'use client';
import React from 'react';
import "./header.css";

interface HeaderProps {
  onSave?: () => void;
  onRestore?: () => void;
  onRun?: () => void;
}

export default function Header({ onSave, onRestore, onRun }: HeaderProps) {
    return (
        <div className="headerContainer">
            {/* Logo Section */}
            <div className="headerLogo">
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
                <button 
                    className="actionButton" 
                    onClick={onRun}
                >
                    Run
                </button>
                <button 
                    className="actionButton" 
                    onClick={onSave}
                >
                    Save
                </button>
                <button 
                    className="actionButton" 
                    onClick={onRestore}
                >
                    Restore
                </button>
                <button className="actionButton blackButton">Publish</button>
            </div>
        </div>
    );
}