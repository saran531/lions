import { useEffect, useRef, useState } from "react";
import lionFaceCursor from "../pages/images/mouse-small-cursur.png";
import runningLionTrail from "../pages/images/lion-running.gif";

function CustomCursorTrail() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const frameRef = useRef(null);
  const lastMoveRef = useRef(0);
  const positionRef = useRef({
    x: 0,
    y: 0,
    previousX: 0,
    previousY: 0,
    trailX: 0,
    trailY: 0,
    offsetX: -42,
    offsetY: 18,
    isReady: false,
  });
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateAvailability = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        !pointerQuery.matches;

      setIsEnabled(!isTouchDevice);
    };

    updateAvailability();
    pointerQuery.addEventListener("change", updateAvailability);
    window.addEventListener("resize", updateAvailability);

    return () => {
      pointerQuery.removeEventListener("change", updateAvailability);
      window.removeEventListener("resize", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const position = positionRef.current;

    const handleMouseMove = (event) => {
      const deltaX = event.clientX - position.x;
      const deltaY = event.clientY - position.y;

      position.previousX = position.x;
      position.previousY = position.y;
      position.x = event.clientX;
      position.y = event.clientY;
      lastMoveRef.current = performance.now();

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        position.offsetX = deltaX >= 0 ? -54 : 32;
        position.offsetY = 18;
      } else {
        position.offsetX = -42;
        position.offsetY = deltaY >= 0 ? -38 : 34;
      }

      if (!position.isReady) {
        position.previousX = event.clientX;
        position.previousY = event.clientY;
        position.trailX = event.clientX + position.offsetX;
        position.trailY = event.clientY + position.offsetY;
        position.isReady = true;
        cursor?.classList.add("custom-cursor-face--visible");
      }
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove("custom-cursor-face--visible");
      trail?.classList.remove("custom-cursor-trail--visible");
    };

    const handleMouseEnter = () => {
      if (position.isReady) {
        cursor?.classList.add("custom-cursor-face--visible");
      }
    };

    const render = () => {
      if (position.isReady) {
        const isMoving = performance.now() - lastMoveRef.current < 160;
        const targetTrailX = position.x + position.offsetX;
        const targetTrailY = position.y + position.offsetY;

        position.trailX += (targetTrailX - position.trailX) * 0.18;
        position.trailY += (targetTrailY - position.trailY) * 0.18;

        if (cursor) {
          cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`;
        }

        if (trail) {
          trail.style.transform = `translate3d(${position.trailX}px, ${position.trailY}px, 0) translate(-50%, -50%) scale(${
            isMoving ? 1.05 : 0.92
          })`;
          trail.classList.toggle("custom-cursor-trail--visible", isMoving);
        }
      }

      frameRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    frameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(frameRef.current);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div ref={trailRef} className="custom-cursor-trail" aria-hidden="true">
        <img src={runningLionTrail} alt="" draggable="false" />
      </div>
      <div ref={cursorRef} className="custom-cursor-face" aria-hidden="true">
        <img src={lionFaceCursor} alt="" draggable="false" />
      </div>
    </>
  );
}

export default CustomCursorTrail;
