import FadeIn from "./FadeIn";
import Fond from "../assets/arr_skills.png";
import { TypeAnimation } from "react-type-animation";
const Skills = () => {
  const skillsData = [
    {
      title: "Analyse et Conception",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      items: [
        "Analyse des besoins",
        "Modélisation (Merise, UML)",
        "Conception de bases de données",
        "Rédaction de spécifications",
      ],
    },
    {
      title: "Technologies",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: [
        "HTML5 & CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "MySQL",
        "Intelligence Artificielle (IA)",
      ],
    },
    {
      title: "Outils",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      items: [
        "VS Code",
        "Postman",
        "DBeaver",
        "Git & GitHub",
        "Vercel",
        "Render",
        "Aiven"
      ],
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-cover bg-center bg-no-repeat
    shadow-[0_-8px_30px_-5px_rgba(255,255,255,0.7)]"
  style={{ backgroundImage: `url(${Fond})` }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-3 ">
               <TypeAnimation
                sequence={[
                  "Compétences",
                  5000,
                  "Connaissances",
                  5000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
               Les compétences derrière mes réalisations
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((skill, index) => (
            <FadeIn key={skill.title} delay={index * 0.15}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-t-4 border-blue-500
                              hover:shadow-md hover:bg-blue-100 hover:-translate-y-1 transition-all duration-300 h-full
                            ">
                
                {/* Icône */}
                <div className="mb-5">
                  {skill.icon}
                </div>

                {/* Titre de la card */}
                <h3 className="text-xl font-semibold text-blue-500 mb-5">
                  {skill.title}
                </h3>

                {/* Liste */}
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;