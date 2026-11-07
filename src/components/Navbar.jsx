import { useState, useEffect } from "react";
import Logo from "../assets/Logo.jpeg";
import NavbarBg from "../assets/arr.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Accueil");

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Qui suis-je ?", href: "#about" },
     { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = sections[0];

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      const active = navLinks.find(
        (link) => link.href === `#${currentSection.id}`
      );

      if (active) {
        setActiveLink(active.name);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full border-b border-gray-100/70 z-50 shadow-sm
                bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${NavbarBg})` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src={Logo}
              alt="Logo"
              className="h-30 w-30 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 border border-white rounded-lg bg-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.name)}
                className={`relative px-4 py-2 text-[15px] font-medium transition-all duration-300
                  after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 
                  after:h-[2px] after:w-0 after:bg-blue-500 after:rounded-full
                  after:transition-all after:duration-300
                  ${
                    activeLink === link.name
                      ? "text-blue-600 after:w-3/5"
                      : "text-blue-500 hover:text-blue-600 hover:after:w-3/5"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold 
                        text-white bg-blue-500 rounded-full overflow-hidden
                        hover:bg-white hover:text-blue-500 hover:border hover:shadow-lg hover:shadow-indigo-200/60
                        transition-all duration-300 active:scale-[0.97]
                        before:absolute before:inset-0 before:bg-white/20 before:translate-y-full 
                        hover:before:translate-y-0 before:transition-transform before:duration-300"
            >
              Me contacter
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center 
                      rounded-xl text-blue-500 hover:bg-blue-200 active:bg-gray-200 
                      transition-all duration-200 bg-white border border-rounded-lg"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left
                  ${isOpen ? "rotate-45 translate-y-[1px]" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300
                  ${isOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left
                  ${isOpen ? "-rotate-45 -translate-y-[1px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-3 pb-6 bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.name)}
                className={`flex items-center px-4 py-3.5 text-[16px] font-medium 
                          rounded-2xl active:scale-[0.98] transition-all duration-200
                          ${
                            activeLink === link.name
                              ? "bg-blue-100 text-blue-600"
                              : "text-blue-500 hover:bg-blue-200 hover:text-blue-500"
                          }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-5 px-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-3.5 text-sm font-semibold 
                        text-white bg-blue-500 rounded-2xl 
                        hover:bg-blue-600 active:scale-[0.98]
                        transition-all duration-300 shadow-md shadow-blue-100"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;