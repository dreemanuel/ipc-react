# Indonesian Premium Cacao E-commerce Platform - Frontend Architecture

## Introduction

**Project Name:** Indonesian Premium Cacao E-commerce Platform  
**Main Architecture Document:** `bmad-docs/prd.md` (Technical Assumptions section)  
**UI/UX Specification:** To be developed by Design Architect  
**Primary Design Files:** Existing SCSS design system in `src/styles/scss/`  
**Deployed Storybook:** Not applicable for MVP phase  

This frontend architecture document provides comprehensive technical guidance for implementing a dual B2B/retail e-commerce platform with international support for Dubai and US markets. The architecture enhances the existing React foundation while implementing customer-type aware experiences and performance optimization for international users.

## Overall Frontend Philosophy & Patterns

### Framework & Core Libraries
- **React 18.3.1** with TypeScript for type safety and modern features
- **Vite 6.0.1** for build tooling and hot module replacement
- **React Router DOM v7** for client-side routing (fix implementation, not replacement)
- **Zustand 5.0.1** for lightweight, performant state management
- **Framer Motion** for premium brand animations and interactions
- **SCSS with CSS Modules** for enhanced styling architecture

### Component Architecture
**Atomic Design Pattern** building upon existing structure:
- **Atoms**: `ui/` components (buttons, form fields, icons)
- **Molecules**: `ui/` compound components (cards, navigation items)
- **Organisms**: `sections/` components (hero, product grids, forms)
- **Templates**: `layout/` components (header, footer, wrappers)
- **Pages**: Route-level components with full page layouts

### State Management Strategy
**Zustand Store Architecture** with feature-based slices:
- **Unidirectional data flow** with predictable state updates
- **Customer-type aware** state management for B2B/retail differentiation
- **Persistent critical state** using localStorage for cart and preferences
- **Optimistic updates** for immediate UI feedback

### Data Flow
- **Actions → Store Updates → Component Re-renders**
- **Context-aware rendering** based on customer type
- **Error boundaries** for graceful failure handling
- **Server state separation** using React Query patterns for API data

### Styling Approach
- **Enhanced SCSS architecture** building on existing `src/styles/scss/`
- **CSS Modules + SCSS** for scoped styling with design system variables
- **Mobile-first responsive design** with defined breakpoint tokens
- **Framer Motion integration** with SCSS transitions for performance

### Key Design Patterns
- **Progressive Disclosure**: Reveal features based on customer context
- **Compound Components**: Complex UI elements as composable systems
- **Custom Hooks**: Shared logic for customer detection, form handling
- **Error-First Design**: Every component handles loading, error, empty states

## Detailed Frontend Directory Structure

```
src/
├── components/
│   ├── layout/                 # Template-level components
│   │   ├── Header.tsx         # Main header (enhance existing)
│   │   ├── Navbar.tsx         # Navigation (fix routing issues)
│   │   ├── Footer.tsx         # Site footer (enhance existing)
│   │   ├── Wrapper.tsx        # Layout container (enhance existing)
│   │   └── RootLayout.tsx     # New: Router layout wrapper
│   │
│   ├── sections/              # Organism-level page sections
│   │   ├── Hero.tsx           # Homepage hero (enhance existing)
│   │   ├── ProductGrid.tsx    # Product catalog display (new)
│   │   ├── QuoteForm.tsx      # B2B quote request form (new)
│   │   ├── CheckoutFlow.tsx   # Retail checkout process (new)
│   │   └── [existing sections...]
│   │
│   ├── ui/                    # Atom & Molecule components
│   │   ├── buttons/           # Button variants
│   │   ├── forms/             # Form components
│   │   ├── cards/             # Card components  
│   │   ├── navigation/        # Navigation elements
│   │   └── media/             # Media components
│   │
│   └── common/                # Shared utilities & HOCs
│       ├── CustomerTypeProvider.tsx # Context provider for B2B/retail
│       ├── ErrorBoundary.tsx       # Error handling wrapper
│       ├── LoadingSpinner.tsx      # Loading states
│       └── ProtectedRoute.tsx      # Route guards
│
├── stores/                    # Zustand state management
│   ├── customerStore.ts       # User type, preferences, account
│   ├── cartStore.ts          # Shopping cart state
│   ├── productStore.ts       # Product catalog, filters
│   ├── uiStore.ts            # UI state, modals, navigation
│   └── index.ts              # Store exports and setup
│
├── services/                  # API interaction layer
│   ├── api/                  # API service definitions
│   └── utils/                # Service utilities
│
├── hooks/                     # Custom React hooks
│   ├── useCustomerType.ts    # Customer type detection
│   ├── useCart.ts            # Shopping cart operations
│   └── [other custom hooks...]
│
├── types/                     # TypeScript definitions
├── styles/                    # Enhanced SCSS architecture
├── assets/                    # Static assets
├── pages/                     # Route-level components
├── utils/                     # Pure utility functions
└── __tests__/                # Test files
```

