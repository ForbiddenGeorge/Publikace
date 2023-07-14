import { useSelector } from 'react-redux';
import Select from 'react-select';
  /**
   * Komponenta pro výběr uživatelů v modálním okně pro přidání publikace.
   *
   * 
   * @param {array} selectedAuthors - Pole vybraných autorů.
   * @param {function} setSelectedAuthors - Funkce pro nastavení vybraných autorů.
   * 
   * @returns {JSX.Element} - The rendered component
   */
function AddPublicationModalInsertUsers({ selectedAuthors, setSelectedAuthors }) {

  const users = useSelector((state) => state.users);
  //console.log('Users fetched in modal:', users);

  const handleAuthorSelection = (selectedOptions) => {
    /**
     * Funkce pro zpracování výběru autorů.
     *
     * Parametry:
     * - selectedOptions (array): Pole vybraných možností (autorů).
     */
    const selectedUserIds = selectedOptions.map((option) => option.value);
    setSelectedAuthors(selectedUserIds);
  };

  //console.log('Selected authors:', selectedAuthors);

  // Create an array of options for the select component
  const options = users.map((user) => ({
    value: user.id,
    label: `${user.name} ${user.surname} ${user.email}`,
  }));

  return (
    <div>
      <p>Seznam uživatelů:</p>
      <Select
        label="Hej"
        options={options}
        isMulti
        value={options.filter((option) => selectedAuthors.includes(option.value))}
        onChange={handleAuthorSelection}
      />
    </div>
  );
}

export default AddPublicationModalInsertUsers;