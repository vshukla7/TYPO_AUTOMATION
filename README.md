# TypoX - AI Typography Reel Generator

Full-stack application to generate viral typography short videos from scripts.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Video Engine**: Remotion
- **AI**: Gemini (Styling), ElevenLabs (Voice), Groq (Transcription)

## Features
- **One-click generation**: Paste script -> Get video.
- **AI Chat Editing**: Refine typography, colors, and animations via chat.
- **Cinematic Layout**: 9:16 vertical video with 16:9 inner content area.
- **Word-level Sync**: Perfectly timed animations and highlights.

## Setup Instructions

1. **Clone & Install**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Fill in your API keys for:
   - Google Gemini
   - ElevenLabs
   - Groq

3. **Run Locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Preview Remotion Only**
   ```bash
   npm run remotion
   ```

## Folder Structure
- `/src/app` - Frontend and API routes.
- `/src/remotion` - Video composition logic.
- `/src/lib` - AI service abstractions.
- `/public/assets` - User assets (music, overlays, voiceovers).
- `/public/outputs` - Rendered video files.

## Performance Note
The local rendering uses `puppeteer` via Remotion. Ensure your system has sufficient RAM for rendering.
Initially set to 720p for fast processing.
