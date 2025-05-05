'use client';

import { useRef} from 'react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import styles from '../styles';

export default function HorizontalScroll({ insurers }) {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    const items = itemsRef.current;

    // Calculate total width of all items
    const itemWidth = items[0]?.offsetWidth || 200; // Assuming all items have same width
    const totalWidth = items.length * itemWidth;

    // Set initial position
    let currentX = 0;
    const speed = 1; // pixels per frame

    const animate = () => {
      currentX -= speed;

      // When the first set of items has moved out of view, reset position
      if (Math.abs(currentX) >= totalWidth) {
        currentX += totalWidth; // Move back by the width of the original set
      }

      // Apply transform to both original and duplicated items
      track.style.transform = `translateX(${currentX}px)`;
      requestAnimationFrame(animate);
    };

    // Ensure track width is set to accommodate both original and duplicated items
    track.style.width = `${totalWidth * 2}px`;

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animate);
  }, [insurers]);

  return (
    <div className="overflow-hidden" ref={wrapperRef}>
      <div className="sticky-wrap" ref={stickyRef}>
        <div className="scroll-track flex" ref={trackRef}>
          {/* Original items */}
          {insurers.map((insurer, i) => (
            <div
              key={`original-${insurer.id}`}
              className="item m-2 aspect-[3/2]"
              ref={(el) => (itemsRef.current[i] = el)}
              style={{ width: 200, flexShrink: 0 }}
            >
              <Image src={insurer.logo} alt={`Insurer ${insurer.id}`} width={150} height={50} />
            </div>
          ))}
          {/* Duplicated items for seamless looping */}
          {insurers.map((insurer, i) => (
            <div
              key={`duplicate-${insurer.id}`}
              className="item m-2 aspect-[3/2]"
              style={{ width: 200, flexShrink: 0 }}
            >
              <Image src={insurer.logo} alt={`Insurer ${insurer.id}`} width={150} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

