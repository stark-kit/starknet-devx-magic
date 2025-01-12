'use client'

import React, { useState } from 'react'
import {
  ArrowRight,
  Check,
  Copy,
  Cpu,
  Globe,
  Zap,
  Github,
  Wand2,
} from 'lucide-react'
import Link from 'next/link'
import Confetti from 'react-confetti'

import { FeatureCard } from '../components/FeatureCard'
import { Step } from '../components/Step'
import { ProjectCarousel } from '../components/ProjectCarousel'
import { InfluencerCard } from '../components/InfluencerCard'
import { BuilderCard } from '../components/BuilderCard'
import { PlatformIcon } from '../components/PlatformIcon'

import buildersData from '../data/builders.json'
import coreTeamData from '../data/coreTeam.json'
import influencersData from '../data/influencers.json'

export default function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      'curl -sSL https://install.starknet-devx.com | bash'
    )
    setIsCopied(true)
    setShowConfetti(true)
    setTimeout(() => {
      setIsCopied(false)
      setShowConfetti(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="px-4 py-20 text-center">
        <h1 className="mb-6 p-2 text-5xl font-bold flex items-center justify-center">
          <Wand2 className="mr-2 h-10 w-10 text-purple-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1">
            DevX Magic for Starknet
          </span>
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          One command to rule them all. Simplify your Starknet development
          setup.
        </p>
        <div className="mb-8 inline-flex relative">
          <code className="p-4 pr-12 bg-gray-800 rounded-lg text-green-400 text-lg">
            curl -sSL https://install.starknet-devx.com | bash
          </code>
          <button
            onClick={copyToClipboard}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
            aria-label="Copy to clipboard"
          >
            {isCopied ? (
              <Check className="h-5 w-5 text-green-400" />
            ) : (
              <Copy className="h-5 w-5 text-gray-300" />
            )}
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-800">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Why DevX Magic?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Globe className="h-12 w-12 text-purple-400" />}
            title="Cross-Platform"
            description="Works seamlessly on Windows, macOS, and Linux."
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-purple-400" />}
            title="Lightning Fast"
            description="Set up your Starknet development environment in seconds."
          />
          <FeatureCard
            icon={<Cpu className="h-12 w-12 text-purple-400" />}
            title="All-in-One Package"
            description="Get all the essential Starknet tools in a single installation."
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <h2 className="mb-12 text-4xl font-bold text-center">How It Works</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <Step number={1} title="Run the Command">
            Open your terminal and run our one-line installer command.
          </Step>
          <Step number={2} title="Automatic Detection">
            Our script detects your operating system and architecture.
          </Step>
          <Step number={3} title="Custom Installation">
            The installer packages and sets up all necessary Starknet tools.
          </Step>
          <Step number={4} title="Ready to Develop">
            Start building on Starknet with a fully configured environment!
          </Step>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-800">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Supported Platforms
        </h2>
        <div className="flex justify-center space-x-12">
          <PlatformIcon name="Windows" />
          <PlatformIcon name="macOS" />
          <PlatformIcon name="Linux" />
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-900">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Community Projects
        </h2>
        <ProjectCarousel />
        <div className="mt-12 text-center">
          <Link
            href="https://github.com/keep-starknet-strange"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300"
          >
            View More on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-800">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Key Starknet Voices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {influencersData.map((influencer, index) => (
            <InfluencerCard key={index} {...influencer} />
          ))}
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-900">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Starknet Builders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {buildersData.map((builder, index) => (
            <BuilderCard key={index} {...builder} />
          ))}
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-800">
        <h2 className="mb-12 text-4xl font-bold text-center">
          DevX Magic Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coreTeamData.map((member, index) => (
            <BuilderCard key={index} {...member} />
          ))}
        </div>
        <p className="mt-12 text-center text-gray-300">
          Feel free to contact us to improve the project! We welcome
          contributions and feedback.
        </p>
      </section>

      <footer className="px-4 py-8 bg-gray-900 text-center">
        <p className="text-gray-400">© 2025 DevX Magic for Starknet.</p>
      </footer>
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
    </div>
  )
}
