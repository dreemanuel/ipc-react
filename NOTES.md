# Set Basic Structure 

- Map out the structure of your site.
  - all the features the site will have or need
  - all the pages and subpages and how they are linked
  - all the components you need to build

- import the router react functions
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
```

- in the `App` component, line up the routing 
```tsx
<BrowserRouter>
  <Routes>
    {/* assign each sub page of the website a path (url), and an element to point to. */}
    <Route path="/" element={<HomePage />} />
    <Route path="" element={< />} /> 
    {/* assign a catch-all route (last) to link to a 404 error page*/}
    <Route path="*" element={<NotFoundPage />} />

```

- import the corresponding pages and components to `App`
  - make sure all the pages and components are exported to default
  - create a basic structure for all the pages and components using `rafce` shortcut.
  

Structuring a React app this way --using Routing in the `App` component-- turns the `App component into a "traffic controller" instead of the main render for the page. 

The JSX and HTML to be rendered will then be put in each **Page** component.

**Layout components** that are used in every page layout (like `Header` or `Footer`) can still be rendered in the `App` compnent, though. 


# Build Your Components


Structure your components by type:


## Layout components 

are Section components that will be needed on multiple pages (if not every page).
- Header
- Navbar
- Footer
- Layout _wrapper_

## UI Components

That are used inside other components:
- Buttons 
- Cards
  - Product
  - feature
- image slider

## Section Components

Are Larger pieces, that wrap around a particular section in the Layout
- Hero
- Features
- About
- Products
- Contact Form