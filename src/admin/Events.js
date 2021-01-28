import React from 'react';
import { MDBBtn, MDBDataTable } from 'mdbreact';
import CreateEvent from '../admin/CreateEvent';

class Events extends React.Component {


  render (){
    const eventsList = {
      columns: [
        {
          label: 'Event Title',
          field: 'event_title',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Event Code',
          field: 'event_code',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Type',
          field: 'type',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Event Date',
          field: 'event_date',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Event Creation',
          field: 'event_creation',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Event Last Update',
          field: 'event_last_update',
          sort: 'asc',
          width: 270
        },
        {
          label: '',
          field: 'view',
          sort: 'asc',
          width: 270
        },
        {
          label: '',
          field: 'edit',
          sort: 'asc',
          width: 270
        },
        {
          label: '',
          field: 'delete',
          sort: 'asc',
          width: 270
        },
      ],
      rows: [
        {
          event_title: 'Event 01',
          event_code: 'EVNT01',
          type: 'Public',
          event_date: '2021-01-16 09:00:00',
          status: <MDBBtn size="sm" className="btn pending">Pending</MDBBtn>,
          event_creation: '2021-01-10 16:14:46',
          event_last_update: '2021-01-10 16:14:46 ',
          view: <MDBBtn size="sm" className="btn btn-view">View</MDBBtn>,
          edit: <MDBBtn size="sm" className="btn btn-edit">Edit</MDBBtn>,
          delete: <MDBBtn size="sm" className="btn btn-delete">Delete</MDBBtn>
        },
        {
          event_title: 'Event 02',
          event_code: 'EVNT02',
          type: 'Private',
          event_date: '2021-01-16 09:00:00',
          status: <MDBBtn size="sm" className="btn on-going">On Going</MDBBtn>,
          event_creation: '2021-01-10 16:14:46',
          event_last_update: '2021-01-10 16:14:46 ',
          view: <MDBBtn size="sm" className="btn btn-view">View</MDBBtn>,
          edit: <MDBBtn size="sm" className="btn btn-edit">Edit</MDBBtn>,
          delete: <MDBBtn size="sm" className="btn btn-delete">Delete</MDBBtn>
        },
        {
          event_title: 'Event 03',
          event_code: 'EVNT03',
          type: 'Private',
          event_date: '2021-01-16 09:00:00',
          status: <MDBBtn size="sm" className="btn done">Done</MDBBtn>,
          event_creation: '2021-01-10 16:14:46',
          event_last_update: '2021-01-10 16:14:46 ',
          view: <MDBBtn size="sm" className="btn btn-view">View</MDBBtn>,
          edit: <MDBBtn size="sm" className="btn btn-edit">Edit</MDBBtn>,
          delete: <MDBBtn size="sm" className="btn btn-delete">Delete</MDBBtn>
        },
      ],
    };

    return (      
      <div className="events">
        <div className="container">
          <div className="row text-end">
            <div className="col col-lg-12 my-2">
              <button className="btn blue-btn" data-bs-toggle="modal" data-bs-target="#create_event">Create Event</button>
              <CreateEvent/>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-12 my-2">
              <MDBDataTable
                  btn
                  responsive
                  bordered
                  small
                  data={eventsList}
                />
            </div>
          </div>
          <div className="row justify-content-start text-start pb-3">
            <div className="col col-lg-12 my-2">
              <button className="btn btn-dowload-csv">Download CSV</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Events;

