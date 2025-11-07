// An array of links for navigation bar
const navBarLinks = [
  { name: "Principal", url: "/compusoft/" },
  { name: "Proyectos", url: "/compusoft/proyectos" },
  { name: "Servicios", url: "/compusoft/services" },
  { name: "Blog", url: "/compusoft/blog" },
  { name: "Contacto", url: "/compusoft/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Nuestro trabajo",
    links: [
      { name: "Proyectos", url: "/compusoft/proyectos" },
      { name: "Servicios", url: "/compusoft/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre Nosotros", url: "/compusoft/#" },
      { name: "Blog", url: "/compusoft/blog" },
      { name: "Clientes", url: "/compusoft/#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};