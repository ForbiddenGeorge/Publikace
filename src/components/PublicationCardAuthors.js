//část karty publikace, seznam autorů a jejich informací
  /**
   * Komponenta pro zobrazení autorů v publikaci.
   *
   * @param {object} author - autor.
   * 
   * @returns {JSX.Element} - The rendered component
   */
function PublicationCardAuthors(author){
  
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