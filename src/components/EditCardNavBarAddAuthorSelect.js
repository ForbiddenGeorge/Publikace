import { AddAuthorButton } from 'actions/AddAuthorButton';
//dneska jen zprovoznit query, takže select zobrazuje usery ze serveru
import React, { useEffect, useState } from 'react';
import { UserPageQuery } from 'querries/UserPageQuery';
import { event } from 'jquery';



function EditCardNavBarAddAuthorSelect() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserPageQuery();
        const data = await response.json();
        const fetchedUsers = data.data.userPage;
        setUsers(fetchedUsers);
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
      <AddAuthorButton selectedUserId={selectedUserId}/>
    </div>
  );
}

export default EditCardNavBarAddAuthorSelect;