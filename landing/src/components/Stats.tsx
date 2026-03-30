import { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: number;
  label: string;
}

function AnimatedStat({ value, label }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div ref={statRef} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-brand mb-2">
        {formatNumber(count)}
      </div>
      <div className="text-base md:text-lg text-gray-600 font-lurpak-regular">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
        <AnimatedStat value={1121} label="Blogs using it" />
        <AnimatedStat value={123221} label="Hands Free Cooking Sessions" />
      </div>
    </div>
  );
}
