"use client";

import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimatedSectionProps = {
  children: ReactNode;
};

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // The animation will start when 20% of the section is visible
    triggerOnce: true, // The animation will only happen once
  });

  return (
    // This is where the magic happens. When the section is "inView",
    // the opacity changes to 1 (visible) and it slides up.
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

