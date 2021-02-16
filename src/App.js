import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';

function App() {

  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;
    
    const consultaAPILetra = async () => {

      const {artista, cancion} = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letrA, informacion] = await Promise.all([
        await axios(url),
        await axios(url2)
      ]);

      setLetra(letrA.data.lyrics);
      setInfo(informacion.data.artists[0]);
      
      
      // setLetra(resultado.data.lyrics);    
    }

    consultaAPILetra();

  }, [busquedaLetra, info])

  return (
    <Fragment>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info 
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
