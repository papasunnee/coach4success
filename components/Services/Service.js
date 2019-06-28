export default [
  { href: "resumereview", label: "Resume Review " },
  { href: "qa", label: "30-Minutes Career Q&A  " },
  { href: "Job-Search", label: "Job Search Strategy  " },
  { href: "interview", label: "Interview Coaching  " },
  { href: "network", label: "Network Strategy  " },
  { href: "coverletter", label: "Cover Letter Writing  " },
  { href: "resume", label: "Resume + LinkedIn Review  " },
  { href: "leadership", label: "Leadership Coaching  " },
  { href: "negotiation", label: "Negotiation Coaching  " },
  { href: "newManager", label: "“New Manager” Program  " },
  { href: "careerRut", label: "Stuck in a Career Rut” Package  " },
  { href: "ultimateKit", label: "“Ultimate Job Search” Kit  " }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
