//Buď se s tím můžu srát, udělám scrollbary pro akždého autora a s tím si pak hrát
//nebo udělám jednoduché inputy a bude hotovo
//vzhledem k tomu že ještě nemám vůbec započaté mutations, tak jakože kurva
//udělám prvně mutations pro první kartu, abych viděl že to funguje ať se s tím pak neseru
import { useSelector } from "react-redux";

function EditCardNavBarChangeContribution(){
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
                <h5>{author.share}</h5>
                </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
}

export default EditCardNavBarChangeContribution;