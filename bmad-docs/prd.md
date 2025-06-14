# Indonesian Premium Cacao E-commerce Platform Product Requirements Document (PRD)

*Based on Project Brief: bmad-docs/project-brief.md*

## Goals and Background Context

### Goals

- **Fix Critical Navigation Issues**: Resolve broken BrowserRouter and routing problems preventing basic site functionality
- **Enable Dual Customer Experience**: Support both B2B quote requests and retail direct purchases on unified platform
- **Convert Social Media Leads**: Transform existing social media outreach into structured website lead capture and conversion
- **Support International Sales**: Enable compliant order processing for Dubai and US markets with proper documentation
- **Automate Manual Processes**: Replace email-based sales process with automated quote generation and order management
- **Achieve 2-Week Launch Timeline**: Deploy functional e-commerce platform within client's aggressive timeline
- **Maintain Premium Brand Experience**: Enhance existing design system with advanced interactions using Framer Motion

### Background Context

An established Indonesian premium cacao company currently operates through manual social media and email outreach to serve both B2B bulk suppliers and retail consumers. Their existing React-based website has solid design foundations but critical functionality gaps including broken navigation, incomplete pages, and no e-commerce capabilities.

The company is actively expanding to Dubai and US markets, requiring compliance-ready systems for international food trade. With fewer than 30 products in their catalog, the platform scope is manageable but must serve dual customer segments effectively. Research shows successful hybrid cacao companies achieve 80/20 B2B-retail revenue splits, commanding premium pricing 50-100% above commodity rates when properly positioned.

## Requirements

### Functional

- **FR1**: Navigation system must properly integrate React Router DOM v7 without nesting BrowserRouter components
- **FR2**: Product catalog must support both bulk (B2B) and retail packaging with different pricing displays
- **FR3**: Quote request system must capture B2B inquiries with company details, volume requirements, and specifications
- **FR4**: Shopping cart must handle retail purchases with quantity limits and shipping calculations
- **FR5**: User account system must differentiate between B2B business accounts and retail consumer accounts
- **FR6**: Contact forms must integrate with existing email marketing workflow for lead nurturing
- **FR7**: Product pages must display technical specifications, certifications, and bulk availability for B2B users
- **FR8**: International shipping calculator must support UAE and US markets with proper documentation requirements
- **FR9**: Social media integration must capture leads from Instagram and Facebook with automatic follow-up
- **FR10**: Email automation must segment B2B vs retail communications with appropriate messaging
- **FR11**: Multi-currency support must handle IDR, USD, and AED with dynamic pricing
- **FR12**: Mobile experience must support both B2B research workflows and retail purchasing on all devices
- **FR13**: Order management must generate proper documentation for international food trade compliance
- **FR14**: Analytics must track conversion rates from social media to quotes/purchases by customer segment

### Non Functional

- **NFR1**: Page load times must be under 3 seconds for international users including Dubai and US markets
- **NFR2**: Mobile responsiveness must provide full functionality across all screen sizes (research shows 78% B2B buyers use mobile)
- **NFR3**: Platform must handle concurrent users during peak social media traffic without performance degradation
- **NFR4**: All forms must provide immediate validation and clear error messaging for international users
- **NFR5**: Platform must maintain 99.5% uptime to support international time zones and business hours
- **NFR6**: Security must comply with PCI DSS standards for international payment processing
- **NFR7**: Data backup must ensure no loss of quote requests or orders during system maintenance
- **NFR8**: Platform must support browser compatibility including mobile Safari and Chrome for international markets

## User Interface Design Goals

### Overall UX Vision

Create a premium, sophisticated e-commerce experience that seamlessly serves both professional B2B buyers researching bulk purchases and conscious consumers seeking authentic Indonesian cacao products. The interface should convey trust, quality, and transparency while making complex B2B processes feel simple and retail purchases feel premium.

*Assumptions made: Based on existing SCSS design system showing cacao-themed colors and professional typography, plus research indicating successful cacao companies emphasize sustainability and craft positioning.*

### Key Interaction Paradigms

