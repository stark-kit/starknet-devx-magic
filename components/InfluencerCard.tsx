import React from 'react';
import Image from 'next/image';
import { Twitter } from 'lucide-react';

interface InfluencerCardProps {
  name: string;
  handle: string;
  description: string;
  imageUrl: string;
}

export function InfluencerCard({ name, handle, description, imageUrl }: InfluencerCardProps) {
  return (
    <div className="p-6 bg-gray-700 rounded-lg flex items-center">
      <div className="mr-4 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-300">{description}</p>
        <a
          href={`https://twitter.com/${handle.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 text-purple-400 hover:text-purple-300"
        >
          <Twitter className="mr-1 h-4 w-4" />
          {handle}
        </a>
      </div>
    </div>
  )
}

