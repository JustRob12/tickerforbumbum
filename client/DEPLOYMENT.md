# Deploy to Vercel - Step by Step Guide 🚀

Your Valentine's Day Yes/No Game is ready to deploy on Vercel!

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit - Valentine's Day Game"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your app will be live at `https://your-project-name.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
# In your client directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name: valentine-yes-no-game
# - Directory: ./
# - Override settings? No
```

### Step 3: Production Deploy
```bash
vercel --prod
```

## Your App Features ✅

- ✅ **Custom Image**: Your romantic ticket image
- ✅ **6 Audio Files**: Shuffled audio for "No" button
- ✅ **Celebration Audio**: Special "yey.m4a" for "Yes" button
- ✅ **2-Move Pattern**: "No" button alternates between top-left and top-right
- ✅ **Fireworks**: Beautiful animation for "Yes" clicks
- ✅ **Responsive**: Works on all devices
- ✅ **Production Ready**: Optimized build

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS instructions

## Troubleshooting

If you encounter issues:
1. Make sure all audio files are in the `public` folder
2. Check that image file is properly named `iamge.jpg`
3. Ensure all dependencies are in `package.json`
4. Run `npm run build` locally to test

## Success! 🎉

Your Valentine's Day game will be live and shareable with anyone!

**Share the love!** 💕
