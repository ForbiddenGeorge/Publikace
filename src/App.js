
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  PublicationLoad  from 'components/PublicationLoad';
import TopHeader from 'components/TopHeader';
import AddPublication from 'actions/AddPublicationButton';
//Vytvořit button, modal na přidání publikací, autory tam přidávat nebudeme, maximálně že bychom nějak využili ty komponenty co už máme
function App() {
  return (
    // update
    <div className="App">
      <TopHeader/>
      <AddPublication/>
      <PublicationLoad/>
    </div>
  );
}

export default App;