- **Progressive Disclosure**: Start with unified product browsing, then reveal B2B or retail specific features based on user behavior and account type
- **Contextual Assistance**: Provide inline help and specifications for B2B users while keeping retail experience clean and focused
- **Social Proof Integration**: Seamlessly blend social media content and customer testimonials throughout the experience
- **Touch-First Design**: Prioritize mobile gestures and interactions since majority of users access via mobile devices

*Assumptions made: Mobile-first approach based on 78% B2B mobile usage research, social integration based on current business model.*

### Core Screens and Views

- **Homepage**: Dual messaging hero section with clear B2B vs retail pathways
- **Product Catalog**: Filterable by bulk/retail with specifications toggle
- **Product Detail Page**: Technical specs panel for B2B, storytelling focus for retail
- **Quote Request Form**: Comprehensive B2B inquiry capture with volume pricing
- **Shopping Cart**: Retail checkout with international shipping options
- **Account Dashboard**: Different views for B2B order history vs retail purchase tracking
- **Contact/About Pages**: Company credentials and sustainability story
- **International Shipping Info**: Compliance documentation and requirements page

### Accessibility

WCAG 2.1 AA compliance for international accessibility standards, ensuring platform works with screen readers and keyboard navigation for professional B2B environments.

### Branding

- **Existing SCSS Design System**: Leverage current cacao-themed color palette, professional typography, and component styling
- **Premium Positioning**: Sophisticated animations and interactions using Framer Motion to convey craft quality
- **Sustainability Focus**: Earth tones, natural imagery, and transparency messaging throughout
- **Professional Trust**: Clean layouts, clear information hierarchy, and credibility indicators for B2B confidence

*Based on: Existing design system in src/styles/scss/ and research showing successful cacao companies emphasize craft and sustainability positioning.*

### Target Device and Platforms

Web responsive (mobile-first) supporting iOS Safari, Android Chrome, and desktop browsers for international markets. Primary focus on mobile experience given B2B mobile usage trends and social media traffic sources.

## Technical Assumptions

*Based on technical-preferences and existing codebase analysis*

### Repository Structure

**Monorepo** - Single repository structure maintaining current React application with organized folder structure for components, pages, and styles. This supports rapid development timeline and avoids complexity of managing multiple repositories for small team.

### Service Architecture

**Enhanced Monolith with API-First Design** - Build upon existing React foundation with clean API layer for future microservices migration. Current scope (<30 products, 2-week timeline) doesn't justify microservices complexity, but API-first approach enables future scaling.

*Rationale: Existing React codebase is solid foundation, aggressive timeline requires leveraging current work, small product catalog doesn't need complex architecture.*

### Testing Requirements

- **Unit Testing**: Jest + React Testing Library for component testing
- **Integration Testing**: API endpoint testing for quote submissions and order processing
- **Manual Testing Convenience**: Development tools for testing B2B vs retail flows and international features
- **Cross-browser Testing**: Manual verification on mobile Safari and Chrome for international users

*Focus on critical path testing given 2-week timeline - prioritize user flows over comprehensive coverage.*

### Additional Technical Assumptions and Requests

- **State Management**: Implement Zustand (already installed) for cart state, user account type, and form persistence
- **Animation Library**: Framer Motion integration for premium interactions and page transitions
- **Form Handling**: React Hook Form for complex B2B quote forms with validation
- **International Features**: React-Intl for currency formatting and potential future localization
- **Email Integration**: API connections to existing email marketing platform for automated follow-ups
- **Image Optimization**: Next-gen format support for product photography and media-rich content
- **Performance Monitoring**: Basic analytics integration for tracking conversion funnels
- **Deployment**: Vercel or Netlify for rapid deployment with preview environments for client review

## Epics

### Epic List for Review

1. **Foundation Fixes & Core Infrastructure**: **[CRITICAL PRIORITY]** Fix critical navigation issues and establish proper routing foundation
2. **Product Catalog & Discovery**: Create functional product browsing with B2B/retail differentiation  
3. **Customer Account & Quote System**: Enable B2B quote requests and basic account management
4. **Retail Shopping & Checkout**: Implement retail purchase flow with international shipping
5. **Integration & Automation**: Connect social media leads and email marketing automation

