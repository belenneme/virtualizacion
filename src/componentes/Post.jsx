import React, { useEffect, useState } from 'react';
import Js from '../img/js.png';
import ReactLogo from '../img/react.png';
import HtmlLogo from '../img/html.png';
import CssLogo from '../img/css.png';
import BootstrapLogo from '../img/bootstrap.jpg';
import NodeJSLogo from '../img/node.png';
import ExpressLogo from '../img/express.png';
import MongoDBLogo from '../img/mongo.png';
import CreateContainer from '../img/createContainer.png';
import NodeInstallation from '../img/nodeInstallation.png';
import NodeInstallation2 from '../img/nodeInstallation2.png';
import GitInstallation from '../img/gitInstallation.png';
import CurlInstallation from '../img/curlInstallation.png';
import CategoriaCollection from '../img/categoriaCollection.png';
import CategoriaCollection2 from '../img/categoriaCollection2.png';
import UsuarioCollection from '../img/usuarioCollection.png';
import Pdf from '../doc/TrabajoFinal.pdf';
import '../css/footer.css';
import '../css/reviews.css'

export default function Footer() {

    const [categorias, setCategorias] = useState({
        datos: [],
        error: null,
        loading: true,
      });

    const getCategorias = async() => {
        try {
            const resp = await fetch("http://192.168.88.165:3008/categoria", {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                },
              });
            
            const data = await resp.json()
            console.log(data)
            return setCategorias({
                datos: data.categorias,
                loading: false,
                error: null,
              });
        } catch (error) {
            return setCategorias({
                datos: {},
                loading: false,
                error: error,
              });
        }
    }
