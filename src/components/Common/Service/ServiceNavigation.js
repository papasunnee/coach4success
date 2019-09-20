import Link from "next/link";
import { ServicesLinks } from "../../Footer";

import "./ServiceNavigation.scss";

const ServiceNavigation = props => {
  return (
    <div className="navigationMenu">
      <ul className="navigationList">
        <h4>Services</h4>

        {ServicesLinks.map(({ href, label }, key) => {
          let active = false;
          return (
            <li key={key} className="navigationItem">
              <Link href={`/service${href}`}>
                <a className={`navigationLink ${active ? "active" : ""}`}>
                  {label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceNavigation;
