//Třeba modifikovaat na nekonečný počet publikací, ne tvrdě vypisovat
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  PublicationLoad  from 'components/PublicationLoad';
import TopHeader from 'components/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <PublicationLoad/>
    </div>
  );
}

export default App;
