# React Step Navigation App

A React-based project demonstrating step navigation with dynamic state management, conditional rendering, and responsive design. The app uses `useState` to manage step progression, toggles visibility with SVG icons, and adapts to different screen sizes. It is designed for scalability, modularity, and a clean user interface.

## Features & Best Practices

- **State Management**:  
  Uses `useState` to independently manage `step` and `isOpen` states, demonstrating React's state-handling capabilities.

- **Step Navigation**:  
  "Next" and "Previous" buttons to move through steps, each displaying a corresponding message from the `messages` array. Active steps are visually highlighted using CSS class manipulation (e.g., `className={step >= 1 ? "active" : ""}`).

- **Visibility Toggle**:  
  A toggle button to show or hide the step navigation UI. SVG icons (up/down arrows) are dynamically rendered based on the `isOpen` state, demonstrating conditional rendering.

- **Responsive Design**:  
  Ensures usability across different screen sizes, adjusting layout for mobile and desktop views. The container remains centered and adapts smoothly without layout shifts.

- **Modular & Scalable Code**:  
  The `messages` array simplifies adding or modifying steps, keeping the code clean and maintainable. SVG imports (ArrowDownIcon, ArrowUpIcon) enhance reusability.

- **Code Readability**:  
  Clear function names like `handleNext` and `handlePrevious` improve code clarity. Inline styles and external CSS (`App.css`) are used for flexible and consistent styling across components.

## How It Works

- **Step Navigation**:  
  Use the "Next" and "Previous" buttons to navigate between steps. Each step displays a corresponding message from the `messages` array.

- **Visibility Toggle**:  
  Clicking the toggle button shows or hides the navigation UI. Icons dynamically switch between "down arrow" (to hide) and "up arrow" (to show).

- **Active Step Highlighting**:  
  The current and completed steps are visually highlighted using a CSS class (`active`).

## Technologies

- React (Functional components, hooks)
- CSS (Responsive design)
- SVG (Dynamic icons)
