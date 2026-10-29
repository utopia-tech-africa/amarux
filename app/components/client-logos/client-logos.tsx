"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CLIENT_LOGOS } from "@/assets/img";
import { Container } from "@/components/container";

const LOGO_SEQUENCE = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];
const BASE_SPEED = 90;
const HOVER_SPEED = 14;

export function ClientLogos() {
  const trackRef = useRef<HTMLUListElement>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(BASE_SPEED);
  const targetSpeedRef = useRef(BASE_SPEED);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.064);
      lastTime = now;

      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.08;

      const loopWidth = track.scrollWidth / 2;
      if (loopWidth > 0) {
        offsetRef.current -= speedRef.current * delta;
        if (offsetRef.current <= -loopWidth) {
          offsetRef.current += loopWidth;
        }
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section aria-label="Client logos" className="bg-white py-12 md:py-16">
      <Container className="mb-6 md:mb-8">
        <h2 className="text-center font-heading text-[clamp(1.25rem,2vw,1.375rem)] font-bold uppercase leading-[1.5] text-navy">
          Some of the people we&apos;ve worked with
        </h2>
      </Container>

      <div
        className="client-logos-marquee relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        onMouseEnter={() => {
          targetSpeedRef.current = HOVER_SPEED;
        }}
        onMouseLeave={() => {
          targetSpeedRef.current = BASE_SPEED;
        }}
      >
        <ul
          ref={trackRef}
          className="client-logos-track flex w-max items-center gap-10 py-2 will-change-transform md:gap-14 md:py-3 lg:gap-16"
        >
          {[...LOGO_SEQUENCE, ...LOGO_SEQUENCE].map((logo, index) => (
            <li
              key={`client-logo-${index}`}
              className="flex h-16 w-[7.5rem] shrink-0 items-center justify-center md:h-20 md:w-36 lg:h-24 lg:w-40"
              aria-hidden={index >= LOGO_SEQUENCE.length ? true : undefined}
            >
              <Image
                src={logo.src}
                alt={index < LOGO_SEQUENCE.length ? logo.alt : ""}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-14 w-full max-w-full object-contain opacity-80 md:max-h-16 lg:max-h-20"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
