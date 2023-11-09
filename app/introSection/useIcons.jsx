import { useState, useEffect } from "react";

const useIcons = () => {
  const [icons, setIcons] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const github = (await import("../../public/github.webp")).default;
        const linkedin = (await import("../../public/linkedin.webp")).default;
        const envelope = (await import("../../public/envelope-regular.webp"))
          .default;

        setIcons({ github, linkedin, envelope });
      } catch (error) {
        console.error("Error loading icons:", error);
      }

      setLoading(false);
    };

    loadIcons();
  }, []);

  return { icons, loading };
};

export default useIcons;