*Rationale: Epic 1 is BLOCKING all other development - navigation must be fixed first. Each subsequent epic delivers incremental deployable value.*

**⚠️ CRITICAL DEPENDENCY:** Epic 1 Story 1.1 (Navigation Fix) must be completed before any other development work can proceed effectively.

---

## Epic 1: Foundation Fixes & Core Infrastructure

**Goal**: Establish a fully functional website foundation by fixing critical navigation issues, completing placeholder pages, and implementing proper routing architecture that supports both B2B and retail user flows.

### Story 1.1: Fix Navigation and Routing System

As a **website visitor**,  
I want **to navigate between pages without broken links or errors**,  
so that **I can explore products and company information seamlessly**.

#### Acceptance Criteria
- **1.1.1**: **[BLOCKING]** BrowserRouter is properly positioned at app root level, not nested within Navbar component
- **1.1.2**: **[BLOCKING]** All navigation links use React Router Link components instead of anchor tags with hash navigation
- **1.1.3**: All defined routes (/shop, /cart, /signup, /contact) load without 404 errors
- **1.1.4**: Navigation remains consistent across all pages with proper active state indicators
- **1.1.5**: Mobile navigation functions properly with collapsed menu on small screens
- **1.1.6**: Implement RootLayout component with proper BrowserRouter positioning and CustomerTypeProvider wrapper
- **1.1.7**: Configure Vite path aliases (@components, @stores, @utils, etc.) for clean imports
- **1.1.8**: Add error boundaries for graceful navigation failure handling

### Story 1.2: Complete Essential Page Structures

As a **potential customer**,  
I want **to access basic company and product information on all pages**,  
so that **I can understand the business and make informed decisions**.

#### Acceptance Criteria
- **1.2.1**: ProductsPage displays placeholder product grid layout with navigation to individual products
- **1.2.2**: CartPage shows empty cart state with clear call-to-action to browse products
- **1.2.3**: ContactPage includes working contact form with company information and location details
- **1.2.4**: SignupPage provides basic newsletter signup form connected to email marketing
- **1.2.5**: NotFoundPage includes helpful navigation back to main site sections
- **1.2.6**: All pages maintain consistent header/footer layout and branding

### Story 1.3: Implement User Type Detection System

As a **platform administrator**,  
I want **to detect and track whether visitors are B2B or retail customers**,  
so that **I can provide appropriate experiences and pricing**.

#### Acceptance Criteria
- **1.3.1**: Zustand customerStore manages user account type state (guest, retail, b2b)
- **1.3.2**: Account type detection based on URL parameters, form submissions, or explicit selection
- **1.3.3**: Visual indicators show current user experience mode without being obtrusive
- **1.3.4**: User type preferences persist across browser sessions using localStorage
- **1.3.5**: Easy switching between B2B and retail views for comparison and testing
- **1.3.6**: Implement Zustand store persistence with localStorage for critical state
- **1.3.7**: Add regional detection (Indonesia/UAE/US) with automatic currency setting
- **1.3.8**: Create useCustomerType hook with derived state selectors (isB2B, isRetail, etc.)
- **1.3.9**: Implement CustomerTypeProvider context wrapper for global customer state access

---

## Epic 2: Product Catalog & Discovery

**Goal**: Create a comprehensive product browsing experience that showcases the cacao product range with appropriate information depth for both B2B buyers seeking specifications and retail customers wanting product stories and purchase options.

### Story 2.1: Build Dynamic Product Catalog System

As a **product manager**,  
I want **to manage product information from a centralized data structure**,  
so that **I can easily update product details, pricing, and availability**.

#### Acceptance Criteria
- **2.1.1**: TypeScript interfaces define product data structure including B2B and retail variants
- **2.1.2**: JSON or TypeScript file contains all ~30 products with complete information
- **2.1.3**: Product data includes specifications, certifications, packaging options, and pricing tiers
- **2.1.4**: Images are properly imported and optimized for web delivery
- **2.1.5**: Product categories support both bulk ingredients and retail consumer products

### Story 2.2: Create Product Grid and Filtering

As a **customer browsing products**,  
I want **to easily find products relevant to my needs**,  
so that **I can quickly identify items for bulk purchase or retail buying**.

