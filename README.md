# Fiona Sullivan - Humanitarian Project Management Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing humanitarian project management experience, international development work, and community-driven solutions.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Static Export**: Optimized for GitHub Pages deployment
- **Modular Architecture**: Clean, maintainable code structure with reusable components
- **Type-Safe**: Full TypeScript integration for better development experience
- **Dark Mode Support**: Automatic dark mode based on user preferences
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Performance Optimized**: Fast loading times and smooth animations

## 📁 Project Structure

```
fiona-sullivan.github.com/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Projects listing and detail pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── sections/          # Page sections (Hero, Skills, etc.)
│   │   └── ui/                # Reusable UI components
│   ├── lib/                   # Utility functions and data
│   │   └── data.ts           # Sample data for projects, skills, etc.
│   └── types/                 # TypeScript type definitions
│       └── index.ts          # Shared interfaces and types
├── public/                    # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies

```

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fiona-sullivan/fiona-sullivan.github.com.git
   cd fiona-sullivan.github.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to GitHub Pages

1. **Update the basePath in next.config.js** (if needed)
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/fiona-sullivan.github.com' : '',
   ```

2. **Build and export the static site**
   ```bash
   npm run build
   ```

3. **The static files will be in the `out/` directory**

4. **Deploy to GitHub Pages**
   - Push the `out/` directory contents to the `gh-pages` branch
   - Or configure GitHub Actions for automatic deployment

## 📝 Customization Guide

### Update Personal Information

1. **Edit site metadata** in [src/app/layout.tsx](src/app/layout.tsx)
2. **Update hero section** in [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx)
3. **Modify footer links** in [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)

### Add/Edit Projects

Edit [src/lib/data.ts](src/lib/data.ts) to update the `projects` array with your own project data:

```typescript
{
  id: '1',
  title: 'Your Project Title',
  description: 'Brief description',
  technologies: ['Tech1', 'Tech2'],
  // ... more fields
}
```

### Customize Colors

Edit [tailwind.config.ts](tailwind.config.ts) to change the color scheme:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Add New Pages

Create new pages in the `src/app` directory following Next.js App Router conventions.

## 🎨 Component Architecture

The project follows a modular component structure:

- **Layout Components**: Reusable layout elements (Header, Footer)
- **Section Components**: Page-specific sections (Hero, Skills, Experience)
- **UI Components**: Reusable UI elements (ProjectCard, SkillCard, ContactForm)

All components are fully typed with TypeScript interfaces defined in `src/types/index.ts`.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static site

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Fiona Sullivan**
- GitHub: [@fiona-sullivan](https://github.com/fiona-sullivan)
- LinkedIn: [Fiona Sullivan](https://linkedin.com)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
