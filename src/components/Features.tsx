
import React from "react";
import { cn } from "@/lib/utils";
import { useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}

const FeatureCard = ({ icon, title, description, index, isVisible }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "feature-card glass-card p-4 sm:p-6 hover-lift hover-glow transition-all duration-500 ease-out",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        isVisible ? "fade-in-up visible" : "fade-in-up"
      )}
      style={{ transitionDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5 hover-scale">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base transition-colors duration-300">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"></path><path d="M12 8a4 4 0 1 0 4 4"></path><circle cx="12" cy="12" r="1"></circle></svg>,
      title: "Adaptive Learning",
      description: "Atlas learns from your interactions, continuously improving its responses and actions to better serve your needs."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 13v-1h6v1"></path><path d="M11 18.5l-.5-1 1-.5.5 1.5-1 .5-.5-1 1-.5"></path><path d="M9.5 12 9 11H4"></path></svg>,
      title: "Natural Interaction",
      description: "Communicate using natural language and gestures. Atlas understands context and responds appropriately."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><rect width="18" height="11" x="3" y="11" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" x2="8" y1="16" y2="16"></line><line x1="16" x2="16" y1="16" y2="16"></line></svg>,
      title: "Precise Movement",
      description: "Advanced motorized joints provide fluid, human-like movement with exceptional balance and coordination."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>,
      title: "Spatial Awareness",
      description: "Advanced sensors and mapping technology allow Atlas to navigate complex environments with ease."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>,
      title: "Enhanced Security",
      description: "Built-in protocols protect your data and privacy, while physical safeguards ensure safe operation."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M16 6H3v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2"></path><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></path><line x1="12" x2="12" y1="11" y2="15"></line><line x1="10" x2="14" y1="13" y2="13"></line></svg>,
      title: "Task Assistance",
      description: "From simple reminders to complex multi-step tasks, Atlas can assist with a wide range of activities."
    }
  ];

  const [containerRef, visibleItems] = useStaggeredScrollAnimation(features.length, { threshold: 0.1 });
  
  return (
    <section 
      ref={containerRef}
      className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" 
      id="features"
    >
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className={cn(
            "pulse-chip mx-auto mb-3 sm:mb-4 transition-all duration-700 ease-out",
            visibleItems[0] ? "fade-in-up visible" : "fade-in-up"
          )}>
            <span>Features</span>
          </div>
          <h2 className={cn(
            "section-title mb-3 sm:mb-4 transition-all duration-700 ease-out stagger-1",
            visibleItems[0] ? "fade-in-up visible" : "fade-in-up"
          )}>
            Advanced Intelligence, <br className="hidden sm:block" />Human-Like Intuition
          </h2>
          <p className={cn(
            "section-subtitle mx-auto transition-all duration-700 ease-out stagger-2",
            visibleItems[0] ? "fade-in-up visible" : "fade-in-up"
          )}>
            Built with cutting-edge technology to understand, learn, and adapt to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
