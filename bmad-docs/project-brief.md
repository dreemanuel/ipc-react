# Project Brief: Indonesian Premium Cacao E-commerce Platform

## Introduction / Problem Statement

An established Indonesian premium cacao producer and processor currently operates a hybrid business model serving both B2B bulk suppliers and retail consumers through manual social media and email outreach. Despite having a solid foundation with existing React-based web presence, the company faces critical challenges in scaling internationally to Dubai and US markets while efficiently managing dual customer experiences.

**Core Problems Being Solved:**
1. **Manual Sales Process Limitation**: Current social media and email-only approach cannot scale for international B2B relationships and retail growth
2. **Fragmented Customer Experience**: No unified platform to serve both B2B buyers seeking bulk quotes and retail customers wanting direct purchases
3. **International Expansion Barriers**: Lack of compliance-ready systems for Dubai (FIRS registration, Halal certification) and US (FDA requirements) market entry
4. **Revenue Optimization Gap**: Missing tools to maximize the proven 80/20 B2B-retail revenue split model used by successful competitors like Guittard and Valrhona

**Opportunity Being Addressed:**
Transform from manual sales processes to a sophisticated e-commerce platform that can capture the significant growth in UAE e-commerce (projected $8B by 2025) and US specialty food markets, while leveraging Indonesia's position as the world's 3rd largest cocoa producer to command premium pricing (50-100% above commodity rates).

## Vision & Goals

- **Vision:** Establish the leading digital platform for Indonesian premium cacao that seamlessly serves both professional chocolatiers and conscious consumers globally, while setting new standards for transparency and sustainability in the cacao supply chain.

- **Primary Goals (MVP):**
  - **Goal 1:** Launch functional e-commerce platform supporting both B2B quote requests and retail purchases by Q2 2024
  - **Goal 2:** Achieve 80% B2B / 20% retail revenue split with premium pricing (USD 3-4.2/kg vs. USD 2/kg commodity) within 6 months of launch
  - **Goal 3:** Complete Dubai market regulatory compliance (FIRS registration, Halal certification) and launch UAE sales channel by Q3 2024
  - **Goal 4:** Convert 50% of current social media leads into platform users and establish automated email marketing funnel
  - **Goal 5:** Reduce manual sales process time by 70% through platform automation while maintaining personalized B2B relationship quality

- **Success Metrics (Initial Ideas):**
  - Monthly Recurring Revenue (MRR) from B2B contracts
  - Average Order Value (AOV) difference between B2B and retail segments
  - Social media to platform conversion rate
  - International order fulfillment success rate
  - Customer acquisition cost (CAC) vs. lifetime value (LTV) by segment

## Target Audience / Users

### Primary User Segments

**B2B Professional Buyers (80% target revenue)**
- **Profile:** Chocolatiers, confectionery manufacturers, specialty food producers, craft chocolate makers
- **Geographic:** Indonesia (domestic), Dubai/UAE, United States, Europe
- **Behavior:** Research-focused, specification-driven, relationship-based purchasing
- **Needs:** Bulk pricing, quality certifications, consistent supply, technical specifications, sample requests
- **Order Patterns:** High-value orders (USD 5,000-50,000+), quarterly/seasonal ordering, long-term contracts

**Retail Conscious Consumers (20% target revenue)**
- **Profile:** Health-conscious consumers, home bakers, specialty food enthusiasts, gift buyers
- **Geographic:** Urban Indonesia, international food enthusiasts, Indonesian diaspora
- **Behavior:** Brand-conscious, sustainability-focused, social media influenced
- **Needs:** Product authenticity, sustainability story, premium quality, convenient purchasing
- **Order Patterns:** Moderate values (USD 25-200), impulse and planned purchases, gift seasonality

### Secondary User Segments
- **Social Media Followers:** Current audience requiring platform migration and conversion
- **International Distributors:** Potential partners for market expansion
- **Sustainability Advocates:** B Corp certification and direct farmer partnership interested buyers

## Key Features / Scope (High-Level Ideas for MVP)

### Core E-commerce Foundation
- **Dual Customer Experience:** Unified platform with differentiated flows for B2B quote requests vs. retail direct purchase
- **Product Catalog Management:** <30 product inventory with bulk vs. retail packaging options, specifications, and certifications
- **Quote Request System:** B2B inquiry forms with bulk pricing, minimum order quantities, and lead qualification
- **Shopping Cart & Checkout:** Retail purchase flow with international shipping calculation and multi-currency support

### Customer Account Management
- **Account Type Detection:** Automatic segmentation between B2B and retail users with appropriate feature access
- **User Registration & Profiles:** Business verification for B2B accounts, order history, and preference management
- **Contact & Communication:** Integrated contact forms, B2B relationship management, and customer service tools

### International Market Support
- **Multi-Currency Pricing:** USD, AED, IDR support with dynamic pricing for different markets
- **Shipping Integration:** International logistics for both bulk B2B and retail orders with tracking
- **Compliance Documentation:** Automated generation of certificates and documentation for Dubai and US requirements

