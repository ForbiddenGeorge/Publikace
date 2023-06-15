/*import { useDispatch } from 'react-redux';
import { loadData } from 'features/PublicationSlice';
import { useEffect, useState } from 'react';*/
import React, { useState } from "react";
import EditCardNavBarAddAuthorSelect from './EditCardNavBarAddAuthorSelect';
import { AddAuthorButton } from "actions/AddAuthorButton";
import { useSelector } from "react-redux";

function EditCardNavBarAddAuthor({publicationId}) {
    //Tělo jedné karty, volám samotný select
    const users = useSelector((state) =>state.users);
    const [selectedAuthor, setSelectedAuthor] = useState()
    const onselect = (author) => {
        setSelectedAuthor(author)

    }
    return (
        <div className="container-fluid">
            <div className="header mb-5">
                <h3>Přídáni autora k publikaci</h3>
            </div>
                <EditCardNavBarAddAuthorSelect publicationId={publicationId} onselect={onselect}/>
                {selectedAuthor?
                <AddAuthorButton selectedUserId={selectedAuthor} selectedPublicationId={publicationId} AuthorNumber={users.length+1}/>:""}  {/*ŠTEFEK*/}
            </div>
    )
}

export default EditCardNavBarAddAuthor;