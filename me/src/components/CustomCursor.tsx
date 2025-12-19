import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add cursor tracking
    window.addEventListener('mousemove', moveCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .MuiButton-root, .MuiIconButton-root, .MuiCard-root'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide custom cursor on mobile
  const isMobile = window.innerWidth < 768;
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor circle */}
      <Box
        ref={cursorRef}
        sx={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: isHovering ? '50px' : '30px',
          height: isHovering ? '50px' : '30px',
          border: '1px solid',
          borderColor: 'primary.main',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease',
          opacity: isHovering ? 0.5 : 0.3,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Cursor dot */}
      <Box
        ref={cursorDotRef}
        sx={{
          position: 'fixed',
          top: -3,
          left: -3,
          width: isHovering ? '8px' : '6px',
          height: isHovering ? '8px' : '6px',
          bgcolor: 'primary.main',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'width 0.2s ease, height 0.2s ease',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