#### Acceptance Criteria
- **2.2.1**: Product grid displays products with images, names, and key attributes
- **2.2.2**: Filter options include product type (bulk vs retail), category, and certifications
- **2.2.3**: Search functionality finds products by name, description, or specifications
- **2.2.4**: Grid layout is responsive and optimized for mobile browsing
- **2.2.5**: Loading states and empty states provide clear user feedback

### Story 2.3: Develop Product Detail Pages

As a **customer evaluating a specific product**,  
I want **to see comprehensive product information appropriate to my buying context**,  
so that **I can make informed purchase or inquiry decisions**.

#### Acceptance Criteria
- **2.3.1**: Product detail page shows high-quality images with zoom functionality
- **2.3.2**: B2B users see technical specifications, bulk pricing, and minimum order quantities
- **2.3.3**: Retail users see product story, usage suggestions, and direct purchase options
- **2.3.4**: Certifications and quality information display prominently for professional buyers
- **2.3.5**: Related products and cross-selling suggestions appear based on user type
- **2.3.6**: Mobile product pages maintain full functionality with touch-optimized interactions

### Story 2.4: Implement Performance-Optimized Product Images

As a **customer browsing products internationally**,  
I want **fast-loading, high-quality product images**,  
so that **I can evaluate products quickly regardless of my connection speed**.

#### Acceptance Criteria
- **2.4.1**: Implement responsive image component with WebP/AVIF support and JPEG fallbacks
- **2.4.2**: Add lazy loading with Intersection Observer API for performance
- **2.4.3**: Generate multiple image sizes (400px, 800px, 1200px) for responsive delivery
- **2.4.4**: Implement skeleton loading states for images during load
- **2.4.5**: Network-aware image quality selection based on connection speed
- **2.4.6**: Image optimization integrated with CDN delivery for international users

---

## Epic 3: Customer Account & Quote System

**Goal**: Enable B2B customers to create business accounts, submit detailed quote requests for bulk orders, and manage their inquiry history while providing appropriate account features for retail customers.

### Story 3.1: Implement Customer Account Creation

As a **returning customer**,  
I want **to create an account appropriate to my business needs**,  
so that **I can save my information and track my orders or quotes**.

#### Acceptance Criteria
- **3.1.1**: Registration form differentiates between business (B2B) and individual (retail) accounts
- **3.1.2**: B2B registration captures company name, business type, volume requirements, and contact details
- **3.1.3**: Retail registration includes basic contact information and preferences
- **3.1.4**: Email verification process confirms account creation and adds to appropriate email lists
- **3.1.5**: Account creation integrates with existing email marketing segmentation

### Story 3.2: Build B2B Quote Request System

As a **business buyer**,  
I want **to submit detailed quote requests for bulk purchases**,  
so that **I can receive accurate pricing and terms for my specific needs**.

#### Acceptance Criteria
- **3.2.1**: Quote request form captures company details, product requirements, and volume needs
- **3.2.2**: Multi-product quote requests allow bundling different items in single inquiry
- **3.2.3**: Specification requirements and quality certifications can be detailed in requests
- **3.2.4**: Shipping destination and timeline requirements are captured for accurate quotes
- **3.2.5**: Quote submissions generate email notifications to both customer and company sales team
- **3.2.6**: Form validation prevents incomplete submissions and provides helpful error messages

### Story 3.3: Create Account Dashboard and History

As a **registered customer**,  
I want **to track my quote requests and order history**,  
so that **I can reference previous inquiries and reorder efficiently**.

#### Acceptance Criteria
- **3.3.1**: Account dashboard shows different information based on B2B vs retail account type
- **3.3.2**: B2B dashboard displays quote request history with status updates
- **3.3.3**: Retail dashboard shows order history and tracking information
- **3.3.4**: Account settings allow updating contact information and communication preferences
- **3.3.5**: Easy access to resubmit similar quote requests or reorder previous purchases

### Story 3.4: Implement Customer Account State Management

As a **registered customer**,  
I want **robust account state management and authentication**,  
so that **my account information persists and my access is properly controlled**.

