import { useState, useEffect } from "react";

export function useDynamicImport(ref, importFunction) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        async (entries) => {
          if (entries[0].isIntersecting) {
            observer.unobserve(ref.current);

            const { default: RealComponent } = await importFunction();
            setComponent(() => RealComponent);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, importFunction]);

  return Component;
}
