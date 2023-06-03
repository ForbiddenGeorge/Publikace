//část karty publikace, info o publikaci
function PublicationCardInfo(publication){
    return(
        <div className="panel">
        <p>Datum zveřejnění: {publication.publishedDate}</p>
        <p>Článek: {publication.publicationtype.name}</p>
        <p>Poslední změna: {publication.lastchange}</p>
      </div>
    )
}
export default PublicationCardInfo;