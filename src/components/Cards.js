
// Nombre del personaje
// Foto del personaje
// Estatus del personaje
// Especie del personaje
// Origen del personaje

function Cards(props){
    return(
    <>
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top uk-flex uk-flex-center">
                <img src={props.charactersData.image} alt=""/>
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{props.charactersData.name}</h3>
                <p>{props.charactersData.status} - {props.charactersData.species}</p>
                <p>{props.charactersData.origin.name}</p>
            </div>
        </div>
    </>
    );
}


export default Cards;


