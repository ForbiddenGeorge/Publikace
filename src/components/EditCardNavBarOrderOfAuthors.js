import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateAuthorOrder } from 'features/PublicationSlice';
import { ChangeAuthorOrderMutation } from 'querries/ChangeAuthorOrderMutation';

function EditCardNavBarOrderOfAuthors({ publicationId }) {
  const publications = useSelector((state) => state.publications);
  const selectedPublication = publications.find(
    (publication) => publication.id === publicationId.publicationId
  );
  const dispatch = useDispatch();

  const [authors, setAuthors] = useState(selectedPublication ? [...selectedPublication.authors] : []);

  const handleOrderChange = (authorId, newOrder) => {
    const updatedAuthors = authors.map((author) =>
      author.id === authorId ? { ...author, order: newOrder } : author
    );
    setAuthors(updatedAuthors);
  };

  const handleSaveOrderChange = () => {
    const isOrderUnique = checkUniqueOrder(authors);

    if (isOrderUnique) {
      console.log("USeři:", authors);
      authors.forEach((author) => {
        console.log("Id usera: ", author.id,"Order usera: ", author.order, "Share usera: ", author.share)
        ChangeAuthorOrderMutation({
          userId: author.id,
          userOrder: author.order,
          userShare: author.share,
          lastchange: author.lastchange
        });
      console.log('Mutation zavolána');
      dispatch(UpdateAuthorOrder({publicationId: selectedPublication.id, authorId: author.id, newOrder: author.order}));
      console.log('A dispatch taky');
      });
      

    } else {
      console.log('Pořadí autorů musí být unikátní');
    }
  };

  const checkUniqueOrder = (authors) => {
    const orderSet = new Set();
    for (const author of authors) {
      if (orderSet.has(author.order)) {
        return false;
      }
      orderSet.add(author.order);
    }
    return true;
  };

  return (
    <div className='container'>
      {selectedPublication &&
        selectedPublication.authors.map((author) => (
          <div key={author.id} className='card mb-2 p-2'>
            <div className='row'>
              <div className='col-8'>
                <h5>
                  {author.user.name} {author.user.surname}
                </h5>
              </div>
              <div className='col-2'>
                <input
                  type='number'
                  value={authors.find((a) => a.id === author.id)?.order || ''}
                  min={1}
                  max={selectedPublication.authors.length}
                  onChange={(e) => handleOrderChange(author.id, parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
        ))}
      <button type='button' className='btn bg-success text-white' onClick={handleSaveOrderChange}>
        Uložit pořadí
      </button>
    </div>
  );
}

export default EditCardNavBarOrderOfAuthors;