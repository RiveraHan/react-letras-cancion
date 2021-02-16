import React, {Fragment} from 'react';
import ProPTypes from 'prop-types';

const Cancion = ({letra}) =>  {

    if(letra.length === 0) return null;

    return ( 
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    );

}
    
Cancion.propTypes = {
    letra: ProPTypes.string.isRequired
}
 
export default Cancion;