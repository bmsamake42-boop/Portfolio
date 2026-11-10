import Logo from "../assets/Logo.jpeg";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = Array.from(document.images);

    const loadImages = async () => {
      if (images.length === 0) {
        setProgress(100);
        onComplete();
        return;
      }

      let loaded = 0;

      const updateProgress = () => {
        loaded++;
        setProgress(Math.round((loaded / images.length) * 100));
      };

      await Promise.all(
        images.map(async (img) => {
          if (img.complete) {
            updateProgress();
            return;
          }

          await new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          });

          updateProgress();
        })
      );

      setProgress(100);

      setTimeout(() => {
        onComplete();
      }, 500);
    };

    loadImages();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100 opacity-70" />

      <div className="relative flex flex-col items-center">
        <div className="mb-8 animate-pulse">
          <img
            src={Logo}
            alt="Logo"
            className="w-40 sm:w-48 h-auto object-contain"
          />
        </div>

        <div className="relative w-12 h-12 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          Bienvenue sur mon portfolio
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Préparation de votre expérience...
        </p>

        <div className="w-64 sm:w-80 h-2 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm font-semibold text-blue-600 mt-3">
          {progress}%
        </p>
      </div>

      <p className="absolute bottom-8 text-xs text-gray-400 tracking-widest">
        &lt;Bouba/&gt; — PORTFOLIO
      </p>
    </div>
  );
};

export default LoadingScreen;