#### Acceptance Criteria
- **3.4.1**: Implement customerStore with profile, preferences, and account status management
- **3.4.2**: Add authentication state persistence across browser sessions with secure token handling
- **3.4.3**: Create customer type switching with appropriate feature access controls
- **3.4.4**: Implement account verification workflows for B2B business accounts
- **3.4.5**: Add account status transitions (anonymous → registered → verified)
- **3.4.6**: Create account recovery and password reset functionality

---

## Epic 4: Retail Shopping & Checkout

**Goal**: Implement complete retail e-commerce functionality including shopping cart, checkout process, payment integration, and international shipping support for direct consumer purchases.

### Story 4.1: Build Shopping Cart Functionality

As a **retail customer**,  
I want **to add products to a cart and manage my order before checkout**,  
so that **I can purchase multiple items efficiently**.

#### Acceptance Criteria
- **4.1.1**: Add to cart functionality from product detail pages with quantity selection
- **4.1.2**: Cart state persists across browser sessions using Zustand and localStorage
- **4.1.3**: Cart page shows itemized list with quantities, pricing, and removal options
- **4.1.4**: Quantity updates automatically recalculate totals and shipping costs
- **4.1.5**: Cart availability validation prevents ordering out-of-stock items
- **4.1.6**: Mobile cart experience optimized for touch interactions

### Story 4.2: Implement International Shipping Calculator

As a **international retail customer**,  
I want **to see accurate shipping costs and delivery timeframes**,  
so that **I can understand total order costs before completing purchase**.

#### Acceptance Criteria
- **4.2.1**: Shipping calculator supports Indonesia (domestic), UAE, and US destinations
- **4.2.2**: Different shipping methods and costs display based on destination and order size
- **4.2.3**: International shipping requirements and restrictions clearly communicated
- **4.2.4**: Estimated delivery timeframes account for customs processing times
- **4.2.5**: Food import compliance requirements displayed for international orders

### Story 4.3: Create Checkout and Payment Process

As a **retail customer ready to purchase**,  
I want **to complete my order securely with multiple payment options**,  
so that **I can receive my products through my preferred payment method**.

#### Acceptance Criteria
- **4.3.1**: Checkout form captures billing and shipping information with validation
- **4.3.2**: Multiple payment options including credit cards and regional payment methods
- **4.3.3**: Order confirmation email with tracking information and contact details
- **4.3.4**: Payment processing integration with secure checkout flow
- **4.3.5**: Order data capture for fulfillment and customer service follow-up
- **4.3.6**: Mobile checkout optimized for completion without abandonment

---

## Epic 5: Integration & Automation

**Goal**: Connect the website with existing social media presence and email marketing systems to automate lead capture, customer communication, and convert existing manual processes into streamlined digital workflows.

### Story 5.1: Integrate Social Media Lead Capture

As a **social media follower**,  
I want **seamless transition from social content to website inquiry**,  
so that **I can easily engage with the business without losing context**.

#### Acceptance Criteria
- **5.1.1**: Landing pages designed for social media traffic with clear conversion paths
- **5.1.2**: UTM parameter tracking identifies social media traffic sources and campaigns
- **5.1.3**: Social sharing buttons enable easy content sharing from product pages
- **5.1.4**: Instagram and Facebook feed integration showcases fresh content on website
- **5.1.5**: Social proof and testimonials prominently featured throughout site

### Story 5.2: Implement Email Marketing Automation

As a **marketing manager**,  
I want **automated email sequences for different customer types and actions**,  
so that **I can nurture leads and customers without manual email management**.

#### Acceptance Criteria
- **5.2.1**: Quote request submissions trigger B2B nurturing email sequence
- **5.2.2**: Retail customers receive purchase confirmations and shipping updates
- **5.2.3**: Newsletter signup forms segment subscribers based on B2B vs retail interest
- **5.2.4**: Abandoned cart emails encourage retail purchase completion
- **5.2.5**: Email templates maintain brand consistency and mobile optimization
- **5.2.6**: Integration with existing email marketing platform preserves current subscriber lists

### Story 5.3: Add Analytics and Conversion Tracking

