import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from 'axios';
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:8080/register', { nombre, email, clave })
            .then(result => {
                console.log(result);
                if (result.data === "Está registrado") {
                    alert("El correo ya está registrado! Por favor inicia sesión.");
                    navigate('/login');
                } else {
                    alert("Registro exitoso!");
                    navigate('/login');
                }
                
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="home-register-elements vh-100">
            <div className="new-color p-3 rounded w-25">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre">
                            <strong>Nombre</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Ingrese su nombre"
                            autoComplete="off"
                            id="nombre"
                            name="nombre"
                            className="form-control rounded-0"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Ingrese su correo"
                            autoComplete="off"
                            id="email"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Contraseña</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Ingrese su contraseña"
                            id="password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setClave(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">Registrarse</button>
                </form>
                <p>Ya tengo una cuenta</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Iniciar sesión
                </Link>
                <Link to="/forgot-password" className='forgot-pass-element'>Olvidé mi clave</Link>
            </div>
        </div>
    );
}

export default SignUp;