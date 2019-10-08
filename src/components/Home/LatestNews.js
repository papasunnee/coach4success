import React from "react";
import Link from "next/link";
import "./LatestNews.scss";

const LatestNews = ({ filter = false }) => {
  return (
    <section className="latestNews">
      <div className="container my-5">
        {filter && (
          <div className="row">
            <div className="col-md-12">
              <h3 className="my-3">Insight</h3>
            </div>
          </div>
        )}

        <div className="row">
          {NewsList.filter(news => news.active == filter).map(
            ({ image, title, date, href }, key) => {
              return (
                <div className="col-md-3" key={key}>
                  <div className="card mb-3">
                    <img
                      src={`/static/images/${image || "newsCard"}.png`}
                      className="card-img-top"
                      alt={title || "Altitude Technology Worldwide is global"}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {title || "Altitude Technology Worldwide is global"}
                      </h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>

                      <p className="card-text">
                        <span className="text-muted card-link">3 mins ago</span>
                        <Link href={href}>
                          <a className="card-link">Read More</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

const NewsList = [
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: true
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: true
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: true
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: true
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  },
  {
    image: "newsCard",
    title: "Altitude Technology Worldwide is global",
    date: "",
    href: "news-page",
    active: false
  }
];
