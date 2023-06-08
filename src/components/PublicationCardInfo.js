//část karty publikace, informace o publikaci
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