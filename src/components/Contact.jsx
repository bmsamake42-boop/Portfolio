import { useState } from "react";
import emailjs from "@emailjs/browser";

// Lucide React : icônes classiques
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

// React Icons : logos des réseaux sociaux
import { FaGithub, FaLinkedin } from "react-icons/fa";

import FadeIn from "./FadeIn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  // Informations de contact
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "bm.samake42@gmail.com",
      href: "mailto:bm.samake42@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Téléphone",
      value: "+223 94 70 02 92",
      href: "tel:+22394700292",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: "Bamako, Mali",
      href: null,
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/bmsamake42-boop",
      href: "https://github.com/bmsamake42-boop",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/boubacar-samaké-510790388",
      href: "https://linkedin.com/in/boubacar-samaké-510790388",
    },
  ];

  // Gestion des changements
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Protection anti-spam
    if (formData.website) return;

    // Validation du nom
    if (!formData.name.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Veuillez entrer votre nom.",
      });
      return;
    }

    // Validation email
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Veuillez entrer une adresse email valide.",
      });
      return;
    }

    // Validation sujet
    if (!formData.subject.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Veuillez entrer un sujet.",
      });
      return;
    }

    // Validation message
    if (!formData.message.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Veuillez écrire un message.",
      });
      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message:
          "Message envoyé avec succès ! Je vous répondrai rapidement.",
      });

      // Réinitialisation du formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        loading: false,
        success: false,
        error: true,
        message:
          "Une erreur est survenue. Veuillez réessayer plus tard.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-blue-50/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* PARTIE GAUCHE */}
          <FadeIn direction="left">
            <div>

              {/* Badge */}
              <span className=" text-3xl sm:text-4xl font-bold text-blue-500 inline-block px-4 py-1.5 mb-4 f tracking-wider  rounded-full">
                CONTACT
              </span>

              {/* Titre */}
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Travaillons <span className="text-blue-500">ensemble</span> 
              </h2>

              {/* Introduction */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
                Vous avez un projet, une opportunité professionnelle ou
                souhaitez simplement échanger ? Je suis ouvert aux
                nouvelles collaborations et aux opportunités qui me
                permettront de mettre mes compétences en pratique et de
                continuer à progresser. N’hésitez pas à me contacter.
              </p>

              {/* Coordonnées */}
              <div className="space-y-4 mb-8">

                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                  >

                    {/* Icône */}
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex-shrink-0">
                      {item.icon}
                    </div>

                    {/* Informations */}
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-900">
                          {item.value}
                        </p>
                      )}
                    </div>

                  </div>
                ))}

              </div>

              {/* Bouton WhatsApp */}
              <a
                href="https://wa.me/22394700292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-300 hover:shadow-lg hover:shadow-green-200 transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </a>

            </div>
          </FadeIn>

          {/* PARTIE DROITE : FORMULAIRE */}
          <FadeIn direction="right" delay={0.15}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">

              <form onSubmit={handleSubmit} noValidate>

                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Nom */}
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Nom complet <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Adresse email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>

                {/* Sujet */}
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Sujet <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Écrivez votre message ici..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>

                {/* Message de succès */}
                {status.success && (
                  <div className="flex items-center gap-2 mb-5 p-3.5 rounded-xl bg-green-50 text-green-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Message d'erreur */}
                {status.error && (
                  <div className="flex items-center gap-2 mb-5 p-3.5 rounded-xl bg-red-50 text-red-700 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 active:scale-[0.98]"
                >

                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}

                </button>

              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Contact;