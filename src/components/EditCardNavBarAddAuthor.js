//Tady přidávám autora k publikaci
//Udělat tam select dropdown, stáhnout si UserPageQuery a tu tam zobrazit, uživatel si vybere a ta se přidá
//Select bude nová komponenta, kde bude i ta query, bude to přehlednější
//Přidat button bude taky nová komponenta, kde bude ta fetch funkce a všechno, udělám to asi do nové složky "actions" jak dělá Danda
//budou tam všechny ty mutační buttony
//Podíl se bude řešit v dalším okně

//importy pro funkcionalitu

/*import { useDispatch } from 'react-redux';
import { loadData } from 'features/PublicationSlice';
import { useEffect, useState } from 'react';*/
import React from "react";
//importy pro seznam
import EditCardNavBarAddAuthorSelect from './EditCardNavBarAddAuthorSelect';

function EditCardNavBarAddAuthor(publicationId) {

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