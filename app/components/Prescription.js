import React from 'react';

const mockData = {
      "prescription_id": 0,
      "medication_name": "Alive",
      "prescribing_doctor": "Dr. Sally",
      "dosage": "500mg",
      "quantity": 30,
      "instructions": "Twice A Day",
      "number_of_refills": 1,
      "date_filled": "April 21, 1965",
      "expiration_date": "April, 21, 2030",
      "customer": {
        "first_name": "Beth",
        "last_name": "Williams",
        "street": "123 Boogy Woogy Ave",
        "city": "San Jose",
        "state": "California",
        "phone_number": "508-999-8852",
        "date_of_birth": "August 1, 1921"
      }
    };

const Prescription = () => (
  <div>
    <div className="row">
      <img className="col-sm-6 img-responsive img-circle" src="http://www.clipartsfree.net/vector/medium/ftdopewars-pill_Clip_Art.png" style={{backgroundColor:"red", height: 140, width: 140}}/>
      <div className="col-sm-6 ">
        {!!mockData.medication_name && <p>Medication: {mockData.medication_name}</p>}
        {!!mockData.prescribing_doctor && <p>Doctor: {mockData.prescribing_doctor}</p>}
        {!!mockData.dosage && <p>Dosage: {mockData.dosage}</p>}
        {!!mockData.quantity && <p>Quantity: {mockData.quantity}</p>}
        {!!mockData.instructions && <p>Instructions: {mockData.instructions}</p>}
        {!!mockData.number_of_refills && <p>Number of Refills: {mockData.number_of_refills}</p>}
        {!!mockData.date_filled && <p>Date Filled: {mockData.date_filled}</p>}
        {!!mockData.expiration_date && <p>Expiration Date: {mockData.expiration_date}</p>}
      </div>
    </div>
  </div>
)

export default Prescription;
