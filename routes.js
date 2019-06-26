export default [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT US" },
  { href: "/services", label: "OUR SERVICES" },
  { href: "/get-involved", label: "GET INVOLVED" },
  { href: "/find-coach", label: "FIND A COACH" },
  { href: "/faq", label: "FAQ" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Signup" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
