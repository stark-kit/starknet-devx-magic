import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export function ProjectCard({ title, description, url, imageUrl }: ProjectCardProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg flex flex-col h-full">
      <div className="mb-4 relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-300 flex-grow">{description}</p>
      <Link
        href={url}
        className="inline-flex items-center text-purple-400 hover:text-purple-300"
      >
        View Project
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

