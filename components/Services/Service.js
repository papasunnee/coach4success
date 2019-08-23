export default [
  {
    id: "4",
    href: "resumereview",
    label: "Resume Review ",
    category: "Top services"
  },
  {
    id: "4",
    href: "qa",
    label: "30 Minutes Career Q&A  ",
    category: "Top services"
  },
  {
    id: "4",
    href: "Job-Search",
    label: "Job Search Strategy  ",
    category: "Top services"
  },
  {
    id: "4",
    href: "interview",
    label: "Interview Coaching  ",
    category: "Top services"
  },
  {
    id: "5",
    href: "network",
    label: "Network Strategy  ",
    category: "Additional services"
  },
  {
    id: "5",
    href: "coverletter",
    label: "Cover Letter Writing  ",
    category: "Additional services"
  },
  {
    id: "5",
    href: "resume",
    label: "Resume + LinkedIn Review  ",
    category: "Additional services"
  },
  {
    id: "5",
    href: "leadership",
    label: "Leadership Coaching  ",
    category: "Additional services"
  },
  {
    id: "5",
    href: "negotiation",
    label: "Negotiation Coaching  ",
    category: "Additional services"
  },
  {
    id: "5",
    href: "newManager",
    label: "“New Manager” Program  ",
    category: "Additional services"
  },
  {
    id: "5",
    href: "careerRut",
    label: "Stuck in a Career Rut” Package  ",
    category: "Additional services"
  },
  {
    id: "5",
    href: "ultimateKit",
    label: "“Ultimate Job Search” Kit  ",
    category: "Additional services"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
