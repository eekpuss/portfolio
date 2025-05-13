'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '@/context/ThemeContext';

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    // Container loaded
  }, []);
  
  if (!isClient) return null; // Hindari rendering di server
  
  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        background: {
          opacity: 0,
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: theme === 'dark' ? '#3282B8' : '#B6B09F'
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 150,
            color: theme === 'dark' ? '#10b981' : '#B6B09F',
            opacity: 0.3,
            width: 1
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.8
              }
            },
            push: {
              quantity: 3
            }
          }
        },
        detectRetina: true
      }}
    />
  );
}