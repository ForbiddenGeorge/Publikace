import { GroupsSelectQuery } from '../querries/PublicationGroupQuery';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from 'features/PublicationSlice';
import { useEffect /*, useState*/ } from 'react';
import PublicationCard from './PublicationCard';
import { loadUsersData } from 'features/UserPageSlice';
import { UserPageQuery } from 'querries/UserPageQuery';

//Tady dělám fetch publikací a userů z databáze a pro každou publikaci volám komponentu PublicationCard
const PublicationLoad = Authors => {
  const publications = useSelector(state => state.publications);
  const dispatch = useDispatch();

  //console.log('Authors filtered XXXX: ', Authors[0]);

  const filteredPublications = [];
  publications.forEach(publication => {
    //console.log('Authors of selPub XXXX: ', publication.authors);

    if (publication.authors.some(author => Authors.Authors.includes(author.id))) {
      //console.log('Added pub XXXX: ', publication.name);
      filteredPublications.push(publication);
    }
  });
  useEffect(() => {
    //fetch pro publikace
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        //console.log('Response:', data);
        //Ty data jsou prázdná, warum??
        if (data && data.data) {
          dispatch(loadData(data.data.publicationPage));
          console.log('Data fetched');
        } else {
          console.log('Error fetching something');
        }
        ;
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
    //fetch pro usery
    const fetchUsersData = async () => {
      try {
        const response = await UserPageQuery();
        const data = await response.json();
        // const fetchedUsers = data.data.userPage;
        dispatch(loadUsersData(data.data.userPage));
        //console.log('Users fetched');
        //console.log(data.data.userPage);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUsersData();
    fetchData();
  }, [dispatch]);
  //Pro každou z publikací udělám novou kartu

  if (Authors.Authors.length === 0) {
    return publications.map(pub => /*#__PURE__*/React.createElement(PublicationCard, {
      key: pub.id,
      publication: pub
    }));
  } else {
    return filteredPublications.map(pub => /*#__PURE__*/React.createElement(PublicationCard, {
      key: pub.id,
      publication: pub
    }));
  }

  // return (publications.map((pub) => (
  //   <PublicationCard key={pub.id} publication={pub}/>)))
};

export default PublicationLoad;