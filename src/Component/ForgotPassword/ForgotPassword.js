import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function ForgotPassword() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/forgot-password', {email})
        .then(res => {
            if(res.data.Status === "Exitoso") {
                navigate('/login')
               
            }
        }).catch(err => console.log(err))
    }

    return(
        <div className="forgot-pass-elements vh-100">
      <div className="new-color p-3 rounded w-25">
        <h4>Olvidé mi clave</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Correo electrónico</strong>
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
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Enviar codigo
          </button>
          </form>
        
      </div>
    </div>
    )
}

export default ForgotPassword;