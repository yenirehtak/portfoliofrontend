import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [clave, setClave] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:8080/login', {email, clave})
        .then(result => {
            console.log(result);
            if(result.data === "Exitoso"){
                console.log("Inicio de sesión exitoso");
                alert('Inicio de sesión exitoso!')
                navigate('/home'); // pagina de inicio 
            }
            else{
                alert('Contraseña incorrecta.');
            }
        })
        .catch(err => console.log(err));
    }

    return(
            <div className="home-register-elements vh-100">
          <div className="new-color p-3 rounded w-25">
            <h2>Inicio de sesión</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Correo electronico</strong>
                </label>
                <input
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Contraseña</strong>
                </label>
                <input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  className="form-control rounded-0"
                  onChange={(e) => setClave(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                Iniciar sesión
              </button>
              </form>
              <p>Ya tengo una cuenta</p>
              <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                Registrarse
              </Link>
            
          </div>
        </div>
        )
    }
    
export default Login;