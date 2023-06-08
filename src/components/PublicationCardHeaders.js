// část karty publikace, nadpisy sloupců
function PublicationCardHeader(){
    return(
        <div className="p-2 pb-3 pt-3 mb-3 bg-success text-white">
            <div className="row">
                <div className="col-4">
                    <div className="panel">
                        <div className="panel panel-header">Název publikace</div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="panel">
                        <div className="panel panel-header">Autoři</div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="panel">
                        <div className="panel panel-header">Informace o publikaci</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PublicationCardHeader;