import React from 'react';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contacto from './Contacto/Contacto';

class Home extends React.Component {
    render() {
        return (
         <About />,
         <Portfolio />,
         <Contacto />
        );
    }

}
export default Home;