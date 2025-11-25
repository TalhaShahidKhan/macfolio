import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FONT_WEIGHT = {
  subtitle: {
    min: 100,
    max: 400,
    default: 400,
  },
  title: {
    min: 400,
    max: 900,
    default: 400,
  },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      className={className}
      style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
      key={i}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return () => {};
  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHT[type];
  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `"wght" ${weight}`,
    });
  };
  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);
      animateLetter(letter, min + (max - min) * intensity);
    });
  };
  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base);
    });
  };
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

export default function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanUp = setupTextHover(titleRef.current, "title");
    const subtitleCleanUp = setupTextHover(subtitleRef.current, "subtitle");
    return () => {
      subtitleCleanUp();
      titleCleanUp();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I am Talha! Welcome to my",
          "text-2xl font-georama",
          100
        )}{" "}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>
          This Portfolio is created by Talha and designed for desktop/tablet
          screen only
        </p>
      </div>
    </section>
  );
}
