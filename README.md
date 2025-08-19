# Legal AI for Pakistan - Next.js Chat Interface

A modern, responsive Next.js application that provides a ChatGPT-like interface for interacting with the Legal AI for Pakistan GPT. This application allows users to ask questions about Pakistani law and receive accurate, structured responses with proper citations.

## 🚀 Features

### 🎨 Modern UI/UX
- Clean, professional ChatGPT-like interface built with Next.js 14
- Responsive design that works on desktop, tablet, and mobile
- Smooth animations and transitions
- Auto-resizing text input
- Loading indicators and visual feedback
- TypeScript for better development experience

### 💬 Chat Functionality
- Real-time message exchange with React hooks
- Message history persistence (local storage)
- Clear chat functionality
- Copy messages to clipboard
- Keyboard shortcuts (Enter to send, Ctrl+K to focus)
- Server-side API routes for better performance

### 🏛️ Legal AI Integration
- Specialized responses for Pakistani law topics:
  - Constitutional law and rights
  - Criminal law (PPC, CrPC)
  - Civil procedure (CPC)
  - Family law (MFLO)
  - Tax law and regulations
  - Labor and employment law
  - Cybercrime statutes (PECA)
  - Case law and precedents

### 🔧 Technical Features
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React icons
- API routes for backend functionality
- Local storage for chat history
- Responsive design with mobile optimization
- Cross-browser compatibility
- Accessibility features
- SEO optimization

## 🛠️ Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd legal-ai-pakistan-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
legal-ai-pakistan-chat/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts          # API route for chat
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Main chat page
│   ├── types/
│   │   └── chat.ts                   # TypeScript types
│   └── utils/
│       └── ai.ts                     # AI utility functions
├── public/                           # Static assets
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

## 🔧 Customization

### Changing the GPT Integration

Currently, the application uses simulated responses. To integrate with the actual Legal AI GPT:

1. **Replace the `simulateGPTResponse` function** in `src/utils/ai.ts` with actual API calls
2. **Add your API credentials** and authentication
3. **Update the API route** in `src/app/api/chat/route.ts`

Example API integration:

```typescript
// In src/utils/ai.ts
export async function callLegalAIGPT(message: string): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      message,
      gpt_url: 'https://chatgpt.com/g/g-68a3faea8df08191b9ae0dfc0b486030-legal-ai-for-pakistan'
    })
  });
  
  const data = await response.json();
  return data.response;
}
```

### Styling Customization

The application uses Tailwind CSS with custom color schemes. Key color variables in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#667eea', // Main brand color
    600: '#5a67d8', // Hover state
  },
  secondary: {
    500: '#d946ef', // Secondary color
  }
}
```

### Adding New Legal Topics

To add support for new legal topics, modify the `simulateGPTResponse` function in `src/utils/ai.ts`:

```typescript
if (lowerMessage.includes('your-topic')) {
  return `Your custom response about the legal topic...`;
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Other Platforms
- **Railway**: Connect GitHub repository
- **Heroku**: Add buildpack and deploy
- **AWS Amplify**: Connect repository and deploy
- **DigitalOcean App Platform**: Deploy from GitHub

## 🔒 Environment Variables

Create a `.env.local` file for production:

```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_url
GPT_API_KEY=your_gpt_api_key

# Security
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://yourdomain.com
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## ⌨️ Keyboard Shortcuts

- **Enter**: Send message
- **Shift + Enter**: New line
- **Ctrl/Cmd + K**: Focus input
- **Ctrl/Cmd + L**: Clear chat

## 💾 Local Storage

The application automatically saves chat history to the browser's local storage. Users can:
- Continue conversations across browser sessions
- Clear chat history using the "Clear Chat" button
- Export chat history (functionality can be added)

## 🔒 Security Considerations

- The current implementation includes basic security headers
- For production use with real API integration:
  - Implement proper API key management
  - Add rate limiting
  - Use HTTPS
  - Consider user authentication
  - Validate and sanitize user inputs
  - Add CORS protection

## ⚡ Performance Optimization

The Next.js application is optimized for:
- Fast loading times with App Router
- Automatic code splitting
- Image optimization
- Static generation where possible
- Efficient client-side navigation
- Mobile performance

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Features

1. Create new components in `src/components/`
2. Add new API routes in `src/app/api/`
3. Update types in `src/types/`
4. Add utility functions in `src/utils/`

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For support or questions:
- Check the documentation
- Review the code comments
- Create an issue in the repository
- Contact the development team

## ⚖️ Legal Disclaimer

This application is designed to provide general legal information about Pakistani law. It is not a substitute for professional legal advice. Users should consult with qualified legal professionals for specific legal matters.

---

**Built with ❤️ for the Pakistani legal community using Next.js 14**
