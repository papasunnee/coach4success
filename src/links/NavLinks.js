export default [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insight", href: "/insight" },
  { label: "Contact", href: "/contact" }
].map(link => {
  link.style = `nav-link`;
  return link;
});
