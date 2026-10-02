import { useEffect, useRef } from "react";

// عنصر یو ځل ښکاره کیږي کله چې viewport ته راشي
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element); // یوازې یو ځل
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
