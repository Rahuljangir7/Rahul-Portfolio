# Rahul Jangir - Modern 3D Portfolio

A cutting-edge portfolio website built with Next.js, featuring 3D graphics, modern web technologies, and MongoDB backend.

## 🚀 Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - Modern UI library
- **TypeScript** - Type safety
- **Three.js / React Three Fiber** - 3D graphics
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

### Backend

- **Next.js API Routes** - Serverless API
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **TypeScript** - Type-safe backend

### Features

- ✨ Immersive 3D background
- 🎨 Modern glassmorphism design
- 📱 Fully responsive
- 🔍 SEO optimized (meta tags, Open Graph, Twitter cards)
- ⚡ Performance optimized
- Contact form with MongoDB storage
- 🎯 Project showcase with filtering
- 🚀 Server-side rendering

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm, yarn, or pnpm

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rahuljangir7/Rahul-Portfolio.git
   cd Rahul-Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   MONGODB_URI=mongodb://localhost:27017/rahul-portfolio
   ```

4. **Start MongoDB**
   - For local MongoDB:
     ```bash
     mongod
     ```
   - Or use MongoDB Atlas (update MONGODB_URI in .env.local)

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
Rahul-Portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── projects/      # Project endpoints
│   │   ├── contact/       # Contact endpoint
│   │   └── skills/        # Skills endpoint
│   ├── projects/          # Projects pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Background3D.tsx   # 3D background
│   ├── Navbar.tsx         # Navigation
│   └── Footer.tsx         # Footer
├── lib/                   # Utility functions
│   ├── mongodb.ts         # MongoDB connection
│   └── utils.ts          # Helper functions
├── models/                # Mongoose models
│   ├── Project.ts         # Project model
│   ├── Contact.ts         # Contact model
│   └── Skill.ts           # Skill model
├── public/                # Static files
├── .env.example           # Environment variables template
├── .gitignore
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## 🔧 API Endpoints

### Projects

- `GET /api/projects` - Get all published projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contact

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts
- `PATCH /api/contact/:id` - Update contact status

### Skills

- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill
- `PATCH /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      accent: { /* your colors */ },
    },
  },
}
```

### 3D Scene

Modify `components/Background3D.tsx` to customize the 3D background.

### SEO

Update metadata in `app/layout.tsx`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables (MONGODB_URI)
4. Deploy

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Set environment variables

### MongoDB

- Use MongoDB Atlas for production
- Configure IP whitelist
- Set up database user with appropriate permissions

## 📝 Environment Variables

| Variable    | Description               | Required |
| ----------- | ------------------------- | -------- |
| MONGODB_URI | MongoDB connection string | Yes      |

## 🔒 Security Features

- Input validation with Mongoose
- Environment variable protection
- TypeScript type safety
- Secure HTTP headers via Next.js

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Rahul Jangir**

- GitHub: [@rahuljangir7](https://github.com/rahuljangir7)
- LinkedIn: [rahuljangir7](https://linkedin.com/in/rahuljangir7)
- Twitter: [@rahuljangir7](https://twitter.com/rahuljangir7)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- React Three Fiber team for the 3D library
- Framer Motion for smooth animations
- Tailwind CSS for the utility-first framework
- The open-source community
