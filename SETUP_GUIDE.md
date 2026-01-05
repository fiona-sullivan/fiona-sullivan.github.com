# Portfolio Website Setup & Deployment Guide

## ✅ What's Been Created

Your Next.js portfolio website is now fully set up with:

### 📁 Project Structure
- ✅ Modern Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Modular component architecture
- ✅ Responsive mobile-first design

### 📄 Pages Created
1. **Home Page** (`/`) - Hero, featured projects, skills, experience
2. **Projects Page** (`/projects`) - All projects listing
3. **Project Details** (`/projects/[id]`) - Individual project pages
4. **About Page** (`/about`) - Professional background, skills, education
5. **Contact Page** (`/contact`) - Contact form and information

### 🧩 Components Created
- **Layout**: Header (with mobile menu), Footer
- **UI**: ProjectCard, SkillCard, ContactForm
- **Sections**: Hero, FeaturedProjects, Skills, Experience, CallToAction

### 🎨 Features
- ✅ Dark mode support (automatic)
- ✅ Smooth animations
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ TypeScript interfaces
- ✅ Sample data structure

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### Build for Production
```bash
npm run build
```
The static files will be in the `out/` directory.

## 📝 Customization Steps

### 1. Update Personal Information

**File: `src/app/layout.tsx`**
Update the metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Project Manager Portfolio',
  description: 'Your description',
  // ...
}
```

**File: `src/components/sections/Hero.tsx`**
- Update your name, title, and description
- Adjust the statistics (projects completed, years experience, etc.)

**File: `src/components/layout/Footer.tsx`**
- Update social media links
- Change company name and description

### 2. Add Your Projects

**File: `src/lib/data.ts`**

Edit the `projects` array with your actual projects:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Brief description',
    longDescription: 'Detailed description for project page',
    technologies: ['React', 'Node.js', 'AWS'],
    imageUrl: '/projects/your-image.jpg',
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://yourproject.com',
    category: 'web-development',
    featured: true,
    startDate: '2024-01',
    endDate: '2024-06',
    status: 'completed',
    role: 'Project Manager',
    teamSize: 10,
    outcomes: [
      'Outcome 1',
      'Outcome 2',
    ],
  },
  // Add more projects...
]
```

### 3. Add Project Images

Place your project images in the `public/projects/` directory:
```
public/
  projects/
    ecommerce.jpg
    banking.jpg
    analytics.jpg
    // ... your images
```

### 4. Update Skills

**File: `src/lib/data.ts`**

Edit the `skills` array:
```typescript
export const skills: Skill[] = [
  { 
    name: 'Agile/Scrum', 
    category: 'project-management', 
    level: 'expert' 
  },
  // Add your skills...
]
```

### 5. Update Experience

**File: `src/lib/data.ts`**

Edit the `experience` array with your work history:
```typescript
export const experience: Experience[] = [
  {
    id: '1',
    company: 'Your Company',
    position: 'Your Position',
    startDate: 'Jan 2022',
    endDate: 'Present',
    current: true,
    description: 'Description of role',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    technologies: ['Tool1', 'Tool2'],
  },
  // Add more experience...
]
```

### 6. Customize Colors

**File: `tailwind.config.ts`**

Change the color scheme:
```typescript
colors: {
  primary: {
    50: '#your-color',
    // ... more shades
  },
}
```

### 7. Update Contact Information

**File: `src/app/contact/page.tsx`**
- Update email address
- Update phone number
- Update location
- Update social media links

## 🌐 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The GitHub Actions workflow is already set up. To deploy:

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **The site will automatically deploy** when you push to main branch

### Option 2: Manual Deployment

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy the `out/` folder to GitHub Pages**

### Important Notes for GitHub Pages

- If using a custom domain, update `next.config.js`
- If deploying to username.github.io, basePath should be empty (already configured)
- If deploying to a project repo (like `/my-portfolio`), update basePath accordingly

## 🛠️ Tech Stack Details

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **Static Export**: For GitHub Pages compatibility

## 📱 Responsive Breakpoints

The site uses Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎯 Best Practices Implemented

✅ **Modular Architecture**: Reusable components organized by function
✅ **Type Safety**: Full TypeScript coverage
✅ **Separation of Concerns**: Data, UI, and logic separated
✅ **Performance**: Static site generation, optimized builds
✅ **Accessibility**: Semantic HTML, ARIA labels
✅ **SEO**: Proper metadata, semantic structure
✅ **Responsive Design**: Mobile-first approach
✅ **Code Organization**: Clear folder structure, meaningful names
✅ **Future-Proof**: Easy to extend and maintain

## 🐛 Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Check for TypeScript errors: `npm run lint`

### Image Issues
- Ensure images are in `public/` directory
- Use relative paths from public root (e.g., `/projects/image.jpg`)
- For placeholders, use gradient backgrounds (already configured)

### GitHub Pages Not Working
- Ensure GitHub Actions workflow is enabled
- Check repository settings → Pages
- Verify `.nojekyll` file exists in public folder
- Check Actions tab for build errors

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🎉 You're All Set!

Your portfolio website is ready to customize and deploy. Start by:
1. Running `npm run dev` to see it locally
2. Updating the content in `src/lib/data.ts`
3. Adding your project images
4. Customizing colors and styles
5. Deploying to GitHub Pages

Good luck with your portfolio! 🚀
