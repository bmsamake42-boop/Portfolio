import { useState } from "react";
import FadeIn from "./FadeIn";
import Project1 from "../assets/img_kolosi.png";
import Project2 from "../assets/img_ds_sugu.png";

// Exemple d'images de captures (à remplacer par tes vraies images)
import KolosiShot1 from "../assets/kolosi_c1.png";
import KolosiShot2 from "../assets/kolosi_c2.png";
import KolosiShot3 from "../assets/kolosi_c3.png";
import KolosiShot4 from "../assets/kolosi_c4.png";
import KolosiShot5 from "../assets/kolosi_c5.png";
import KolosiShot6 from "../assets/kolosi_c6.png";


import DounkafaShot1 from "../assets/ds_c1.png";
import DounkafaShot2 from "../assets/ds_c2.png";
import DounkafaShot3 from "../assets/ds_c3.png";
import DounkafaShot4 from "../assets/ds_c4.png";
import DounkafaShot5 from "../assets/ds_c5.png";
import DounkafaShot6 from "../assets/ds_c6.png";


const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "KOLOSI",
      description:
        "Système de gestion de stock et de suivi des mouvements de produits. Il permet de gérer les entrées/sorties, de suivre l'état des stocks en temps réel. La solution contient un tableau de bord intéractif pour une meilleure prise de décision.",
        acteurs: "Administrateur, Gestionnaire (Gérant)",
      image: Project1,
      screenshots: [KolosiShot1, KolosiShot2, KolosiShot3, KolosiShot4, KolosiShot5, KolosiShot6],
      tech: ["React.js", "Tailwind CSS", "Express", "JWT", "MySQL"],
      live: "https://kolosi.vercel.app",
      code: "https://github.com/bmsamake42-boop/Kolosi",
      showLive: true,
    },
    {
      id: 2,
      title: "DOUNKAFA-SUGU",
      description:
        "DOUNKAFA-SUGU est une plateforme pour la commercialisation de produits alimentaires. Elle facilite la mise en relation entre vendeurs et clients, avec un système de catalogue, de commandes et de suivi des livraisons.",
        acteurs: "Administrateur, Vendeur, Client",
      image: Project2,
      screenshots: [DounkafaShot1, DounkafaShot2, DounkafaShot3, DounkafaShot4, DounkafaShot5, DounkafaShot6],
      tech: ["React.js", "Tailwind CSS", "Express", "JWT", "MySQL"],
      live: "#",
      code: "https://github.com/bmsamake42-boop/DOUNKAFA-SUGU",
      showLive: false,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-blue-200 via-blue-50 to-white"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-3">
              Projets
            </h2>

            <div className="mx-auto mt-2 w-20 h-1.5 bg-blue-100 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-blue-600 rounded-full animate-slide" />
            </div>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Les projets que j'ai réalisé pour mettre en pratique mes compétences et
              connaissances.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.15}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                
                {/* Image principale (cliquable) */}
                <div
                  className="relative h-52 overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full transition-opacity">
                      Agrandir
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                    {project.description}
                  </p>

                   <h3 className="text-sm font-semibold text-blue-500 mb-3">
                    <span>Acteurs : </span>{project.acteurs}
                  </h3>

                  {/* Zone Captures d'écran */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                        Aperçus du projet
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {project.screenshots.map((shot, i) => (
                          <div
                            key={i}
                            onClick={() => setSelectedImage(shot)}
                            className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer group"
                          >
                            <img
                              src={shot}
                              alt={`${project.title} capture ${i + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Boutons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    {project.showLive && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
                      >
                        Voir
                      </a>
                    )}

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.showLive ? "flex-1" : "w-full"
                      } flex items-center justify-center gap-2 px-4 py-2.5 
                      text-sm font-bold text-blue-900 rounded-full
                      bg-gradient-to-r from-blue-600 via-sky-300 to-white
                      hover:from-blue-700 hover:via-sky-400 hover:to-white
                      transition-all duration-300`}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ========== LIGHTBOX / MODAL ========== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Bouton fermer */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white hover:text-blue-300 transition-colors z-10"
            aria-label="Fermer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image agrandie */}
          <img
            src={selectedImage}
            alt="Aperçu agrandi"
            className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image
          />
        </div>
      )}
    </section>
  );
};

export default Projects;