//část karty publikace, jméno samotné publikace
 /**
   * Komponenta prozobrazení jména publikaci.
   *
   *  @param {object} publication - publikace.
   * 
   * @returns {JSX.Element} - The rendered component
   */
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