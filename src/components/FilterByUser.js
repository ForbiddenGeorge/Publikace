import { useSelector } from 'react-redux';
import Select from 'react-select';

function FilterByUser({ selectedAuthors, setSelectedAuthors }) {
  const users = useSelector((state) => state.users);
  //console.log('Users fetched to filter:', users);

  const handleAuthorSelection = (selectedOptions) => {
    const selectedUserIds = selectedOptions.map((option) => option.value);
    setSelectedAuthors(selectedUserIds);
  };
  const options = users.map((user) => ({
    value: user.id,
    label: `${user.name} ${user.surname} ${user.email}`,
  }));

  return (
    <div>
      <p>Filtrovat podle autora:</p>
      <Select
        options={options}
        isMulti
        value={options.filter((option) => (selectedAuthors ?? []).includes(option.value))}
        onChange={handleAuthorSelection}
      />
    </div>
  );
}

export default FilterByUser;
