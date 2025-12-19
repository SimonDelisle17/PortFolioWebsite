import { useEffect, useRef, ReactNode } from 'react';
import { Card } from '@mui/material';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
  children: ReactNode;
  onClick?: () => void;
  sx?: object;
  [key: string]: unknown;
}

const TiltCard = ({ children, onClick, sx, ...props }: TiltCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    VanillaTilt.init(element, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
      scale: 1.02,
      gyroscope: false,
    });

    return () => {
      if (element && (element as any).vanillaTilt) {
        (element as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <Card
      ref={tiltRef}
      onClick={onClick}
      sx={{
        height: '500px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'visible',
        transformStyle: 'preserve-3d',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 20px 60px rgba(0, 212, 255, 0.4)',
          '&::before': {
            opacity: 1,
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(135deg, rgba(0, 212, 255, 0.1), transparent 50%, rgba(255, 193, 7, 0.1))',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          borderRadius: 'inherit',
          pointerEvents: 'none',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
};

export default TiltCard;
