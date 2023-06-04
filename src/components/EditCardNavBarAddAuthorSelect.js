import { AddAuthorButton } from 'actions/AddAuthorButton';
import React, { useEffect, useState } from 'react';
import { UserPageQuery } from 'querries/UserPageQuery';
//import { event } from 'jquery';

function EditCardNavBarAddAuthorSelect(publicationId) {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserPageQuery();
        const data = await response.json();
        const fetchedUsers = data.data.userPage;
        setUsers(fetchedUsers);
        console.log('Users fetched');
        console.log(data.data.userPage);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

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
      <AddAuthorButton selectedUserId={selectedUserId} selectedPublicationId={publicationId}/>
    </div>
  );
}

export default EditCardNavBarAddAuthorSelect;