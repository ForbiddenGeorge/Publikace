import React, { useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import EditCardNavBar from './EditCardNavBar';

function EditCard({onClose, publicationId}) {
  /**
   * Komponenta pro editaci karty publikace.
   *
   * Parametry:
   * - onClose (funkce): Funkce pro zavření komponenty.
   * - publicationId (string): ID publikace.
   */

    const buttonRef = useRef(null); //Potřeba pro znovuzapnutí modalu z jiné komponenty

  useEffect(() => {
    const tlacidlo = document.getElementById('EditButtonMain');
    if(tlacidlo) {
        tlacidlo.style.display = "block";
    }
    buttonRef.current.click();
    return () => {
        const tlacidlo = document.getElementById('EditButtonMain');
        if (tlacidlo) {
          tlacidlo.style.display = 'none';
        }
    }
  }, []);

  const handleButtonClick = () => { //zavře se modal a pošle se signál do nadřazené komponenty aby se schoval
      /**
     * Funkce pro obsluhu kliknutí na tlačítko pro zavření modálního okna.
     */ 
    onClose();
    //window.location.reload();
  };

  return (
    <div className="modal-container">
      {/*skrytý button funkčnost modalu */}
    <button ref={buttonRef} type="button" className="btn btn-primary bg-light" data-bs-toggle="modal" data-bs-target="#myModal" id='EditButtonMain'></button>
    {/*Tělo modalu*/}
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/*Obsah modalu, Navbar, který v sobě má jednotlivé komponenty */}
          <EditCardNavBar publicationId={publicationId}/>
          <div className="modal-footer">
            {/*Button pro skrytí modalu*/}
            <button type="button" className="btn bg-success text-white" data-bs-dismiss="modal" onClick={handleButtonClick}>Zavřít</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default EditCard;
