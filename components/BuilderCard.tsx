import React from 'react';
import Image from 'next/image';
import { Github, Twitter } from 'lucide-react';

interface BuilderCardProps {
  name: string;
  github: string;
  twitter: string;
  iconUrl: string;
}

export function BuilderCard({ name, github, twitter, iconUrl }: BuilderCardProps) {
  return (
    <div className="relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 rounded-bl-full opacity-10"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <Image
            src={iconUrl}
            alt={`${name}'s icon`}
            width={80}
            height={80}
            className="rounded-full border-4 border-purple-500 shadow-md"
          />
          <h3 className="ml-4 text-xl font-bold text-white">{name}</h3>
        </div>
        <div className="flex flex-col space-y-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-700 text-purple-300 rounded-full hover:bg-gray-600 transition-colors duration-200"
          >
            <Github className="mr-2 h-5 w-5" />
            {github.split('/').pop()}
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-700 text-purple-300 rounded-full hover:bg-gray-600 transition-colors duration-200"
          >
            <Twitter className="mr-2 h-5 w-5" />
            {twitter.split('/').pop()}
          </a>
        </div>
      </div>
    </div>
  )
}

