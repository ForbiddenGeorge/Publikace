import { useSelector } from "react-redux";
//OKOMENTUJE KÁVÍČ
function EditCardNavBarEditInfo({ publicationId }) {
    const publications = useSelector((state) => state.publications);
    const selectedPublication = publications.find((publication) => publication.id === publicationId.publicationId);
    console.log("Ta moje publikace ", selectedPublication);

    //selectedPublication tam máš tu přesnou publikací s kterou budeš pracovat
    //Doporučuji používat <input> ať ty informace o publikaci může uživatel dobře měnit
    //mutaci myslím posílal štefek v mailu
    //To že se data fetchují dvakrát(dvakrát ten samý log) neřeš
    //dal jsem ti tam jen příklad jak to může fungovat, ale udělej to tak jak uznáš za vzhodné
    //aby jsi mohl psát do input, musí mít každý input onChange(dal jsem to do komentáře) funkci,
    //která bude průběžně ukládat ta data do proměnných, teď to dělal Kuba Křivohlávek, tak se ho můžeš kdyžtak zeptat
    //Tohle jsou jen rady, můžeš to udělat jak chceš ty
    return (
        <div className="container">
            <div>
                <label htmlFor="test" className="m-3">Jméno publikace</label>
            <input /*onChange={TadyBudeFunkceCoBudeUkladatZmeny}*/ value={selectedPublication.name} id="test"></input>
            </div>
            
            <button type="button" className="btn bg-success text-white">Uložit</button>
        </div>
    );
}

export default EditCardNavBarEditInfo;