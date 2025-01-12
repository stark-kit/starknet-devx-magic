import React from 'react';
import { Monitor, Apple, LaptopIcon as Linux } from 'lucide-react';

interface PlatformIconProps {
  name: string;
}

export function PlatformIcon({ name }: PlatformIconProps) {
  const getIcon = () => {
    switch (name) {
      case 'Windows':
        return <Monitor className="h-8 w-8 text-purple-400" />
      case 'macOS':
        return <Apple className="h-8 w-8 text-purple-400" />
      case 'Linux':
        return <Linux className="h-8 w-8 text-purple-400" />
      default:
        return null
    }
  }

  return (
    <div className="text-center">
      <div className="mb-2 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
        {getIcon()}
      </div>
      <p className="text-gray-300">{name}</p>
    </div>
  )
}

