import { useSelector } from 'react-redux';
import Select from 'react-select';
function AddPublicationModalInsertUsers({
  selectedAuthors,
  setSelectedAuthors
}) {
  const users = useSelector(state => state.users);
  //console.log('Users fetched in modal:', users);

  const handleAuthorSelection = selectedOptions => {
    const selectedUserIds = selectedOptions.map(option => option.value);
    setSelectedAuthors(selectedUserIds);
  };

  //console.log('Selected authors:', selectedAuthors);

  // Create an array of options for the select component
  const options = users.map(user => ({
    value: user.id,
    label: `${user.name} ${user.surname} ${user.email}`
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Seznam u\u017Eivatel\u016F:"), /*#__PURE__*/React.createElement(Select, {
    label: "Hej",
    options: options,
    isMulti: true,
    value: options.filter(option => selectedAuthors.includes(option.value)),
    onChange: handleAuthorSelection
  }));
}
export default AddPublicationModalInsertUsers;