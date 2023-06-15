//část karty publikace, seznam autorů a jejich informací
function PublicationCardAuthors({author}){      {/*ŠTEFEK*/} {/*Nejsem si jistý jestli tohle upravoval nebo to už takhle bylo*/}
    return(
        <div>
            <h5>{author.user.name} {author.user.surname}</h5>
            <p>Email: {author.user.email}</p>
            <p>Podíl: {author.share}</p>
        </div>
    )
}
export default PublicationCardAuthors;