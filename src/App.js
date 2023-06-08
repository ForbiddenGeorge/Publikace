import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicationTypeLoad from 'components/PublicationTypeLoad';
import  PublicationLoad  from 'components/PublicationLoad';
import TopHeader from 'components/TopHeader';

//Volání základních komponent
function App() {
  return (
    <div className="App">
      <TopHeader/> {/*Nadpis stránky*/}
      <PublicationTypeLoad/>{/*Načtení typů publikací*/}
      <PublicationLoad/>{/*Načtení publikací*/}
    </div>
  );
}

export default App;
