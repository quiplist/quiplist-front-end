import React from 'react';

class Home extends React.Component {
  render (){
    return (
      <div className="home">
        <section id="section1">
            <div id="sliderIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="img/placeholder1.jpg" className="d-block w-100" alt="placeholder1" />
                  </div>
                  <div className="carousel-item">
                    <img src="img/placeholder2.jpg" className="d-block w-100" alt="placeholder2"/>
                  </div>
                  <div className="carousel-item">
                    <img src="img/placeholder3.jpg" className="d-block w-100" alt="placeholder3"/>
                  </div>
                </div>
            </div>
        </section>
        <section id="section2" className="blue-bg py-3">
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col col-lg-12">
                        <h1>Welcome!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                            delenit augue duis dolore te feugait nulla facilisi.</p>
                        <p>Click <a href="login.html">here</a> to login and join an event.</p>
                    </div>
                </div>
                <form className="event-code-wrapper mb-3">
                    <input type="text" id="eventCode" placeholder="Event Code:"/>
                    <label htmlFor="eventCode">
                        Please enter your unique code here. This code is exclusive
                        and can only be used once and during the event phase only.
                        Sharing this code may cost you to lose your event access.
                    </label>
                    <div className="row justify-content-end align-items-center mt-2">
                        <div className="col-9">
                            <div className="form-check px-0">
                                <input type="checkbox" id="terms"/>
                                <label className="form-check-label px-1" htmlFor="terms">
                                    I agree to the Terms of Service
                                    and Privacy Policy.
                                </label>
                            </div>
                        </div>
                        <div className="col-3 text-end">
                            <button type="submit" className="btn btn-event-code">Join</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
      </div>
    );
  }
}
export default Home;

