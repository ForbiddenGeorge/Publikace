import { useSelector } from "react-redux"
import { useState } from "react";
function AddPublicationModalInserUsers(){

    const users = useSelector((state) =>state.users);
    console.log("Users fetched in modal: ", users);
    const [user, setPublicationType] = useState('');
    console.log("Selected user: ", user);
    return(
        <select className="select" onChange={(e) => setPublicationType(e.target.key)} multiple>
        <option disabled>
            Seznam uživatelů
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} {user.surname} {user.email}
          </option>
        ))}
      </select>
    )

}
export default AddPublicationModalInserUsers;