### Marketing & Lead Conversion
- **Social Media Integration:** Instagram/Facebook feed embedding, social sharing, and lead capture from existing channels
- **Email Marketing Automation:** Newsletter signup, cart abandonment, B2B nurturing sequences, and customer retention
- **Content Management:** Blog/story section for sustainability messaging and company credentials

## Post MVP Features / Scope and Ideas

### Advanced Platform Features
- **AI-Powered Pricing Optimization:** Dynamic pricing algorithms for market competitiveness and margin optimization
- **Advanced Analytics Dashboard:** Customer lifetime value tracking, segment performance analysis, and revenue forecasting
- **Subscription & Contract Management:** Recurring B2B orders, automatic renewals, and contract lifecycle management
- **Inventory Management Integration:** Real-time stock levels, automated reordering, and supply chain visibility

### Enhanced User Experience
- **Advanced Animations & Interactions:** Framer Motion integration for premium brand experience and engaging product showcases
- **Rich Media Management:** Professional product photography, video content, 360-degree product views, and virtual farm tours
- **Mobile App Development:** React Native companion app for key customer segments and field sales team
- **Personalization Engine:** Recommended products, customized pricing, and tailored content based on user behavior

### International Expansion
- **Multi-Language Support:** Arabic for UAE market, additional languages for European expansion
- **Regional Compliance Automation:** Automated handling of various international food import requirements
- **Local Payment Methods:** Regional payment processing and preferred local payment options
- **Regional Content Management:** Localized marketing content and cultural adaptation

### Advanced Business Features
- **Farmer Portal Integration:** Direct sourcing platform for transparency and supply chain management
- **B Corp Certification Support:** Sustainability tracking, impact reporting, and certification maintenance tools
- **Advanced CRM Integration:** Integration with enterprise CRM systems for large B2B customers
- **API Marketplace:** Third-party integrations for logistics, payments, and business tools

## Known Technical Constraints or Preferences

### Constraints
- **Budget Consideration:** Cost-effective solution avoiding complex backend infrastructure initially
- **Timeline Pressure:** "As soon as possible" launch requirement demanding efficient development approach
- **Small Product Catalog:** <30 products total, allowing for simpler inventory management initially
- **International Compliance:** Must support Dubai FIRS registration and US FDA requirements from launch
- **Existing Codebase:** Avoid total rebuild - enhance current React foundation which is "good but basic"

### Initial Architectural Preferences
- **Frontend Framework:** Continue with React 18 + TypeScript + Vite foundation already established
- **State Management:** Implement Zustand (already installed) for customer type, cart, and user state management
- **Styling Approach:** Enhance existing SCSS architecture with component-level organization
- **Routing Strategy:** Fix current BrowserRouter issues and implement proper React Router DOM v7 integration
- **API Architecture:** API-first design with microservices approach for scalability without over-engineering
- **Deployment Strategy:** Platform-as-a-Service (PaaS) approach rather than complex DevOps infrastructure

### Risks
- **Regulatory Complexity:** Dubai and US food import requirements may create launch delays
- **Technical Debt:** Current routing and component issues require immediate fixes before feature development
- **Market Competition:** Established players like Valrhona and TCHO have significant market presence
- **Resource Availability:** Small team may limit parallel development of B2B and retail features
- **International Logistics:** Shipping complexity for food products may impact customer experience
- **Currency Fluctuation:** International pricing strategy may be affected by volatile exchange rates

### User Preferences
- **Advanced Interactivity:** Strong preference for Framer Motion integration and engaging animations for premium brand positioning
- **Media-Rich Experience:** Plan for extensive photography and videography integration showcasing products and processes
- **Social Media Priority:** Heavy emphasis on converting existing social media presence into platform engagement
- **Sustainability Focus:** Brand positioning around direct farmer relationships and ethical sourcing practices
- **Mobile Optimization:** Recognition that B2B buyers increasingly use mobile devices (78% want better mobile experience)
- **Performance Priority:** Fast loading times critical for international users and mobile experience

## Relevant Research

**Comprehensive research findings documented in:** `bmad-docs/deep-research-findings.md`

**Key Strategic Insights Applied:**
- **Revenue Model Validation:** 80/20 B2B-retail split proven by successful competitors (Guittard: 85% B2B, 15% retail)
- **Premium Pricing Opportunity:** Fermented beans command 50-100% premiums (USD 3-4.2/kg vs. USD 2/kg commodity)
- **Market Opportunity Quantification:** UAE e-commerce projected $8B by 2025, with 29.1% growth in packaged food segment
- **Technical Architecture Guidance:** Headless commerce with React ecosystem, mobile-first design based on 78% B2B mobile preference
- **Competitive Benchmarking:** Analysis of Valrhona, TCHO, Guittard revealing technology integration and farmer partnership importance
- **Regulatory Roadmap:** Detailed Dubai FIRS registration and US FDA compliance requirements with specific implementation steps

## PM Prompt

This Project Brief provides the full context for the Indonesian Premium Cacao E-commerce Platform. Please start in 'PRD Generation Mode', review the brief thoroughly to work with the user to create the PRD section by section as the template indicates, asking for any necessary clarification or suggesting improvements as your mode 1 programming allows. 

The research findings show this hybrid B2B/retail model has significant potential with proper execution, and the existing React foundation provides a solid starting point for rapid development toward international market expansion.