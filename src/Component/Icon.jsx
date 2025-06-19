import React, { useState, useEffect, useRef } from "react";
import { FaGlobe, FaBolt, FaShieldAlt, FaUsers } from "react-icons/fa";

function StatItem({ target, label, icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const intervalTime = 30;
            const steps = duration / intervalTime;
            const increment = target / steps;
            let current = 0;
            const interval = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              setCount(Math.floor(current));
            }, intervalTime);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, hasAnimated]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 transition-all duration-300"
    >
      <div className="mb-3 text-white text-3xl">{icon}</div>
      <p className="text-4xl font-bold text-yellow-400">{count}</p>
      <p className="text-lg text-white font-medium uppercase tracking-wide mt-1">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      target: 125000,
      label: "Global Transactions",
      icon: <FaGlobe />,
    },
    {
      target: 18750,
      label: "Fast Settlements",
      icon: <FaBolt />,
    },
    {
      target: 98200,
      label: "Secured Deals",
      icon: <FaShieldAlt />,
    },
    {
      target: 14500,
      label: "Active Users",
      icon: <FaUsers />,
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Minex Network in Numbers</h2>
          <p className="text-gray-300 max-w-xl mx-auto mt-4">
            At Minex, we're redefining the DeFi experience with secure, scalable, and lightning-fast blockchain infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              target={stat.target}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
