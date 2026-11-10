import { ArrowUp, Mail, MapPin, Phone} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/Logo.jpeg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "Accueil", href: "#home" },
    { label: "Qui suis-je ?", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/bmsamake42-boop",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/boubacar-samaké-510790388",
      label: "LinkedIn",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white border-t border-blue-100">

      {/* Partie principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Présentation */}
          <div className="lg:col-span-2">

           <a
            href="#home"
            className="inline-flex items-center mb-5"
            aria-label="Retour à l'accueil"
            >
            <img
                src={Logo}
                alt="Logo Bouba"
                className="w-36 sm:w-40 h-auto object-contain"
            />
            </a>

            <p className="text-gray-600 leading-relaxed max-w-md mb-6">
              Développeur passionné par la conception
              d'applications et de solutions numériques.
              J'aime transformer les idées en expériences
              modernes, utiles et accessibles.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full
                  bg-blue-50 text-blue-600 text-lg
                  hover:bg-blue-600 hover:text-white
                  hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}

            </div>
          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-blue-500 font-bold text-lg mb-6">
              Navigation
            </h3>

            <ul className="space-y-4">

              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600
                    hover:translate-x-1 inline-block
                    transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-blue-500 font-bold text-lg mb-6">
              Restons en contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:bm.samake42@gmail.com"
                className="flex items-start gap-3 group"
              >
                <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />

                <span className="text-gray-600 text-sm group-hover:text-blue-600 transition-colors break-all">
                  bm.samake42@gmail.com
                </span>
              </a>

              <a
                href="tel:+22394700292"
                className="flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />

                <span className="text-gray-600 text-sm group-hover:text-blue-600 transition-colors">
                  +223 94 70 02 92
                </span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />

                <span className="text-gray-600 text-sm">
                  Bamako, Mali
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-blue-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center">
              © {currentYear}{" "}
              <span className="font-semibold text-blue-600">
                Boubacar Samaké
              </span>
              . Tous droits réservés.
            </p>

            {/* Retour en haut */}
            <button
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="w-10 h-10 rounded-full bg-blue-600 text-white
              flex items-center justify-center
              hover:bg-blue-700 hover:-translate-y-1
              shadow-md shadow-blue-200
              transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;