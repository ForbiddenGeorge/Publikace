//část karty publikace, seznam autorů a jejich informací
function PublicationCardAuthors(author){
    /**
   * Komponenta pro zobrazení autorů v publikaci.
   *
   * Parametry:
   * - author (object): autor.
   */
    return(
        <div>
            <h5>{author.user.name} {author.user.surname}</h5>
            <p>Email: {author.user.email}</p>
            <p>Podíl: {author.share}</p>
            <p>Pořadí: {author.order}</p>
        </div>
    )
}
export default PublicationCardAuthors;