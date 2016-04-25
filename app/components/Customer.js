import React from 'react';

const customer = {
        "first_name": "Beth",
        "last_name": "Williams",
        "street": "123 Boogy Woogy Ave",
        "city": "San Jose",
        "state": "California",
        "phone_number": "508-999-8852",
        "date_of_birth": "August 1, 1921"
      };

const CustomerProfile = ({perscription}) => {
  const randomImage = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  
  return (
    <div>
      <div className="row">
        <img className="col-sm-6 img-responsive img-circle" src={`./img/pngs/avatar-0${randomImage}.png`} style={{backgroundColor:"blue", height: 140, width: 140}}/>
        <div className="col-sm-6">
          {!!customer.first_name && <p>First Name: {customer.first_name}</p>}
          {!!customer.last_name && <p>Last Name: {customer.last_name}</p>}
          {!!customer.date_of_birth && <p>D.O.B: {customer.date_of_birth}</p>}
          {!!customer.street && <p>Street: {customer.street}</p>}
          {!!customer.city && <p>City: {customer.city}</p>}
          {!!customer.state && <p>State: {customer.state}</p>}
          {!!customer.phone_number && <p>#: {customer.phone_number}</p>}

        </div>
      </div>
    </div>)
};

export default CustomerProfile;
