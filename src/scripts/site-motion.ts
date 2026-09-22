import { animate } from "motion";

export const motionTokens = {
  easeOut: [0.16, 1, 0.3, 1] as const,
  feedback: 0.18,
  state: 0.26,
  layout: 0.42,
  focal: 0.72,
};

const reducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

export const prefersReducedMotion = () => reducedMotionQuery.matches;

const play = (
  element: HTMLElement,
  keyframes: Parameters<typeof animate>[1],
  options: Parameters<typeof animate>[2],
  willChange: string,
) => {
  element.style.willChange = willChange;
  const playback = animate(element, keyframes, {
    ease: motionTokens.easeOut,
    ...options,
  });

  void playback.then(() => {
    element.style.removeProperty("will-change");
  });
};

export const runHeroEntrance = (hero: HTMLElement | null) => {
  if (!hero || hero.dataset.motionPlayed === "true") return;

  const bounds = hero.getBoundingClientRect();
  if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;

  hero.dataset.motionPlayed = "true";

  if (prefersReducedMotion()) return;

  hero
    .querySelectorAll<HTMLElement>("[data-hero-motion-media]")
    .forEach((element) => {
      play(element, { scale: [1.035, 1] }, { duration: 0.9 }, "transform");
    });

  hero
    .querySelectorAll<HTMLElement>("[data-hero-line]")
    .forEach((element, index) => {
      play(
        element,
        {
          clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
          x: [-18, 0],
        },
        {
          delay: 0.08 + index * 0.11,
          duration: motionTokens.focal,
        },
        "clip-path, transform",
      );
    });

  const copy = hero.querySelector<HTMLElement>("[data-hero-copy]");
  if (copy) {
    play(
      copy,
      {
        clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
        opacity: [0.25, 1],
        y: [14, 0],
      },
      { delay: 0.38, duration: 0.56 },
      "clip-path, opacity, transform",
    );
  }

  const actions = hero.querySelector<HTMLElement>("[data-hero-actions]");
  if (actions) {
    play(
      actions,
      { opacity: [0, 1], y: [12, 0] },
      { delay: 0.52, duration: 0.48 },
      "opacity, transform",
    );
  }

  const explore = hero.querySelector<HTMLElement>("[data-hero-explore]");
  if (explore) {
    play(
      explore,
      { opacity: [0, 1], x: [12, 0] },
      { delay: 0.64, duration: 0.44 },
      "opacity, transform",
    );
  }
};