**Key Organizational Principles:**
- Feature-based grouping with clear import paths
- Scalable structure supporting growth from 30 to 300+ products
- Comprehensive TypeScript definitions throughout
- Test files mirror source structure

## Component Breakdown & Implementation Details

### Component Naming & Organization
- **PascalCase** for all component files: `ProductCard.tsx`, `BtnCtaMain.tsx`
- **Descriptive & Hierarchical** naming: `BtnCustomerType`, `FormFieldEmail`
- **Customer Context Suffixes** when needed: `ProductCardB2B`, `ProductCardRetail`
- **Action-Based Names**: `BtnAddToCart`, `FormQuoteRequest`

### Template for Component Specification

Every component follows this standardized structure:

| Field | Description |
|-------|-------------|
| **Purpose** | What this component does and why it exists |
| **Source File(s)** | Primary component file and related files |
| **Visual Reference** | Link to design files or existing implementation |

**Props Table:**
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| product | Product | Yes | - | Product data object |
| variant | string | No | 'default' | Visual variant of component |
| onAction | function | No | undefined | Callback for user interactions |

**Internal State Table:**
| Variable | Type | Initial Value | Description |
|----------|------|---------------|-------------|
| isLoading | boolean | false | Loading state for async operations |
| customerType | string | 'guest' | Current customer context |

**Key UI Elements:** Structured description of component layout and visual hierarchy

**Events Handled:** User interactions (clicks, form submissions, etc.)

**Actions Triggered:** State updates, API calls, navigation

**Styling Notes:** SCSS classes, responsive behavior, animations

**Accessibility Notes:** ARIA labels, keyboard navigation, screen reader support

### Foundational/Shared Components

**Core Button System:**
- `BtnBase` - Foundation with Framer Motion
- `BtnCtaMain` - Primary CTA (enhance existing)
- `BtnCtaSecondary` - Secondary CTA (enhance existing)
- `BtnCustomerType` - B2B/Retail toggle (new)

**Form Component System:**
- `FormField` - Base form field with validation
- `FormSelect` - Dropdown with search capability
- `FormCheckbox` - Checkbox with label and validation

**Layout Components:**
- `Container` - Responsive container with max-width
- `Grid` - CSS Grid wrapper with responsive behavior
- `CustomerTypeProvider` - Context provider for customer state

## State Management In-Depth

### State Management Solution
**Zustand** chosen for lightweight performance, TypeScript support, and simple API that aligns with React patterns.

### Store Structure Conventions
**Feature-based slices** located in `src/stores/`:
- One store per major feature area
- Consistent naming: `useFeatureStore`
- Actions grouped logically within stores

### Core Store Example: Customer Store

**Purpose:** Manage user identity, customer type, and preferences

**State Shape:**
```typescript
interface CustomerState {
  customerType: 'guest' | 'retail' | 'b2b';
  accountStatus: 'anonymous' | 'registered' | 'verified';
  profile: {
    id?: string;
    email?: string;
    company?: string;
    region: 'indonesia' | 'uae' | 'us' | 'other';
  };
  preferences: {
    currency: 'IDR' | 'USD' | 'AED';
    language: 'en' | 'id' | 'ar';
    priceDisplay: 'inclusive' | 'exclusive';
  };
}
```

**Key Reducers/Actions:**
- `setCustomerType(type)` - Update customer classification
- `updateProfile(profile)` - Update user profile information
- `updatePreferences(prefs)` - Update user preferences
- `detectCustomerType(source)` - Auto-detect from behavior/context

### Feature Store Template
```typescript
interface FeatureState {
  // Data
  items: FeatureItem[];
  selectedItem: FeatureItem | null;
  
  // UI State
  isLoading: boolean;
  error: string | null;
  
  // Actions
  loadItems: () => Promise<void>;
  selectItem: (id: string) => void;
  updateItem: (id: string, updates: Partial<FeatureItem>) => void;
}
```

### Key Selectors Conventions
- Use `useShallow` for object selections to prevent unnecessary re-renders
- Create derived selectors for computed values
- Memoize complex selectors using `useCallback`

**Example Core Selectors:**
```typescript
const useCustomerType = () => useCustomerStore(
  useCallback((state) => ({
    customerType: state.customerType,
    isB2B: state.customerType === 'b2b',
    isRetail: state.customerType === 'retail'
  }), []),
  shallow
);
```

