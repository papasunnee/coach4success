import Link from "next/link";
import NewsLetter from "./NewsLetter";
import "./index.scss";

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gutters">
          <div className="col-md-3">
            <h6 className="title">ABOUT Coach4Success</h6>
            <ul className="link">
              {AboutCoach.map((link, key) => {
                return (
                  <li key={key}>
                    <Link href={link.href}>
                      <a>{link.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="title">SERVICES</h6>
            <ul className="link">
              {ServicesLinks.filter(service => service.row == 1).map(
                ({ href, label }, key) => {
                  return (
                    <li key={key}>
                      <Link href={`/service${href}`}>
                        <a>{label}</a>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="link">
              <br />
              {ServicesLinks.filter(service => service.row == 2).map(
                ({ label, href }, key) => {
                  return (
                    <li key={key}>
                      <Link href={`/service${href}`}>
                        <a>{label}</a>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="col-md-3">
            {/* <h6 className="title">Newsletter</h6>
            <NewsLetter /> */}
          </div>
        </div>
        <hr className="my-4" />
        <p className="copyright">
          Copyright &copy; 2019. Coach4Success. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const AboutCoach = [
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Latest News", href: "/latest-news" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" }
];

export const ServicesLinks = [
  { label: "Interview Coaching", href: "/interview-coaching", row: "1" },
  { label: "Resume Review", href: "/resume-review", row: "1" },
  { label: "30-Minutes Career Q&A", href: "/career-questions", row: "1" },
  { label: "Job Search Strategy", href: "/job-search-strategy", row: "1" },
  { label: "Cover Letter Writing", href: "/cover-letter-writing", row: "1" },
  { label: "Networking Strategy", href: "/networking-strategy", row: "1" },
  { label: "Career Transition", href: "/career-transition", row: "1" },
  {
    label: "Resume+LinkedIn Review",
    href: "/resume-linkedin-review",
    row: "2"
  },
  {
    label: "New Entrepreneur Coaching",
    href: "/new-entrepreneur-coaching",
    row: "2"
  },
  { label: "Career Choice", href: "/career-choice", row: "2" }
];

const ServicesLinks2 = [
  { label: "Resume+LinkedIn Review", href: "/resume-linkedin-review" },
  { label: "New Entrepreneur Coaching", href: "/new-entrepreneur-coaching" },
  { label: "Career Choice", href: "/career-choice" }
];
