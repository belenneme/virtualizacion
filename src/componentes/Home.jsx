import React , { useEffect, useState }from 'react';
import Perfil from '../img/perfil.png';
import '../css/navbar.css';
import Pdf from '../doc/TrabajoFinal.pdf';

export default function Home() {

    const [lista, setLista] = useState({
        datos: [],
        error: null,
        loading: true,
      });
    
    useEffect(() => {
        getUsuarios();
    }, []);

    const getUsuarios = async() => {
        try {
            const resp = await fetch("http://192.168.88.165:3008/usuarios", {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                },
              });
            
            const data = await resp.json()
            return setLista({
                datos: data.usuarios,
                loading: false,
                error: null,
              });
        } catch (error) {
            return setLista({
                datos: {},
                loading: false,
                error: error,
              });
        }
    }

    return (
        <>
          {lista.datos.map((user) => {
            return(
            <div className="d-flex justify-content-center align-items-center my-5">
              <div key={user._id} className="col-md-8 mt-5 mb-5 d-flex justify-content-center align-items-center">
                <div className="card card-multicolor">
                  <div className="row no-gutters d-flex justify-content-center">
                    <div className="col-10 col-md-8">
                      <div className="card-body">
                        <h3 className="card-title text-center mt-3 mb-5">¡Bienvenidos a mi blog!</h3>
                        <h5 className="card-title mt-5">Nombre: {user.nombre}</h5>
                        <h5 className="card-title mt-2">Apellido: {user.apellido}</h5>
                        <h5 className="card-text mt-2"> Email: {user.email}</h5>
                        <h5 className="card-title mt-2">Legajo: {user.legajo}</h5>
                        <h5 className="card-title mt-2">Carrera: {user.carrera}</h5>
                      </div>
                    </div>
                    <div className="col-10 col-md-4 d-flex justify-content-center align-items-center">
                      <img src={Perfil} className="BadgesListItem__avatar p-2 mt-2 img-fluid" alt="avatar usuario" />
                    </div>
                    <div className='my-2'>
                        <a href={Pdf} target="_blank" download="trabajo_final_Neme_Maria_Belen_42215.pdf">
                            <button className= "btn-dark" type="button">Descargar Trabajo Final</button> 
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </>
      );
}





