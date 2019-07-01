export default [
  { id: "4", href: "resumereview", label: "Resume Review " },
  { id: "4", href: "qa", label: "30-Minutes Career Q&A  " },
  { id: "4", href: "Job-Search", label: "Job Search Strategy  " },
  { id: "4", href: "interview", label: "Interview Coaching  " },
  { id: "5", href: "network", label: "Network Strategy  " },
  { id: "5", href: "coverletter", label: "Cover Letter Writing  " },
  { id: "5", href: "resume", label: "Resume + LinkedIn Review  " },
  { id: "5", href: "leadership", label: "Leadership Coaching  " },
  { id: "5", href: "negotiation", label: "Negotiation Coaching  " },
  { id: "5", href: "newManager", label: "“New Manager” Program  " },
  { id: "5", href: "careerRut", label: "Stuck in a Career Rut” Package  " },
  { id: "5", href: "ultimateKit", label: "“Ultimate Job Search” Kit  " }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
