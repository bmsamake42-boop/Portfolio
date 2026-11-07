import Photo from "../assets/photo.jpeg";
import FondAccueil from "../assets/arr_acc.png";
import { TypeAnimation } from "react-type-animation";
import FadeIn from "./FadeIn";

const Accueil = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Image d'arrière-plan floue et éclaircie */}
      <img
        src={FondAccueil}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center
        blur-md brightness-125 scale-105"
      />

      {/* Voile blanc pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-white/55"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Texte de présentation */}
          <FadeIn
            direction="left"
            delay={0.2}
            className="flex-1 text-center lg:text-left"
          >

            <p className="text-blue-700 font-medium mb-3 tracking-wide">
              Bonjour, je suis
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-4">
              Boubacar <span className="text-blue-700">SAMAKE</span>
            </h1>

            <h2 className="text-2xl sm:text-4xl text-gray-700 font-medium mb-6 italic">
              <TypeAnimation
                sequence={[
                  "Développeur",
                  2000,
                  "Développeur junior",
                  2000,
                  "Passionné du numérique",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-gray-700 text-base sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Je crois en un numérique qui ne se contente pas d'être esthétique,
              mais qui apporte de réelles solutions.
              À travers chaque projet, je cherche à associer technologie,
              créativité et simplicité pour créer des expériences utiles et durables.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

              <a
                href="#projects"
                className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full
                hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300
                transition-all duration-300 active:scale-95"
              >
                Voir mes projets
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-blue-600 text-blue-700 font-semibold rounded-full
                hover:bg-blue-600 hover:text-white
                transition-all duration-300 active:scale-95"
              >
                Me contacter
              </a>

            </div>
          </FadeIn>

          {/* Photo de profil */}
          <FadeIn
            direction="right"
            delay={0.4}
            className="flex-1 flex justify-center lg:justify-end"
          >

            <div className="relative">

              {/* Cercle décoratif */}
              <div className="absolute -inset-4 bg-blue-400 rounded-full blur-2xl opacity-40"></div>

              <img
                src={Photo}
                alt="Photo de profil de Boubacar"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96
                object-cover rounded-full border-4 border-white shadow-2xl
                hover:scale-105 transition-transform duration-500"
              />

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Accueil;