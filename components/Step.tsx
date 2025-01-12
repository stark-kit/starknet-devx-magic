import React from 'react';

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <span className="flex items-center justify-center w-8 h-8 text-purple-600 bg-purple-100 rounded-full">
          {number}
        </span>
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{children}</p>
      </div>
    </div>
  )
}

