/*import { useDispatch } from 'react-redux';
import { loadData } from 'features/PublicationSlice';
import { useEffect, useState } from 'react';*/
import React from "react";
import EditCardNavBarAddAuthorSelect from './EditCardNavBarAddAuthorSelect';

function EditCardNavBarAddAuthor(publicationId) {
     /**
   * Tělo jedné karty, která zobrazuje formulář pro přidání autora k publikaci.
   *
   * Parametry:
   * - publicationId (string): ID publikace.
   */
    //Tělo jedné karty, volám samotný select
    return (
        <div className="container-fluid">
            <div className="header mb-5">
                <h3>Přídáni autora k publikaci</h3>
            </div>
                <EditCardNavBarAddAuthorSelect publicationId={publicationId}/>
               </div>
    )


}

export default EditCardNavBarAddAuthor;