# Eleazar Website

> Arquitectura para el pensamiento algorítmico

A modern, responsive website built with Svelte and Vite, featuring a futuristic design with glitch effects, animated backgrounds, and a comprehensive component system.

## 🚀 Features

- **Modern Design System**: Custom theme with Eleazar brand colors and typography
- **Interactive Components**: Glitch effects, animated backgrounds, and dynamic content
- **Responsive Layout**: Mobile-first design that works across all devices
- **Component Architecture**: Modular, reusable Svelte components
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Frontend**: Svelte 4
- **Build Tool**: Vite
- **Styling**: CSS Custom Properties with theme system
- **Icons**: Custom SVG components
- **Development**: Hot Module Replacement (HMR)

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── Background.svelte
│   │   ├── Button.svelte
│   │   ├── GlitchImage.svelte
│   │   └── ...
│   ├── layout/             # Layout components
│   │   ├── Header.svelte
│   │   └── Footer.svelte
│   └── pages/              # Page components
│       ├── Home.svelte
│       └── Showcase.svelte
├── styles/
│   └── theme.js            # Theme configuration
└── assets/                 # Static assets
```

## 🎨 Theme System

The project uses a comprehensive theme system defined in `src/styles/theme.js`:

- **Colors**: Primary orange (#FF5200), secondary green (#1F3D2B)
- **Typography**: Chakra Petch Bold for headings, Arial for body text
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/eleazar-website.git
cd eleazar-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎯 Components

### Core Components

- **Button**: Customizable button with multiple variants and sizes
- **Background**: Dynamic background component with image support
- **GlitchImage**: Image component with glitch effects
- **Logo**: Brand logo with multiple variants
- **Icon**: SVG icon system

### Layout Components

- **Header**: Navigation header with transparency support
- **Footer**: Comprehensive footer with links and metadata
- **Layout**: Main layout wrapper

## 🎨 Design Features

- **Glitch Effects**: Cyberpunk-inspired visual effects
- **Animated Backgrounds**: Dynamic background images with overlays
- **Digital Typography**: Futuristic font styling
- **Responsive Design**: Mobile-first approach
- **Interactive Elements**: Hover effects and animations

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: 480px
- Tablet: 768px
- Desktop: 992px
- Large Desktop: 1200px

## 🔧 Development

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte checks

## 📄 License

© 2025 Eleazar. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

*Built with ❤️ using Svelte and Vite*
