import React from 'react';
import { MDBDataTable } from 'mdbreact';

class Users extends React.Component {


  render (){
    const usersList = {
      columns: [
        {
          label: '#',
          field: 'user_id',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Username',
          field: 'user_name',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Password',
          field: 'user_password',
          sort: 'asc',
          width: 270
        },
        {
          label: 'First Name',
          field: 'user_first_name',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Last Name',
          field: 'user_last_name',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Email',
          field: 'user_email',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Date of Birth',
          field: 'date_of_birth',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Role',
          field: 'user_role',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Event Code',
          field: 'user_event_code',
          sort: 'asc',
          width: 270
        },
      ],
      rows: [
        {
          user_id: '01',
          user_name: 'JuanDelaCruz01',
          user_password: '--------------',
          user_first_name: 'Juan',
          user_last_name: 'Dela Cruz',
          user_email: 'juandelacruz@gmail.com',
          date_of_birth: 'May 13, 1993',
          user_role: 'Admin',
          user_event_code: ['hello ', 'test']
        },
      ],
    };

    return (      
      <div className="events">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12 my-2">
              <MDBDataTable
                  btn
                  responsive
                  bordered
                  small
                  data={usersList}
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
export default Users;

