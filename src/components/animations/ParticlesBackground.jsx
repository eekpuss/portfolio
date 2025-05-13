'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";

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
  
  if (!isClient) return null; // Avoid rendering on server
  
  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: theme === 'dark' ? "#3282B8" : "#B6B09F"
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: {
              enable: true,
              minimumValue: 0.5
            },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: theme === 'dark' ? "#3282B8" : "#B6B09F",
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: false,
              frequency: 0.01
            }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
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
              distance: 180,
              links: {
                opacity: 0.8,
                color: theme === 'dark' ? "#10b981" : "#059669"
              }
            },
            push: {
              particles_nb: 3
            },
            bubble: {
              distance: 200,
              size: 5,
              duration: 2,
              opacity: 0.8
            }
          }
        },
        detectRetina: true,
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 40
                }
              }
            }
          }
        ]
      }}
    />
  );
}