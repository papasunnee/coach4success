import Router from "next/router";
import Link from "next/link";
import ServiceList from "../Services/Service";
import "./ServiceNavigation.scss";

const ServiceNavigation = props => {
  return (
    <div className="navigationMenu">
      <ul className="navigationList">
        <h4>Services</h4>
        {ServiceList.map(({ href, label }, key) => {
          let active = false;
          return (
            <li key={key} className="navigationItem">
              <Link href={`/service/${href}`}>
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
