import React from 'react';
import { useTheme } from '@/lib/theme-provider';

const ColorfulBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Top right gradient */}
      <div
        className={`absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-primary via-primary/40 to-transparent rounded-full ${isDark ? 'opacity-40' : 'opacity-60'} blur-3xl`}
        style={{ animation: 'pulse 8s infinite alternate' }}
      />

      {/* Bottom left gradient */}
      <div
        className={`absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-accent via-accent/40 to-transparent rounded-full ${isDark ? 'opacity-40' : 'opacity-60'} blur-3xl`}
        style={{ animation: 'pulse 10s infinite alternate-reverse' }}
      />

      {/* Center background decoration */}
      <div className={`absolute inset-0 bg-grid-pattern ${isDark ? 'opacity-5' : 'opacity-10'}`} />

      {/* Floating circles */}
      <div className={`absolute top-1/4 left-1/4 w-16 h-16 bg-primary rounded-full ${isDark ? 'opacity-10' : 'opacity-20'} animate-float`} />
      <div className={`absolute top-1/3 right-1/4 w-8 h-8 bg-accent rounded-full ${isDark ? 'opacity-10' : 'opacity-20'} animate-float`} style={{ animationDelay: '2s' }} />
      <div className={`absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary rounded-full ${isDark ? 'opacity-10' : 'opacity-20'} animate-float`} style={{ animationDelay: '4s' }} />
      <div className={`absolute bottom-1/3 right-1/3 w-10 h-10 bg-accent rounded-full ${isDark ? 'opacity-10' : 'opacity-20'} animate-float`} style={{ animationDelay: '6s' }} />
    </div>
  );
};

export default ColorfulBackground;
