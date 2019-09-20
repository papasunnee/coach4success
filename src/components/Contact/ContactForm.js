import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <section className="contactForm p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 className="text-center my-4">Drop a Line</h3>
            <form
              action=""
              className="form"
              onSubmit={e => {
                e.preventDefault();
                alert("Contact Developer");
              }}
            >
              <div className="form-group">
                <input
                  className="form-control"
                  required
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  required
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="7"
                  className="form-control"
                  required
                  placeholder="Feedback"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="submitButton">
                  {" "}
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
