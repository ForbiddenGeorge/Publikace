//část karty publikace, jméno publikace
function PublicationCardName(publication){
    return(
              <div className="d-flex justify-content-center">
                <h3>
                  {publication.name}
                </h3>
              </div>
    )
}
export default PublicationCardName;