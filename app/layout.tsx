import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: { icon: '/icon.svg' },
  title: 'Hardik Sharma - Voice AI & GenAI Portfolio',
  description:
    'Full-Stack Engineer specializing in Voice AI, LiveKit Agents, Retell/Vapi-style phone agents, STT → LLM → TTS pipelines, and AI automation workflows.',
  keywords: [
    'Voice AI',
    'GenAI',
    'LiveKit',
    'Retell AI',
    'Vapi',
    'OpenAI',
    'ElevenLabs',
    'n8n',
    'LangGraph',
    'Conversational AI',
    'AI Developer',
    'Hardik Sharma',
  ],
  authors: [{ name: 'Hardik Sharma' }],
  openGraph: {
    title: 'Hardik Sharma - Voice AI & GenAI Portfolio',
    description: 'Building real-time voice agents, AI phone systems, and automation-connected GenAI workflows.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
