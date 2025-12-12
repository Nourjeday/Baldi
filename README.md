# Baldi – AI Agent for Citizen Participation & Local Governance 🇹🇳

🏆 **3rd Prize Winner – Civisprint Hackathon**  
Organized by the **World Bank** & the **Ministry of Interior of Tunisia**

---

## Project Overview
**Baldi** is a web-based platform featuring an **AI-powered agent** designed to enhance **citizen participation and local governance** in Tunisia.

The project was developed during the **Civisprint Hackathon**, an initiative aimed at engaging young Tunisian talents in building innovative solutions for **local government web portals**, which serve as a key interface between citizens and municipalities.

Over a 48-hour sprint, multidisciplinary teams worked to improve transparency, accessibility, and interaction between citizens and local authorities.  
**Baldi was awarded Third Prize** for its usability, relevance, and innovation.

---

##  Challenge Context
Local government portals are essential tools for:
- Managing local affairs
- Communicating decisions and services
- Encouraging citizen engagement

However, many portals suffer from complexity and low usability.  
Baldi addresses this gap by providing an **intelligent, user-friendly interface** that simplifies access to local information and services.

---

##  Solution
Baldi combines:
- A **web application**
- An **AI conversational agent**
- A **simple and intuitive user interface**

The AI agent assists citizens in navigating the local government portal, understanding procedures, and accessing relevant information efficiently.

---

##  Key Features
- AI-powered conversational assistant
- User-friendly and accessible web interface
- Simplified navigation of local government services
- Improved citizen–municipality interaction
- Designed for inclusivity and ease of use

 
 ##  Architecture Overview

Baldi was designed as a **self-contained, embeddable AI-assisted guide** that can operate independently or be integrated into a larger local government web portal.

The architecture prioritizes **modularity, usability, and progressive rollout**, making it suitable for public-sector digital platforms.

### High-Level Design
The solution is composed of four main layers:

### 1. Host Integration Layer
- A lightweight integration module allows Baldi to be embedded into an existing portal.
- Supports lazy loading and feature-flag activation for staged rollout.
- Inherits user context such as authentication and language settings from the host system.

### 2. Presentation Layer
- Web-based user interface built with reusable, accessible components.
- Designed to be **user-friendly, intuitive, and inclusive**, following modern UI/UX practices.
- Theme-aware to align visually with the host portal.

### 3. AI Agent & Content Layer
- AI-powered conversational agent guides users through local government services.
- Content is structured and configurable, enabling easy updates and localization.
- Supports different interaction types (guided steps, informational prompts, task-based assistance).

### 4. Navigation & State Management
- Controls user flow, step progression, and conditional paths.
- Tracks user progress locally, with the option to synchronize with backend services.
- Emits events for usage analytics and improvement of citizen experience.

---

###  Security, Accessibility & Performance
- Designed to respect host authentication and authorization mechanisms.
- Accessible by keyboard and screen readers.
- Optimized for performance using lazy loading and minimal initial payloads.

---

###  Deployment & Rollout
- Can run as a standalone module or be embedded into a government portal.
- Feature-flagged activation enables gradual rollout and user testing.
- Suitable for future expansion and production hardening.
