import Logo from "../assets/Logo.jpeg";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">

      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100 opacity-70" />

      {/* Contenu */}
      <div className="relative flex flex-col items-center">

        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <img
            src={Logo}
            alt="Logo"
            className="w-40 sm:w-48 h-auto object-contain"
          />
        </div>

        {/* Animation circulaire */}
        <div className="relative w-12 h-12 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100" />

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin" />
        </div>

        {/* Texte */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          Bienvenue sur mon portfolio
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Préparation de votre expérience...
        </p>

        {/* Barre de progression */}
        <div className="w-64 sm:w-80 h-2 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Pourcentage */}
        <p className="text-sm font-semibold text-blue-600 mt-3">
          {Math.round(progress)}%
        </p>

      </div>

      {/* Signature */}
      <p className="absolute bottom-8 text-xs text-gray-400 tracking-widest">
        &lt;Bouba/&gt; — PORTFOLIO
      </p>

    </div>
  );
};

export default LoadingScreen;