/*     useEffect(() => {
        getCategorias();
    }, []); */

    return (
        <div className="container-md"> 
            <div>
                <h2 className='text-center my-2'>Virtualizacion: Consolidacion de Servidores</h2>
                <h3 className='text-center mt-2 mb-5'>Trabajo Practico Final: Caso de Estudio</h3>
                <p mt-5>Elaborar una solución de un Blog Personal que deberá contemplar los siguientes requerimientos:</p>
                <ol>
                    <li>Listar las categorías de los temas</li>
                    <li>Detallar los datos personales del Autor e incorporar la foto del mismo</li>
                    <li>El primer y único articulo deberá ser la presentación del documento correspondiente al resultado final de este trabajo practico final, adjuntando el documento (PDF) del mismo</li>
                    <li>Se deberá utilizar contenedores.  Deberán ser configurados al menos dos.  Uno con todo lo concerniente a la interfaz y otro con la base de datos</li>
                    <li>Se deberá elegir las herramientas para trabajar el lo propuesto y se deberá detallar cada una de ellas en el informe final</li>
                    <li>Se deberá realizar un detalle de los recursos utilizados por cada Contenedor (con sus respectivas categorías) e incluirlo en el informe final</li>
                </ol>
            </div>
            <div>
                <h3 className='my-4'>Tecnologias utilizadas</h3>
                <div>
                    <div>
                        <h4 className="my-4">Frontend</h4>
                        <div className='row'>
                            <div className='col-8'>
                                <h5>JavaScript</h5>
                                <p>Es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas</p>
                            </div>
                            <div className='col-4'>
                                <img className ="Post_Img img-fluid" src={Js} alt="logo-js" />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='col-8'>
                                <h5>React</h5>
                                <p>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página</p>
                            </div>
                            <div className='col-4'>
                                <img  className ="Post_Img img-fluid" src={ReactLogo} alt="logo-react" />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='col-8'>
                                <h5>HTML5</h5>
                                <p>HTML es un lenguaje de marcado que nos permite indicar la estructura de nuestro documento mediante etiquetas. Este lenguaje nos ofrece una gran adaptabilidad, una estructuración lógica y es fácil de interpre­tar tanto por humanos como por máquinas.</p></div>
                            <div className='col-4'>
                                <img className ="Post_Img img-fluid" src={HtmlLogo} alt="logo-html" />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='col-8'>
                                <h5>CSS</h5>
                                <p>en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado</p>
                            </div>
                            <div className='col-4'>
                                <img className ="Post_Img img-fluid" src={CssLogo} alt="logo-css" />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='col-8'>
                                <h5>Bootstrap</h5>
                                <p>Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.</p>
                            </div>
                            <div className='col-4'>
                                <img className ="Post_Img img-fluid" src={BootstrapLogo} alt="logo-bootstrap" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h4 className="my-4">Backend</h4>
                        <div className='row'>
                            <div className='col-8'>
                                <h5>NodeJS</h5>
                                <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google</p>
                            </div>
                            <div className='col-4'>
                                <img className ="Post_Img img-fluid" src={NodeJSLogo} alt="logo-nodeJS" />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='col-8'>
                                <h5>Express</h5>
                                <p>Express.js o simplemente Express, es un entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs</p>
                            </div>
                            <div className='col-4'>
                                <img  className ="Post_Img img-fluid" src={ExpressLogo} alt="logo-express" />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='col-8'>
                                <h5>MongoDB</h5>
                                <p>Es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida</p>
                            </div>
                            <div className='col-4'>
                                <img className ="Post_Img img-fluid" src={MongoDBLogo} alt="logo-mongoDB" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4>Pasos de la implementacion</h4>
                <div className='mt-5'>
                    <h5 className="mt-3 mb-4">Creacion de contenedores</h5>
                    <div className='row'>
                        <div className='col-6'>
                            <p>Se realizo la creacion de dos contenedores utilizando la plataforma de Proxmox. Uno de ellos para ser utilizado para el frontend y otro para dar soporte al backend. En ambos contenedores se instalo Ubuntu 20.4 como sistema operativo.</p>
                        </div>
                        <div className='col-6'>
                            <img className= "img-fluid" src={CreateContainer} alt="create-container" />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <h5>Caracteristicas de los contenedores</h5>
                        </div>
                        <div className='col-12'>
                            <div className='row'>
                            {/* {categorias.datos.map((categoria) => { */}
                                {/* return( */}
                                <div className='col-6 my-5'>
                                    <div className="card card-multicolor">
                                        <div className="row no-gutters d-flex justify-content-center">
                                            <div className="col-10 col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-text text-center mt-2 mb-1">Detalles del Contenedor</h5>
                                                    <h5 className="card-text mt-2">Nombre: 39698637db</h5>
                                                    <h5 className="card-text mt-2">CPU: 1 nucleo</h5>
                                                    <h5 className="card-text mt-2">Memoria: 512 MB</h5>
                                                    <h5 className="card-text mt-2">Almacenamiento: 4 GB</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 my-5'>
                                    <div className="card card-multicolor">
                                        <div className="row no-gutters d-flex justify-content-center">
                                            <div className="col-10 col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-text text-center mt-2 mb-1">Detalles del Contenedor</h5>
                                                    <h5 className="card-text mt-2">Nombre: 39698637i</h5>
                                                    <h5 className="card-text mt-2">CPU: 1 nucleo</h5>
                                                    <h5 className="card-text mt-2">Memoria: 512 MB</h5>
                                                    <h5 className="card-text mt-2">Almacenamiento: 2 GB</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ); */}
                            {/* })} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h5>Instalaciones de programas en contenedor para Backend</h5>
                    <div className='row'>
                        <div className='col-6'>
                            <ol className='my-2'>
                                <li className='my-2'>Se realizo la instalacion del comando curl</li>
                                    <ul>
                                        <li>apt install curl</li>
                                    </ul>
                                <li className='my-2'>Se realizo la instalacion de node con las siguientes instrucciones</li>
                                    <ul>
                                        <li>curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh</li>
                                        <li>nano nodesource_setup.sh</li>
                                        <li>bash nodesource_setup.sh</li>
                                        <li>apt install nodejs</li>
                                    </ul>
                                <li className='my-2'>Se realizo la instalacion de mongoDB para el manejo de la base de datos</li>
                                    <ul>
                                        <li>curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -</li>
                                        <li>echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list</li>
                                        <li>apt update</li>
                                        <li>apt install mongodb-org</li>
                                        <li>se inicializo el servicio de mongo db con "systemctl start mongod"</li>
                                        <li>se realizo la creacion de la base de datos con "use virtualizacion"</li>
                                        <li>se realizo la creacion de dos tablas o colleciones con el comando "db.createCollection("usuarios") y db.createCollection("categorias")"</li>
                                        <li>se añadieron los registros correspondientes en cada tabla</li>
                                    </ul>
                                <li className='my-2'>Se realizo la instalacion de git para poder clonar el proyecto donde tenemos alojada nuestra API que permitira la conexion a la DB</li>
                                    <ul>
                                        <li>apt install git</li>
                                    </ul>
                            </ol>
                        </div>
                        <div className='col-6'>
                            <img className="img-fluid my-2" src={CurlInstallation} alt="steps-node" />
                            <img className="img-fluid my-2" src={NodeInstallation2} alt="steps-node" />
                            <img className="img-fluid my-2" src={CategoriaCollection} alt="steps-node" />
                            <img className="img-fluid my-2" src={CategoriaCollection2} alt="steps-node" />
                            <img className="img-fluid my-2" src={UsuarioCollection} alt="steps-node" />
                        </div>
                    </div>
                </div>
                <div className='my-3'>
                    <h5>Instalaciones de programas en contenedor para Frontend</h5>
                    <div className='row'>
                        <div className='col-6'>
                        <ol className='my-2'>
                                <li className='my-2'>Se realizo la instalacion del comando curl</li>
                                    <ul>
                                        <li>apt install curl</li>
                                    </ul>
                                <li className='my-2'>Se realizo la instalacion de node con las siguientes instrucciones</li>
                                    <ul>
                                        <li>curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh</li>
                                        <li>nano nodesource_setup.sh</li>
                                        <li>bash nodesource_setup.sh</li>
                                        <li>apt install nodejs</li>
                                    </ul>
                                <li className='my-2'>Se realizo la instalacion de git para poder clonar el proyecto donde tenemos alojada nuestra API que permitira la conexion a la DB</li>
                                    <ul>
                                        <li>apt install git</li>
                                    </ul>
                            </ol>
                        </div>
                        <div className='col-6'>
                            <img className="img-fluid my-2" src={NodeInstallation} alt="steps-node" />
                            <img className="img-fluid my-2" src={GitInstallation} alt="steps-node" />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h5>Prueba y Ejecucion</h5>
                    <p>Desde nuestro contenedor de la Base de Datos, realizamos las siguientes instrucciones:</p>
                    <ol>
                        <li>Clonamos el proyecto donde tenemos alojada nuestra API con el comando "git clone"</li>
                        <li>Una vez clonado el proyecto, accedemos al mismo y ejecutamos "npm install" para descargar todas las dependencias necesarias</li>
                        <li>Para levantar la API, ejecutamos "npm start"</li>
                    </ol>
                    <p>Desde nuestro contenedor dedicado a la interfaz, realizamos las siguientes instrucciones:</p>
                    <ol>
                        <li>Clonamos el proyecto donde tenemos alojada nuestro frontend con el comando "git clone"</li>
                        <li>Una vez clonado el proyecto, accedemos al mismo y ejecutamos "npm install" para descargar todas las dependencias necesarias</li>
                        <li>Para levantar la API, ejecutamos "npm start"</li>
                        <li>Accedemos a la ip publica del mismo (http://bejuca.hopto.org:11029/), y debemos comprobar que el blog se encuentra en servicio</li>
                    </ol>
                </div>
            </div>
            <div>
                <a href={Pdf} target="_blank" download="trabajo_final_Neme_Maria_Belen_42215.pdf">
                    <button className= "btn-dark" type="button">Descargar Trabajo Final</button> 
                </a>
            </div>
        </div>
    )
}