As a **business owner**,  
I want **to understand how the website converts social media traffic into sales**,  
so that **I can optimize marketing efforts and platform performance**.

#### Acceptance Criteria
- **5.3.1**: Google Analytics integration tracks user journeys from social media to conversion
- **5.3.2**: Conversion goals set up for quote requests, retail purchases, and email signups
- **5.3.3**: Dashboard displays key metrics including traffic sources and conversion rates
- **5.3.4**: A/B testing capability for different landing pages and conversion paths
- **5.3.5**: Performance monitoring identifies page speed issues and mobile experience problems

### Story 5.4: Implement Performance Monitoring & Analytics

As a **business owner**,  
I want **comprehensive performance monitoring for international users**,  
so that **I can optimize the platform for global customers and track conversion effectiveness**.

#### Acceptance Criteria
- **5.4.1**: Integrate Web Vitals tracking for LCP, FID, CLS metrics with real user monitoring
- **5.4.2**: Add regional performance monitoring with specific targets for Indonesia/UAE/US markets
- **5.4.3**: Implement performance budget alerts for bundle size and load times
- **5.4.4**: Create customer journey analytics for B2B vs retail conversion tracking
- **5.4.5**: Monitor international shipping calculator performance and error rates
- **5.4.6**: Track social media conversion rates and attribution across different platforms

---

## Change Log

| Change | Date | Version | Description | Author |
| ------ | ---- | ------- | ----------- | ------ |
| Initial Creation | 2024-06-14 | 1.0 | Complete PRD based on Project Brief research and client requirements | Pam (PM) |
| Frontend Architecture Integration | 2024-06-14 | 1.1 | Added 3 new stories, enhanced 8 existing stories, prioritized navigation fix as blocking dependency | Poe (PO) |

---

## Checklist Results Report

### Category Statuses

| Category | Status | Critical Issues |
|----------|--------|----------------|
| 1. Problem Definition & Context | PASS | None |
| 2. MVP Scope Definition | PASS | None |
| 3. User Experience Requirements | PASS | None |
| 4. Functional Requirements | PASS | None |
| 5. Non-Functional Requirements | PASS | None |
| 6. Epic & Story Structure | PASS | None |
| 7. Technical Guidance | PASS | None |
| 8. Cross-Functional Requirements | PARTIAL | Email marketing integration details need API specification |
| 9. Clarity & Communication | PASS | None |

### Critical Deficiencies

**None Critical** - All essential elements are properly addressed for a 2-week MVP timeline.

### Minor Recommendations

1. **Email Marketing API Specification**: While email integration is mentioned, specific API endpoints and authentication methods should be clarified with client's existing email platform
2. **Payment Processing Details**: Payment integration specifics can be refined during architecture phase based on regional requirements
3. **Compliance Documentation Templates**: Dubai FIRS and US FDA documentation templates could be prepared but are not blocking for development start

### Final Decision

**✅ READY FOR ARCHITECT**: The PRD and epics are comprehensive, properly structured, and ready for architectural design. The functional requirements clearly define the dual B2B/retail experience, technical constraints align with existing React foundation, and epic structure supports the aggressive 2-week timeline with incremental value delivery.

---

## Design Architect Prompt

**Daisy (Design Architect)** - You are receiving a comprehensive PRD for an Indonesian Premium Cacao E-commerce Platform. Please enter **UI/UX Specification Mode** and create detailed frontend architecture and user experience specifications based on this PRD. Focus on the dual B2B/retail customer experience, mobile-first design (78% B2B mobile usage), and premium branding with Framer Motion integration. The existing SCSS design system should be enhanced, not replaced. Priority: Fix navigation issues and create progressive disclosure for B2B vs retail features.

---

## Architect Prompt

**Archie (Architect)** - You are receiving a comprehensive PRD for an Indonesian Premium Cacao E-commerce Platform requiring a 2-week development timeline. Please enter **Create Architecture Mode** using this document as input. Focus on enhancing the existing React foundation with proper routing, Zustand state management, dual customer experience architecture, and international e-commerce features. Avoid over-engineering - prioritize functional solutions that support the aggressive timeline while maintaining code quality and scalability for future growth.

---

*PRD Complete - Ready for team handoff*