
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ImageShowcaseSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="w-full pt-0 pb-8 sm:pb-12 bg-white" 
      id="showcase"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4 transition-all duration-700 ease-out",
            isVisible ? "fade-in-up visible" : "fade-in-up"
          )}>
            Experience the Future Today
          </h2>
          <p className={cn(
            "text-base sm:text-lg text-gray-600 transition-all duration-700 ease-out stagger-1",
            isVisible ? "fade-in-up visible" : "fade-in-up"
          )}>
            Our cutting-edge humanoid robot is designed to transform how we interact 
            with technology in everyday environments.
          </p>
        </div>
        
        <div className={cn(
          "rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl hover-lift transition-all duration-700 ease-out stagger-2",
          isVisible ? "fade-in-scale visible" : "fade-in-scale"
        )}>
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Advanced humanoid robot with orange and white design" 
              className="w-full h-auto object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
          <div className="bg-white p-4 sm:p-8 hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 transition-colors duration-300">
              Next Generation Robotics
            </h3>
            <p className="text-gray-700 text-sm sm:text-base transition-colors duration-300">
              Built with precision engineering and sophisticated AI, our robots seamlessly 
              integrate into various environments, from homes to hospitals, providing 
              assistance and enriching human experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
