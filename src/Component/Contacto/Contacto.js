import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Contacto.css'

function Contacto() {
    const [socials, setSocials] = useState({});
    useEffect( () =>
    {
        axios.get('https://portfolio-backend-api-1zje.onrender.com/contacto')
        .then (
            res => setSocials(res.data)
        )
    }, [setSocials])
    return(
        <> 
        <div className='socials-card'>
        <h1>Ponte en contacto conmigo: </h1>
            {socials.length > 0 && socials.map((social, index) =>
                <a className='hiperlink-social' href={social.link}><img className="logo-social" alt="logo-social" src={social.social}></img>
                </a>
               )}
        </div>
        <div class="footer">CopyRight © 2024 Katherine Castro. All Rights Reserved</div>
        </> 
    )
}; 
export default Contacto;
