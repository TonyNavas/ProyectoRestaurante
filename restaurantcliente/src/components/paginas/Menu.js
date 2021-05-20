    import React, {useState, useEffect, useContext} from 'react';
    import { Link } from "react-router-dom";
    import {FirebaseContext} from '../../firebase';
    import Platillo from '../ui/Platillo'

    const Menu = () => {
    
    //Definir el state para los platillos
    const [platillos, guardarPlatillos] = useState([]);

    const {firebase} = useContext(FirebaseContext);

    //Consultar la base de datos al cargar
    useEffect(() =>{
    const obtenerPlatillos = () =>{
    firebase.db.collection('productos').onSnapshot(manejarSnapshot)

    }
    obtenerPlatillos();
    }, []);

    //Snapshot nos permite utilizar la base de datos en tiempo real de firestore

    function manejarSnapshot(snapshot){
    const platillos = snapshot.docs.map(doc =>{
        return{
            id: doc.id,
            ...doc.data()
        }
    });
    //Almacenar los resultados en el estate
    guardarPlatillos(platillos);
    }

    return ( 
    <>
    <h1 className="text-3xl font-light mb-4">Menu</h1>
    <Link to="/nuevo-platillo" className="bg-blue-800 hover:bg-black inline-block mb-5 p-2 text-white font-bold">
    <p>Agregar nuevo platillo</p>
    </Link>
    {platillos.map(platillo =>(
        <Platillo
            key={platillo.id}
            platillo={platillo}
        />
    ))}
    </>
    );
    }   
        export default Menu;