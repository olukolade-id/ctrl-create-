"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A small ring that trails the real pointer with spring physics.
 * - Hidden entirely on touch devices (no pointer to follow).
 * - Hidden entirely when the user prefers reduced motion.
 * - Grows + inverts over anything with [data-cursor="hover"] so links/buttons
 *   can opt in to a bigger "interactive" cursor state.
 */
export function CustomCursor({ disabled }: { disabled?: boolean }) {
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { damping: 28, stiffness: 320, mass: 0.4 });
  const y = useSpring(rawY, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const touchQuery = window.matchMedia("(pointer: coarse)");
    setIsTouch(touchQuery.matches);

    const move = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setIsHovering(Boolean(target.closest('[data-cursor="hover"]')));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [rawX, rawY]);

  if (disabled || isTouch) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      data-hovering={isHovering}
      style={{ translateX: x, translateY: y }}
      animate={{ scale: isHovering ? 1.8 : 1 }}
      transition={{ scale: { duration: 0.25, ease: "easeOut" } }}
    />
  );
}