### Key Actions/Reducers/Thunks
**Async Action Pattern:**
```typescript
const loadProducts = async () => {
  set({ isLoading: true, error: null });
  try {
    const products = await ProductService.getProducts();
    set({ products, isLoading: false });
  } catch (error) {
    set({ error: error.message, isLoading: false });
  }
};
```

**Core Action Example: Customer Type Detection**
```typescript
const detectCustomerType = (source: 'form' | 'url' | 'behavior') => {
  // Detection logic based on source
  const detectedType = analyzeCustomerContext(source);
  set({ customerType: detectedType });
  
  // Update related preferences
  if (detectedType === 'b2b') {
    set(state => ({
      preferences: { ...state.preferences, priceDisplay: 'exclusive' }
    }));
  }
};
```

## API Interaction Layer

### HTTP Client Setup
**Axios instance** with interceptors for authentication, region context, and error handling:

```typescript
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

// Request interceptor adds customer context
apiClient.interceptors.request.use((config) => {
  const { customerType, profile, preferences } = useCustomerStore.getState();
  config.headers['X-Customer-Type'] = customerType;
  config.headers['X-Region'] = profile.region;
  config.headers['X-Currency'] = preferences.currency;
  return config;
});
```

### Service Definitions Conventions
- One service class per domain (ProductService, QuoteService, OrderService)
- Static methods for API operations
- Consistent error handling and response transformation
- TypeScript interfaces for all request/response data

### Example Service: ProductService
**Purpose:** Handle all product-related API operations

**Example Functions:**
```typescript
export class ProductService {
  static async getProducts(params?: ProductFilters): Promise<Product[]>
  static async getProduct(id: string): Promise<Product>
  static async getBulkPricing(productId: string, quantity: number): Promise<BulkPricing>
  static async searchProducts(query: string): Promise<Product[]>
}
```

### Global Error Handling
- **Interceptor-based** error classification and user-friendly messaging
- **Toast notifications** for user-facing errors
- **Global error state** for persistent error display
- **Retry logic** for network failures (common for international users)

### Specific Error Handling
Components receive typed error objects with:
- `type`: 'network' | 'validation' | 'server' | 'regional'
- `message`: User-friendly error description
- `retryable`: Boolean indicating if retry is possible
- `fields`: Validation errors for forms

### Retry Logic
**Exponential backoff** for failed requests:
- Maximum 3 retry attempts
- Delays: 1s, 2s, 4s
- Only retry network and 5xx errors
- Cancel retries on component unmount

## Routing Strategy

### Routing Library
**React Router DOM v7.0.1** - Latest version with improved data loading and type safety

### Route Definitions

| Path Pattern | Component/Page | Protection | Notes |
|-------------|----------------|------------|-------|
| `/` | HomePage | Public | Main landing page |
| `/shop` | ProductsPage | Public | Product catalog |
| `/shop/product/:id` | ProductDetailPage | Public | Individual product |
| `/cart` | CartPage | Public | Shopping cart |
| `/checkout` | CheckoutPage | Retail Only | Purchase flow |
| `/quote` | QuotePage | B2B Only | Quote management |
| `/quote/request` | QuoteRequestPage | B2B Only | New quote form |
| `/account` | AccountPage | Authenticated | User dashboard |
| `/contact` | ContactPage | Public | Contact information |
| `/signup` | SignupPage | Public | User registration |
| `/uae` | InternationalLandingPage | Public | UAE market entry |
| `/us` | InternationalLandingPage | Public | US market entry |
| `/social/:platform` | SocialLandingPage | Public | Social media landing |

### Authentication Guard
**ProtectedRoute component** checks authentication status:
- Redirects to `/signup` for unauthenticated users
- Preserves intended destination in location state
- Supports fallback routes for unauthorized access

### Authorization Guard  
**Customer type-based access control:**
- B2B routes restricted to verified business accounts
- Retail checkout blocked for B2B customers
- Guest users see limited functionality with upgrade prompts

## Build, Bundling, and Deployment

### Key Build Scripts
- `npm run dev` - Development server with HMR
- `npm run build` - Production build with TypeScript compilation
- `npm run preview` - Preview production build locally
- `npm run build:analyze` - Bundle analysis for optimization

### Environment Variables
**Development:** Local API, test keys, debug logging enabled  
**Staging:** Staging API, test payment processors, analytics tracking  
**Production:** Live API, production keys, error reporting, performance monitoring

### Code Splitting Strategy
- **Route-based splitting** for all page components
- **Customer-type splitting** for B2B vs retail features
- **Vendor chunk separation** for React, Framer Motion, utilities
- **Dynamic imports** for large libraries and non-critical features

### Tree Shaking
- **ES modules** throughout codebase for optimal tree shaking
- **Selective imports** from large libraries (e.g., `lodash-es/debounce`)
- **Dead code elimination** in production builds

