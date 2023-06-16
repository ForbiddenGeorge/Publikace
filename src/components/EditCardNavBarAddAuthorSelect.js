import { AddAuthorButton } from 'actions/AddAuthorButton';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Tady ukazuji select, volám query a posílám příslušná data do další komponenty, která volá mutaci
function EditCardNavBarAddAuthorSelect(publicationId) {
 // const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(true);
  const users = useSelector((state) =>state.users);
  console.log("Users array: ", users);
  
  const handleSelectChange = (event) => {
    const selectedUserId = event.target.value;
    setSelectedUserId(selectedUserId);
  };

  return (
    <div className="container-fluid">
      <select className="form-select" aria-label="Default select example" onChange={handleSelectChange}>
        <option disabled>
            Seznam uživatelů
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} {user.surname} {user.email}
          </option>
        ))}
      </select>
      {/*Volám button a dávám mu potřebná data */}
      <AddAuthorButton selectedUserId={selectedUserId} selectedPublicationId={publicationId}/>
    </div>
  );
}

export default EditCardNavBarAddAuthorSelect;