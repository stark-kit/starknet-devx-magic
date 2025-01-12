import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import projectsData from '../data/projects.json';

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 3 ? 0 : prevIndex + 1
    )
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-2">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
        aria-label="Previous project"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
        aria-label="Next project"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
}

