export default [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insight", href: "/latest-news" },
  { label: "Contact", href: "/contact" }
].map(link => {
  link.style = `nav-link`;
  return link;
});
