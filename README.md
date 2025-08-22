# LawPak - Acts & Laws of Pakistan

A comprehensive one-page website providing access to Pakistan's complete legal database with AI-powered assistance. Built with Next.js, React, and Tailwind CSS.

## 🌟 Features

- **Complete Legal Database**: Access to 500+ Acts and Laws of Pakistan
- **AI Legal Assistant**: Ask questions about Pakistani laws in plain language
- **Smart Search**: Intelligent search with legal context understanding
- **Browse Acts**: Explore laws by category, year, and legal domain
- **Pakistan Theme**: Beautiful design with Pakistan's national colors
- **Responsive Design**: Works perfectly on all devices
- **Real-time AI**: Powered by OpenAI GPT for accurate legal information

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/pakistan-law.git
cd pakistan-law
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your OpenAI API key:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
pakistan-law/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts          # AI chat API endpoint
│   │   ├── globals.css               # Global styles with Pakistan theme
│   │   ├── layout.tsx                # Root layout with metadata
│   │   └── page.tsx                  # Main LawPak website
│   ├── types/
│   │   └── chat.ts                   # TypeScript types
│   └── utils/
│       └── ai.ts                     # AI integration utilities
├── public/
│   └── site.webmanifest              # PWA manifest
├── package.json
└── README.md
```

## 🎨 Design Features

### Pakistan Theme
- **Green Color Scheme**: Uses Pakistan's national green (#059669)
- **Modern UI**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Accessibility**: WCAG compliant with proper contrast ratios

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Features**: Statistics and key benefits
3. **Smart Search**: Advanced search functionality with filters
4. **Browse Acts**: Comprehensive list of Pakistani laws
5. **AI Assistant**: Interactive legal query system
6. **Footer**: Contact information and quick links

## 🤖 AI Integration

The website includes a sophisticated AI legal assistant that can:
- Answer questions about Pakistani laws
- Explain complex legal concepts
- Provide references to specific sections and articles
- Offer practical legal guidance
- Cross-reference related laws and cases

### AI Features
- **Context Understanding**: Understands legal terminology and context
- **Accurate Citations**: Provides proper legal references
- **Plain Language**: Explains complex legal concepts simply
- **Professional Disclaimer**: Always recommends consulting qualified lawyers

## 📱 Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Heroicons**: Beautiful SVG icons
- **OpenAI API**: AI-powered legal assistance

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### Customization

You can customize the website by:
- Modifying colors in `tailwind.config.js`
- Updating legal data in `src/app/page.tsx`
- Adjusting AI prompts in `src/utils/ai.ts`
- Changing metadata in `src/app/layout.tsx`

## 📄 Legal Information

This platform provides information for educational and reference purposes only. Always consult with qualified legal professionals for specific legal advice. The AI assistant provides general guidance and should not be considered as professional legal counsel.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: info@lawpak.gov.pk
- **Phone**: +92-51-1234-5678
- **Address**: Islamabad, Pakistan

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Government of Pakistan for legal framework
- OpenAI for AI capabilities
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach

---

**Disclaimer**: This is a demonstration website. For official legal information, please visit authorized government portals.
