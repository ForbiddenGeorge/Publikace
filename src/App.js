import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicationTypeLoad from 'components/PublicationTypeLoad';
import TopHeader from 'components/TopHeader';
import Filter from 'components/Filter';

//Volání základních komponent

function App() {

  return (
    <div className="App">
      <TopHeader/> {/*Nadpis stránky*/}
      <PublicationTypeLoad/>{/*Načtení typů publikací*/}
      {/* <Filter/> */}
      <PublicationLoad/>
      {/* <PublicationLoad Authors={selectedAuthors}/> */}
    </div>
  );
}

export default App;
