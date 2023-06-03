//Třeba modifikovaat na nekonečný počet publikací, ne tvrdě vypisovat
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublicationLoad } from 'components/PublicationLoad';
import TopHeader from 'components/TopHeader';

function App() {
  return (
    //Tady vrátíme funkci, která zavolá funkci, která stáhne data, tato nejvyšší funkce zavolá další funkci která tato data zaavede do storu,
    //nejnižší funkce následně podle storu vytvoří příslušný počet "Publication Card" karet a ty zobrazí
    //Musíme zrušit Publication Load, musí se to dělat automatikcy při spuštení stránky
    <div className="App">
      <TopHeader/>
      <PublicationLoad/>
    </div>
  );
}

export default App;
