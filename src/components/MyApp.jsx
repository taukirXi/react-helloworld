import React from 'react';
import ReactDOM from 'react-dom';

import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';


class MyApp extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Navbar />
                <MainContent />
                <Footer />

                           
            </div>
         );
    }
}
 
export default MyApp;