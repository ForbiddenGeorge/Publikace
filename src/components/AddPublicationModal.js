import React, { useState } from 'react';
import { AddPublicationMutation } from 'querries/AddPublicationMutation';

function AddPublicationModal() {
  const [title, setTitle] = useState('');
  //const [publicationType, setPublicationType] = useState('');
  const [location, setLocation] = useState('');
  const [reference, setReference] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I have been clicked", title);
       // console.log("I have been clicked", publicationType);
        console.log("I have been clicked", location);
        console.log("I have been clicked", reference);
    AddPublicationMutation({
        title: title,
      //  publicationType: publicationType,
        location: location,
        reference: reference
    });
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Název publikace"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-6">
            <select>
              <option disabled>Help</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Místo"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn bg-success text-white">
          Přidat
        </button>
      </form>
    </div>
  );
}

export default AddPublicationModal;