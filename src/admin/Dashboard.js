import React from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { MDBDataTable } from 'mdbreact';
class Dashboard extends React.Component {
  userData = [
    {
      quarter: "Q1",
      users: 124,
    },
    {
      quarter: "Q2",
      users: 108,
    },
    {
      quarter: "Q3",
      users: 96,
    },
    {
      quarter: "Q4",
      users: 104,
    },
  ];

  eventsData = [
    {
      quarter: "Q1",
      events: 10,
    },
    {
      quarter: "Q2",
      events: 20,
    },
    {
      quarter: "Q3",
      events: 15,
    },
    {
      quarter: "Q4",
      events: 35,
    },
  ];

  constructor (){
    super();

    this.state ={
      users: {
        data: this.userData,
        title: {
          text: 'Users',
        },
        series: [{
          type: 'bar',
          xKey: 'quarter',
          yKeys: ['users'],
          fills: ['#3943ca'],
          strokes: ['#3943ca'],
        }],
        axes: [
          {
            type: 'number',
            position: 'bottom',
          },
          {
            type: 'category',
            position: 'left',
          },
        ],
        legend: {
          enabled: false,
        }
      },
      events: {
        data: this.eventsData,
        title: {
          text: 'Events',
        },
        series: [{
          type: 'bar',
          xKey: 'quarter',
          yKeys: ['events'],
          fills: ['#8011cc'],
          strokes: ['#8011cc'],
        }],
        axes: [
          {
            type: 'number',
            position: 'bottom',
          },
          {
            type: 'category',
            position: 'left',
          },
        ],
        legend: {
          enabled: false,
        }
      },
    }
  }
  render (){
    const dataTable = {
      columns: [
        {
          label: 'Page',
          field: 'page',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Page Update',
          field: 'page_update',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Date Update',
          field: 'date_update',
          sort: 'asc',
          width: 270
        },
  
      ],
      rows: [
        {
          page: 'About',
          page_update: 'Change About Heading',
          date_update: '2021/01/03'
        },
        {
          page: 'Home',
          page_update: 'Change Carousel Image',
          date_update: '2021/01/03'
        },
      ]
    };
    return (   
        <div className="dashboard">
            <div className="container">
              <div className="row">
                <div className="col col-lg-6 my-2">
                  <AgChartsReact options={this.state.users} />
                </div>
                <div className="col col-lg-6 my-2">
                  <AgChartsReact options={this.state.events} />
                </div>
              </div>
              <div className="row mt-4 align-items-center">
                <div className="col col-lg-6 text-start">
                  <h5>Latest Page Updates</h5>
                </div>
                <div className="col col-lg-6 text-end">
                  <button className="btn blue-btn"><i className="fas fa-file-alt"></i> Manage Pages</button>
                </div>
                <hr className="mt-2"/>
              </div>
              <div className="row mt-2">
                <div className="col col-lg-12">
                  <MDBDataTable
                    bordered
                    small
                    responsive
                    data={dataTable}
                  />
                </div>
              </div>
            </div>
        </div>
    );
  }
}
export default Dashboard;

