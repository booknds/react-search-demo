import React from 'react';
import Router from 'react-router';
import Customer from './Customer';
import Prescription from './Prescription';

const Profile = () => (
  <div className="container center-block">
    <div className="col-md-6">
      <Customer/>
    </div>
    <div className="col-md-6">
      <Prescription />
    </div>

  </div>
);

export default Profile;
