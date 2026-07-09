# React Shop

A React + TypeScript e-commerce application built to explore modern frontend engineering practices including Redux Toolkit, reusable component architecture, custom hooks and TypeScript.

The project began as a learning exercise around Redux state management and has since been iteratively improved to better reflect production engineering practices through stronger type safety, reusable abstractions and cleaner application architecture.

---

## Features

- Browse products
- Search products
- Debounced product search
- Shopping cart
- Wishlist
- Local storage persistence
- Notifications
- Responsive UI
- Reusable modal component
- Shared domain models
- Custom React hooks

---

## Tech Stack

### Frontend

- React
- TypeScript
- Redux Toolkit
- React Hooks
- CSS Modules
- React Icons

### State Management

- Redux Toolkit
- Typed Redux hooks

### Styling

- CSS Modules

### Persistence

- Local Storage

---

## Architecture

The application follows a component-based architecture with clear separation between UI, business logic and shared models.

```text
src/
├── assets/
├── components/
│   ├── Cart/
│   ├── Layout/
│   ├── Search/
│   ├── Shop/
│   ├── UI/
│   └── Wishlist/
├── hooks/
│   ├── useClickOutside.ts
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
├── store/
├── types/
└── App.tsx
```

---

## State Management

Redux Toolkit manages the application's shared state.

### Products

- Product catalogue
- Favourite status

### Cart

- Cart items
- Quantities
- Total quantity
- Local persistence

### Wishlist

- Wishlist items
- Favourite products
- Local persistence

### UI

- Cart visibility
- Wishlist visibility
- Notifications

---

## Custom Hooks

### useDebounce

Encapsulates debouncing logic for product searching to avoid unnecessary filtering on every key press.

### useClickOutside

Provides reusable outside-click detection for dismissible UI such as modals.

### useLocalStorage

Encapsulates browser storage behaviour and keeps persistence concerns separate from application components.

---

## Type Safety

Shared domain models are defined within `src/types` and reused across:

- Redux slices
- Async actions
- Components
- Custom hooks

Separating domain models, API contracts and Redux payloads reduces duplication and improves maintainability.

---

## Engineering Decisions

A number of architectural decisions were made to keep the application maintainable and scalable.

### Redux Toolkit

Redux Toolkit was used for shared application state including products, cart, wishlist and UI state.

### Local Component State

Transient UI concerns such as search input are managed using React state rather than Redux to avoid unnecessary global state.

### Custom Hooks

Reusable behaviour such as local storage, debouncing and outside-click detection has been extracted into custom hooks to improve separation of concerns.

### Shared Domain Types

Shared TypeScript models are reused throughout the application to provide a single source of truth for application data.

### CSS Modules

CSS Modules provide locally scoped styling and reduce the likelihood of global CSS conflicts.

### Debounced Search

Product search uses a debounced value to reduce unnecessary filtering during user input and demonstrate performance-conscious UI patterns.

### Local Storage

Cart and wishlist state are persisted using Local Storage, allowing data to survive page refreshes while keeping the implementation lightweight.

---

## Accessibility

The application includes several accessibility improvements including:

- Semantic HTML
- Accessible form controls
- ARIA labels where appropriate
- Keyboard-accessible controls
- Focus styling
- Outside-click modal dismissal

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

## Building for Production

Create an optimised production build:

```bash
npm run build
```

---

## Future Improvements

Potential future enhancements include:

- Product categories
- Advanced filtering
- Product sorting
- Pagination
- Product details page
- Backend persistence
- Authentication
- User accounts
- Order history
- Unit tests
- Integration tests
- End-to-end tests
- RTK Query or React Query for server state
- Modal focus trapping
- Escape key support for modal dismissal
- Virtualised product lists for larger datasets

---

## Learning Outcomes

This project provided practical experience with:

- React component architecture
- TypeScript modelling
- Redux Toolkit
- Custom hooks
- State management
- Async data flows
- Local persistence
- Component composition
- Performance optimisation
- Reusable UI patterns
- Frontend application structure
