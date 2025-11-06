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
    section: "Ecosystem",
    links: [
      { name: "Tools & Equipment", url: "/compusoft/proyectos" },
      { name: "Construction Services", url: "/compusoft/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/compusoft/#" },
      { name: "Blog", url: "/compusoft/blog" },
      { name: "Careers", url: "/compusoft/#" },
      { name: "Customers", url: "/compusoft/#" },
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