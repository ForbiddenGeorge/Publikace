import { AddAuthorButton } from 'actions/AddAuthorButton';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

  /**
   * Komponenta zobrazující select pro výběr autora k přidání k publikaci.
   *
   * @param {string} publicationId - ID publikace.
   * 
   * @returns {JSX.Element} - The rendered component
   */
function EditCardNavBarAddAuthorSelect(publicationId) {

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