### Lazy Loading Strategy
- **Route components** loaded on navigation
- **Heavy sections** loaded on scroll intersection
- **Images** with Intersection Observer API
- **Customer-specific features** loaded on type detection

### Minification & Compression
- **Terser** for JavaScript minification with dead code removal
- **CSSO** for CSS optimization
- **Gzip/Brotli** compression via CDN

### Target Deployment Platform
**Vercel** with global CDN and edge functions:
- **Primary region:** Singapore (closest to Indonesia)
- **Edge regions:** Dubai and US East for international users
- **Asset caching:** 365 days for static assets, 1 day for app bundles

### Deployment Trigger
**GitHub Actions CI/CD** on push to main branch:
- Automated testing and type checking
- Production build and optimization
- Deployment to Vercel with environment-specific configuration

### Asset Caching Strategy
- **Static assets** (images, fonts): 1 year cache with immutable headers
- **JS/CSS bundles**: 1 day cache with content hashing
- **API responses**: 5 minutes cache for product data
- **HTML pages**: 1 hour cache with revalidation

## Frontend Testing Strategy

**Link to Main Testing Strategy:** `bmad-docs/prd.md` (Section 8: Testing Requirements)

### Component Testing
- **Scope:** Individual component rendering, props, user interactions
- **Tools:** Vitest + React Testing Library + jsdom
- **Focus:** Customer-type aware rendering, form validation, accessibility
- **Location:** `src/__tests__/components/` mirroring source structure

### UI Integration/Flow Testing  
- **Scope:** Multi-component interactions and customer journeys
- **Tools:** Vitest + React Testing Library with Router testing
- **Focus:** Navigation flows, form submissions, state transitions between components

### End-to-End UI Testing
- **Tools:** Playwright for cross-browser and mobile testing
- **Scope:** Critical customer journeys (B2B quote flow, retail purchase flow)
- **Test Data:** Mock API responses and customer scenarios

## Accessibility (AX) Implementation Details

### Semantic HTML
- **Native HTML elements** preferred over custom implementations
- **Proper heading hierarchy** (h1-h6) for screen readers
- **Form labels and fieldsets** for all input elements
- **Landmark regions** (nav, main, aside, footer) for navigation

### ARIA Implementation
- **ARIA labels** for custom components and dynamic content
- **ARIA states** (expanded, selected, disabled) for interactive elements
- **ARIA properties** (describedby, labelledby) for enhanced context
- **Live regions** for dynamic content updates (cart updates, form validation)

### Keyboard Navigation
- **Tab order** logical and comprehensive for all interactive elements
- **Skip links** for main content and navigation
- **Keyboard shortcuts** for common actions (search, cart)
- **Focus indicators** visible and high-contrast

### Focus Management
- **Modal focus trapping** with return focus on close
- **Dynamic content** receives focus appropriately
- **Route changes** announce to screen readers
- **Error states** receive focus for immediate attention

### Testing Tools
- **Axe DevTools** for automated accessibility scanning
- **Lighthouse** accessibility audits in CI/CD
- **Screen reader testing** with NVDA/VoiceOver
- **Keyboard-only navigation** testing protocols

## Performance Considerations

### Image Optimization
- **WebP/AVIF formats** with JPEG fallbacks
- **Responsive images** with appropriate srcset and sizes
- **Lazy loading** with Intersection Observer API
- **Placeholder loading** with skeleton screens

### Code Splitting & Lazy Loading
- **Route-based splitting** reduces initial bundle size
- **Component-level splitting** for large features
- **Dynamic imports** for non-critical functionality
- **Customer-type aware loading** (preload relevant features)

### Minimizing Re-renders
- **React.memo** for expensive components
- **useCallback/useMemo** for stable references
- **Zustand shallow selectors** to prevent unnecessary updates
- **Component composition** over inheritance for flexibility

### Debouncing/Throttling
- **Search input debouncing** (300ms delay)
- **Scroll event throttling** for performance
- **Resize event throttling** for responsive updates
- **API call debouncing** for user input validation

### Client-Side Caching
- **Browser cache** for static assets with appropriate headers
- **Service Worker** for offline support and API response caching
- **Memory caching** for frequently accessed data
- **LocalStorage** for user preferences and cart state

### Performance Monitoring
- **Web Vitals** tracking (LCP, FID, CLS) with real user monitoring
- **Bundle analysis** for size optimization
- **Lighthouse CI** for performance budgets
- **International performance** monitoring for regional optimization

## Change Log

| Change | Date | Version | Description | Author |
|--------|------|---------|-------------|--------|
| Initial Creation | 2024-06-14 | 1.0 | Complete frontend architecture based on PRD requirements | Daisy (Design Architect) |

---

**Frontend Architecture Status: COMPLETE AND READY FOR DEVELOPMENT**