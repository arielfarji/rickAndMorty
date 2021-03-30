import React from 'react';
import Cards from './Cards'
import Info from '../rickandmorty.json';

function Main() {
	return (

        <div className="uk-flex uk-flex-wrap uk-child-width-1-3">
            {Info.map(function(characters,idx){
                return(
                    <div key={idx} className="uk-card uk-card-default uk-card-body">
                        <Cards charactersData={characters} />
                    </div>
                )
            })}
        </div>
	);
}
export default Main;