import React from 'react';

class Profile extends React.Component {
  render (){
    return (      
        <div className="px-3">
        <div className="heading-wrapper">
            <h6 className="text-start">My Profile</h6>
            <hr/>
        </div>
        <form className="profile-form-wrapper text-start">
            <div className="mb-3 px-0">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3 px-0">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="mb-3 px-0">
                <label htmlFor="contact_number">Contact Number</label>
                <input type="number" className="form-control" id="contact_number" />
            </div>
            <div className="mb-3 px-0">
                <label htmlFor="affiliation">Affiliation</label>
                <input type="text" className="form-control" id="affiliation" />
            </div>
            <div className="px-0">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-4 mb-3">
                        <label htmlFor="member_type">Member Type</label>
                        <select className="form-select">
                            <option>Member</option>
                            <option>Member2</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-8 mb-3">
                        <label htmlFor="member_id">Member ID</label>
                        <input type="text" className="form-control" id="member_id" />
                    </div>
                </div>
            </div>
            <div className="px-0">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="py-3 text-center">
                <button type="submit" class="btn blue-btn px-5">SAVE</button>
            </div>
        </form>
        </div>
    );
  }
}
export default Profile;

