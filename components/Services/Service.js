export default [
  { href: "resumereview", label: "Resume Review " },
  { href: "Q&A", label: "30-Minutes Career Q&A  " },
  { href: "Job-Search", label: "Job Search Strategy  " },
  { href: "Interview", label: "Interview Coaching  " },
  { href: "Network", label: "Network Strategy  " },
  { href: "Letter-Writing", label: "Cover Letter Writing  " },
  { href: "Resume", label: "Resume + LinkedIn Review  " },
  { href: "Leadership", label: "Leadership Coaching  " },
  { href: "Negotiation", label: "Negotiation Coaching  " },
  { href: "New-Manager", label: "“New Manager” Program  " },
  { href: "Career Rut", label: "Stuck in a Career Rut” Package  " },
  { href: "Ultimate-Kit", label: "“Ultimate Job Search” Kit  " }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
