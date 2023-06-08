//Tady to ještě nefunguje takže nebudu komentovat
import React from 'react';
import { useSelector } from 'react-redux';
//Nevím přesně jak to budu měnit, jestli drag and drop, nebo jestli pomocí input, nebo Range(to teď zkusím v Contribution)
function EditCardNavBarOrderOfAuthors() {
  const publications = useSelector((state) => state.publications);
  console.log('publications: ', publications);

  return (
    <div className='container'>
      {publications.map((publication) => (
        <div key={publication.id}>
          {publication.authors.map((author) => (
            <div key={author.id} className='card mb-2 p-2'>
                <div className='row'>
                    <div className='col-10'>
              <h5>{author.user.name} {author.user.surname}</h5>
              </div>
              <div className='col-2'>
              <h5>{author.order}</h5>
              </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default EditCardNavBarOrderOfAuthors;