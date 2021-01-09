import React from "react";

class Contact extends React.Component {
  render() {
    return (
        <section id="contact-us" className="blue-bg_contact-us">
          <div className="container">
            <div className="row text-center py-5">
              <div className="col col-lg-12">
                <h1>CONTACT US</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim{" "}
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="userEmail"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="userSubject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      id="userMessage"
                      cols="30"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Send Email
                  </button>
                </form>
                <div className="connect-with-us">
                  <div className="content">
                    <p>Connect With us:</p>
                    <p className="mx-3">
                      For support or any questions
                      <br />
                      Email us at{" "}
                      <a href="mailto:quiplist.events@gmail.com">
                        quiplist.events@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Contact;
