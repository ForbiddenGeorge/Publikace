import { AddAuthorButton } from 'actions/AddAuthorButton';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Tady ukazuji select, volám query a posílám příslušná data do další komponenty, která volá mutaci
function EditCardNavBarAddAuthorSelect({publicationId, onselect}) {
 // const [users, setUsers] = useState([]);
  // const [selectedUserId, setSelectedUserId] = useState(true);
  // const users = useSelector((state) =>state.users);
  // console.log("Users array: ", users);
 /* useEffect(() => { přesunut do PublicationLoad
    //Volám si pole uživatelů pomocí query 
    const fetchData = async () => {
      try {
        const response = await UserPageQuery();
        const data = await response.json();
       // const fetchedUsers = data.data.userPage;
        dispatch(loadUsersData(data.data.userPage));
        console.log('Users fetched');
        console.log(data.data.userPage);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [dispatch, users]);*/
  //Při výběru autora ze selectu si uložím jeho ID
  const handleSelectChange = (event) => {
    const selectedUserId = event.target.value;
    // setSelectedUserId(selectedUserId);
    if (onselect){
      onselect(selectedUserId)
    }
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
      {/*Volám button a dávám mu potřebná data === dát pryč */}
      {/* <AddAuthorButton selectedUserId={selectedUserId} selectedPublicationId={publicationId} AuthorNumber={users.length+1}/> */}    {/*ŠTEFEK*/}
    </div>
  );
}

export default EditCardNavBarAddAuthorSelect;