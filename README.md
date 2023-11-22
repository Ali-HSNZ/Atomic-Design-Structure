# &clubs; Next.js Boilerplate Documentation &clubs;

A Next.js boilerplate with TypeScript, TailwindCSS, Mantine UI and more.

## 📝 Overview

This boilerplate provides a starting point for building a Next.js application with the following features:

-   Next.js - Framework for building server-rendered React applications
-   TypeScript - Static typing for JavaScript
-   Tailwind CSS - Utility-first CSS framework for styling
-   Mantine UI - React component library for reusable components
-   Yarn - Package manager
-   Husky - For running scripts during git commits
-   Commitlint - Linting commit messages
-   Prettier - Code formatting
-   ESLint - Linting JavaScript codes

## 🚀 Getting Started

To use this boilerplate, Install dependencies:

`yarn`

Then, run the development server:

`yarn run dev`

The app will be served at http://localhost:3000.

## 🖊 Code Structure Based On Atomic Design Pattern Principles

### 1.Introduction

Atomic Design is a methodology for creating design systems that breaks down user interfaces into smaller, reusable components. When applied to a Next.js app, the following principles are typically followed:

-   `Atoms`: These are the smallest building blocks, like buttons, input fields, and icons. They represent individual UI elements without any context. Make sure that your atoms follow these rules :

    -   They can't break into smaller components/elements for different functionality and purpose.
    -   they are reusable in the entire app.
    -   Do not use any atom components inside of an atom component.

-   `Molecules`: Molecules are combinations of atoms that work together to create more complex components, such as a search bar with an input field and a button. Make sure that your molecules follow these rules :

    -   They can break into smaller components/elements for different functionality and purpose.
    -   they are reusable in the entire app.
    -   Do not use any molecule components inside of a molecule component.

-   `Organisms`: Organisms are larger components that combine molecules and atoms to form distinct sections of a user interface.

-   `Templates`: Templates provide a higher-level layout structure for pages or sections. They define the overall arrangement of organisms and other components within a specific context.

-   `Pages`: Pages are instances of templates with real content and data. They represent the actual user interface seen by visitors and are rendered by Next.js routes. (Using app directory routing style)

By adhering to these principles, Atomic Design helps in creating scalable, consistent, and maintainable design systems for your Next.js application. It promotes reusability, modularity, and clarity in component structure, making it easier to collaborate, iterate, and maintain your UI.

At the end, We’re not designing pages, we’re designing systems of components. ~~Stephen Hay

### 2.Folder Structure

```
- public/
- src/
  - app/
  - components/
    - partials/
    - templates/
    - UI/
      - atoms/
      - molecules/
      - organisms/
  - core/
    - constants/
    - enums/
    - services/
    - types/
    - utils/
  - styles/
```

-   `Public`: The public directory holds assets such as images, icons, fonts, and locales. These assets can be accessed directly through URLs in your application.

-   `Src`: The src directory contains the main source code of your Next.js project.

-   `App`: The app directory handles the routing and navigation style of the application.

-   `Components`: The components directory follows the Atomic Design pattern and is organized into three subdirectories: partials, templates, and UI.

-   `Partials`: The partials directory holds containers, layouts, and other reusable components that are used across different pages.

-   `Templates`: The templates directory contains fully-fledged page templates. Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

-   `UI`: The UI directory encompasses the atomic design hierarchy, including atoms, molecules, and organisms.

-   `Core`: The core directory houses core functionality and utility files.

-   `Constants`: The constants directory stores static constants, such as arrays or values used throughout your application.

-   `Enums`: The enums directory holds enumerated types or constants to represent a set of related values.

-   `Services`: The services directory is dedicated to handling various services, like APIs, fetching data, state management, storage management, etc.

-   `Types`: The types directory contains TypeScript type definitions used throughout the application.

-   `Utils`: The utils directory consists of utility functions and helper scripts to facilitate common tasks.

-   `Styles`: The styles directory manages your application's styling, including global styles, CSS modules, or any other styling approach you choose.

### 3.Naming Conventions

-   Use camelCase for variable and function names (e.g., myVariable, calculateTotal).
-   Use PascalCase for components and their folders (e.g., MyComponent).
-   Use kebab-case for each files/folders inside of core, styles and public directories (e.g., my-component.ts, api-utils.ts).
-   Use SHOUTING_CASE for static constants(e.g., ITEMS_ARRAY.constants.ts, SIDEBAR_ITEMS.constants.ts).

### 4.Import and Export Guidelines

Maintaining a structured approach to importing and exporting modules within your project not only enhances code organization but also facilitates seamless collaboration among developers. Adhering to the following guidelines ensures consistency and clarity in module interactions:

-   `Default Export for Single Modules`: When a file contains only a single module to be exported, utilize the default export mechanism. This promotes a clear identification of the primary module and simplifies its integration into other parts of the project.

-   `Named Exports within Parent Root`: As a best practice, when a module is default-exported from a file, it should also be named-exported within the parent root file (typically named index.ts). This secondary named export offers a convenient way for other components or modules to access the exported functionality without needing to delve into the specifics of the default export.

By implementing these import and export guidelines, you foster an organized codebase that is easily navigable and promotes collaborative development efforts. This approach also contributes to reducing potential confusion when integrating modules across different sections of your project.

### 5.Type declarations

In order to ensure robust data handling and maintainable code within your project, it is recommended to adhere to a consistent and well-defined type system. This is achieved by utilizing TypeScript's powerful type system for data categorization and structuring. When incorporating types into your Next.js boilerplate, consider the following guidelines:

-   `Type Keyword`: Employ the type keyword to establish clearly defined structures for any data that will be utilized throughout the project. This practice enhances code readability and assists in preventing data-related errors.

-   `Interface Keyword`: Utilize the interface keyword when specifying the props for your components. This approach facilitates a structured and explicit declaration of the expected props for each component. By adhering to this convention, your codebase becomes more comprehensible and helps prevent potential errors stemming from incorrect prop usage.

-   `Flexibility in Usage`: While it is recommended to follow the prescribed type and interface conventions, there may be instances where a specific feature of one keyword better suits your needs. In such cases, you have the flexibility to deviate from the general guideline.

-   `Declaration Format`: When naming your type declarations, adopt a consistent format to enhance clarity. For interface declarations, use the convention IComponentNameProps, where ComponentName should be replaced with the actual name of the component. Similarly, for type declarations, use the format TTypeNameType, where TypeName should reflect the specific data type being described.

By embracing these type declaration practices, you contribute to a more structured and comprehensible codebase, thereby fostering efficient collaboration and minimizing potential errors

### 6.Component Structure

-   Use functional components with hooks whenever possible.
-   Keep components small and focused on a single responsibility.
-   Use arrow functions instead of regular functions.
-   Use meaningful prop names for better readability.

## 🛠 Scripts

-   `dev`: Runs next dev server
-   `build`: Creates production build
-   `start`: Starts the production server
-   `lint`: Runs ESLint on specific path
-   `prettier`: Runs prettier on specific path
