import React from 'react';

class View extends React.Component{
    render (){
        return (
            <div className="view">
                <div className="container">
                    <div className="row event-wrapper">
                        <div className="col col-md-3 col-lg-2">
                            <form className="upload_wrapper mb-3">
                                <input type="file" id="event_cover" hidden/>
                                <label htmlFor="event_cover" className="event_cover_btn"><i className="fas fa-upload"></i>Upload<br/>Event Cover Here</label>
                            </form>
                        </div>
                        <div className="col col-md-9 col-lg-10 text-start">
                            <h2 className="event_title">Event 03</h2>
                            <span className="event_status">Pending</span>
                            <p className="event_description">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                            nisl ut aliquip ex ea commodo consequat. Duis autem vel </p>
                        </div>
                    </div>
                    <div className="row text-start mt-3">
                        <div className="col col-lg-12">
                            <h5>Schedule</h5>
                            <div className="event_date_wrapper">
                                <span className="mr-3"><strong>Date: </strong></span>
                                <span className="event_date">2021-01-16 to 2021-01-17</span>
                            </div>
                            <div className="event_time_wrapper">
                                <span className="mr-3"><strong>Time: </strong></span>
                                <span className="event_time">09:00 to 18:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-12">
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-12">
                            <nav className="mb-4">
                                <div className="nav nav-tabs" id="events_views" role="tablist">
                                    <a className="nav-link active" id="nav-users-tab" data-bs-toggle="tab" href="#nav-users" role="tab" aria-controls="nav-users" aria-selected="true">Users</a>
                                    <a className="nav-link" id="nav-raffles-tab" data-bs-toggle="tab" href="#nav-raffles" role="tab" aria-controls="nav-raffles" aria-selected="false">Raffles</a>
                                    <a className="nav-link" id="nav-questionnaires-tab" data-bs-toggle="tab" href="#nav-questionnaires" role="tab" aria-controls="nav-questionnaires" aria-selected="false">Questionnaires</a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-users" role="tabpanel" aria-labelledby="nav-users-tab"><p>Home</p></div>
                                <div className="tab-pane fade" id="nav-raffles" role="tabpanel" aria-labelledby="nav-raffles-tab"><p>Home 1</p></div>
                                <div className="tab-pane fade" id="nav-questionnaires" role="tabpanel" aria-labelledby="nav-questionnaires-tab"><p>Home2</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;