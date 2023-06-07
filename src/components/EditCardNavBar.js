import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import EditCardNavBarAddAuthor from './EditCardNavBarAddAuthor';
import EditCardNavBarChangeContribution from './EditCardNavBarChangeContribution';
import EditCardNavBarOrderOfAuthors from './EditCardNavBarOrderOfAuthors';
import EditCardNavBarEditInfo from './EditCardNavBarEditInfo';
function EditCardNavBar(publicationId){
return(
    <div className="card text-center ">
        <div className="card-header bg-light text-dark">
            <ul className="nav nav-tabs card-header-tabs " id="myTab">
                <li className="nav-item">
                    <a href="#AddAuthor" className="nav-link active text-bg-light" data-bs-toggle="tab">Přidání uživatele</a>
                </li>
                <li className="nav-item">
                    <a href="#OrderOfAuthors" className="nav-link text-bg-light" data-bs-toggle="tab">Pořadí autorů</a>
                </li>
                <li className="nav-item">
                    <a href="#ChangeOfContribution" className="nav-link text-bg-light" data-bs-toggle="tab" >Změna podílu</a>
                </li>
                <li className="nav-item">
                    <a href="#Acreditation" className="nav-link text-bg-light" data-bs-toggle="tab" >Informace o publikaci</a>
                </li>
            </ul>
        </div>
        <div className="card-body">
            <div className="tab-content">
                <div className="tab-pane fade show active" id="AddAuthor">
                    <EditCardNavBarAddAuthor publicationId={publicationId}/>
                </div>
                <div className="tab-pane fade" id="OrderOfAuthors">
                    <EditCardNavBarOrderOfAuthors/>
                </div>
                <div className="tab-pane fade" id="ChangeOfContribution">
                    <EditCardNavBarChangeContribution publicationId={publicationId}/>
                </div>
                <div className="tab-pane fade" id="Acreditation">
                   <EditCardNavBarEditInfo publicationId={publicationId}/>
                </div>

            </div>
        </div>
    </div>
)
}

export default EditCardNavBar;
