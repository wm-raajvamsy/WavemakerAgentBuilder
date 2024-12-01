'use client'
import React, { useState } from "react";;
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BsDownload, BsUpload } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import { FaDownload, FaUpload, FaCommentDots, FaQuestionCircle, FaPen, FaFile, FaLink, FaMicrophone, FaImage, FaVideo } from "react-icons/fa";
import "./leftnav.css";

export default function Leftnav() {
  const [expandedSections, setExpandedSections] = useState<any>({});

  const toggleSection = (section: any) => {
    setExpandedSections((prev: any) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleDragStart = (event: React.DragEvent, item: string) => {
    event.dataTransfer.setData('text/plain', item);
  };

  return (
    <div className="leftnav-container">
      <div className="search-box">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
        <input type="text" placeholder="Search Nodes" aria-label="Search Nodes" />
        <span className="shortcut">⌘K</span>
      </div>

      <div className="nav-list">
        {[
          {
            section: "inputs",
            label: "Inputs",
            icon: BsDownload,
            items: [
              { name: "Input", icon: RiEdit2Line },
              // { name: "Files", icon: FaFile },
              // { name: "URL", icon: FaLink },
              // { name: "Audio", icon: FaMicrophone },
              // { name: "Image", icon: FaImage },
              // { name: "YouTube", icon: FaVideo },
            ],
          },
          {
            section: "outputs",
            label: "Outputs",
            icon: BsUpload,
            items: [
              { name: "Output", icon: FaPen },
              // { name: "Audio", icon: FaMicrophone },
              // { name: "Image", icon: FaImage },
            ],
          },
          // {
          //   section: "triggers",
          //   label: "Triggers",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "Prompts", icon: FaCommentDots },
          //   ],
          // },
          // {
          //   section: "llms",
          //   label: "LLMs",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "OpenAI", icon: FaCommentDots },
          //     { name: "Anthropic", icon: FaCommentDots },
          //     { name: "Google Bard", icon: FaCommentDots },
          //   ],
          // },
          // {
          //   section: "knowledgeBases",
          //   label: "Knowledge Bases",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "Docs + Search", icon: FaCommentDots },
          //   ],
          // },
          // {
          //   section: "databases",
          //   label: "Databases",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "Files", icon: FaCommentDots },
          //   ],
          // },
          // {
          //   section: "dynamicVectorStores",
          //   label: "Dynamic Vector Stores",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "Basic", icon: FaCommentDots },
          //   ],
          // },
          // {
          //   section: "plugins",
          //   label: "Plugins",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "OpenAI", icon: FaCommentDots },
          //   ],
          // },
          // {
          //   section: "documentReaders",
          //   label: "Document Readers",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "Files", icon: FaCommentDots },
          //   ],
          // },
          // {
          //   section: "logic",
          //   label: "Logic",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "Basic", icon: FaCommentDots },
          //   ],
          // },
          // {
          //   section: "utils",
          //   label: "Utils",
          //   icon: FaCommentDots,
          //   items: [
          //     { name: "Output 1", icon: FaCommentDots },
          //   ],
          // },
        ].map(({ section, label, icon: Icon, items }) => (
          <div
            key={section}
            className={`expandable-section ${expandedSections[section] ? 'expanded' : ''}`}
          >
            <div
              className="section-header"
              onClick={() => toggleSection(section)}
            >
              <div className="nav-item">
                <Icon />
                <span>{label}</span>
              </div>
              <span className="icon-container">
                {expandedSections[section] ? <MdKeyboardArrowDown className="icon"/> : <MdKeyboardArrowRight className="icon"/> }
              </span>
            </div>
            <div className="section-content">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="nav-item"
                  draggable
                  onDragStart={(event) => handleDragStart(event, item.name)}
                >
                  <item.icon className="icon" />
                  <span>{item.name}</span>
                  <RxHamburgerMenu className="hamburger-icon"/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="help-section">
        <FaQuestionCircle />
        <span>Help & More</span>
      </div>
    </div>
  );
}