//část karty publikace, informace o publikaci
 /**
   * Komponenta pro zobrazení informací o publikaci.
   *
   *  @param {object} publication - publikace.
   * 
   * @returns {JSX.Element} - The rendered component
   */
function PublicationCardInfo(publication){
 
    return(
        <div className="panel">
        <p>Datum zveřejnění: {publication.publishedDate}</p>
        <p>Článek: {publication.publicationtype.name}</p>
        <p>Poslední změna: {publication.lastchange}</p>
        <p>Místo: {publication.place}</p>
        <p>Reference: {publication.reference}</p>
      </div>
    )
}
export default PublicationCardInfo;