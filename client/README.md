# Valentine's Day Yes/No Game 💕

A fun interactive "Yes or No" game with a moving "No" button, fireworks, and audio effects!

## Features

- 🎯 **Moving No Button**: The "No" button moves between 2 predefined positions when clicked
- 🎆 **Fireworks Animation**: Beautiful fireworks display when "Yes" is clicked
- 🎵 **Audio Effects**: 6 different audio files for "No" clicks and special celebration audio for "Yes"
- 🖼️ **Custom Image**: Display your romantic movie/play ticket image
- 💖 **Beautiful UI**: Modern, responsive design with smooth animations

## Deployment on Vercel

This project is ready to deploy on Vercel! 

### Quick Deploy:
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect it's a Next.js project
4. Deploy with one click!

### Manual Deploy:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## How It Works

- **Yes Button**: Plays celebration audio, shows fireworks, resets "No" button
- **No Button**: Moves between top-left and top-right positions, plays random audio
- **Audio System**: 6 shuffled audio files for "No" + special "yey.m4a" for "Yes"
- **Responsive**: Works on desktop and mobile devices

## File Structure

```
client/
├── src/
│   └── app/
│       ├── components/
│       │   └── YesNoGame.tsx    # Main game component
│       ├── page.tsx             # Main page
│       └── layout.tsx           # App layout
├── public/
│   ├── iamge.jpg               # Your ticket image
│   ├── yey.m4a                 # Yes button audio
│   ├── ayawba.m4a              # No button audio files
│   ├── malooyka.m4a
│   ├── pleasepleaseplease.m4a
│   ├── sigenaoh.m4a
│   ├── sigenapleasee.m4a
│   └── uno.m4a
├── vercel.json                 # Vercel configuration
└── package.json
```

## Customization

You can customize:
- Question text in the component
- Button colors and styling
- Audio files (replace the .m4a files)
- Image (replace iamge.jpg)
- Animation effects

Enjoy your interactive Valentine's Day game! 💖