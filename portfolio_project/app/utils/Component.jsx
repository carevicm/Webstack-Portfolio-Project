import { useState, useEffect } from "react";

export function useDynamicImport(ref, importFunction) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    let observer;
    const currentRef = ref.current; // Capture the current value of ref.current

    if (currentRef) {
      observer = new IntersectionObserver(
        async (entries) => {
          if (entries[0].isIntersecting) {
            observer.unobserve(currentRef);

            const { default: RealComponent } = await importFunction();
            setComponent(() => RealComponent);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef); // Use the captured value
      }
    };
  }, [ref, importFunction]); // ref is stable, so it's okay to include it here

  return Component;
}