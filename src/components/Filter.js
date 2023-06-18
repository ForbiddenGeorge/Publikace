import React, { useState } from 'react';
import FilterByUser from './FilterByUser';
import PublicationLoad from './PublicationLoad';

function Filter() {
  //konstanty pro ukládání hodnot z inputů
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  

  const handleSubmit = async (e) => {//Na kliknutí buttonu Filtrovat, volám PublicationLoad
    //console.log('F - Selected authors:', selectedAuthors);
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      {/*Vytvářím formu pro lepší organizaci všech inputů */}
      <form onSubmit={handleSubmit}>
          
        {/*Select pro výběr autorů k publikaci */}
        <div className='row mb-3'>
            <div className='col-9'> <FilterByUser selectedAuthors={selectedAuthors} setSelectedAuthors={setSelectedAuthors}/> </div>
            <div className='col-1'> <button type="submit" className="btn bg-success text-white"> Filtrovat </button> </div>{/**Button typu submit, volá mutaci */} 
        </div>
      </form>
      <PublicationLoad Authors={selectedAuthors}/>
    </div>
  );
}

export default Filter;