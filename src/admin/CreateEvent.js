import React from 'react';

class CreateEvents extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isLiveStream : false,
      isVideo: true,
    }

    this.streamOption = this.streamOption.bind(this);
  }

  streamOption = (stream) => {
    console.log(stream.target.value);
    if(stream.target.value === 'Live Streaming'){
      this.setState({isLiveStream: true})
      this.setState({isVideo: false})
    }else{
      this.setState({isVideo: true})
      this.setState({isLiveStream: false})
    }
  }

  render (){
    return (      
        <div className="modal fade" id="create_event" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="create_event" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="create_event">Create Event</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col col-lg-12">
                      <form className="create-event_form text-start">
                        <div className="mb-3">
                          <input type="text" className="form-control" id="eventTitle" placeholder="Enter Event Title*" required/>
                        </div>
                        <div className="mb-3">
                          <textarea className="form-control" rows="4" id="eventDescription" placeholder="Event Desctiption*" required/>
                        </div>
                        <div className="mb-3">
                          <input type="text" className="form-control" id="eventCode" placeholder="Enter Event Code*" required/>
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col col-lg-6">
                              <label htmlFor="startDate">Start Date<span className="required">*</span></label>
                              <input type="date" className="form-control" id="startDate" required/>
                            </div>
                            <div className="col col-lg-6">
                              <label htmlFor="endDate">End Date<span className="required">*</span></label>
                              <input type="date" className="form-control" id="endDate" required/>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col col-lg-6">
                              <label htmlFor="startTime">Start Time<span className="required">*</span></label>
                              <input type="time" className="form-control" id="startTime" required/>
                            </div>
                            <div className="col col-lg-6">
                              <label htmlFor="endTime">End Time<span className="required">*</span></label>
                              <input type="time" className="form-control" id="endTime" required/>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="w-100" htmlFor="eventtype">Event Type<span className="required">*</span></label>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="public" value="public" name="eventType"/>
                            <label className="form-check-label" htmlFor="public">Public</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="private" value="private" name="eventType"/>
                            <label className="form-check-label" htmlFor="private">Private</label>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="streamType">Stream Type<span className="required">*</span></label>
                          <div className="row">
                            <div className="col col-lg-6">
                              <select className="form-select" id="stream_type" onChange={this.streamOption}>
                                <option disabled>Select Stream Type</option>
                                <option>Video</option>
                                <option>Live Streaming</option>
                              </select>
                            </div>
                            <div className="col col-lg-6" id="streamValue">
                              {this.state.isVideo ? <input type="file" className="form-control" id="streamVideo" accept="video/*" required/> :  ''}
                              {this.state.isLiveStream ? <input type="text" className="form-control" id="streamKey" placeholder="Enter Stream Key*" required/> :  ''}
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn blue-btn w-100">Create Event</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default CreateEvents;

