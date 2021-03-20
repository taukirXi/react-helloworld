import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx'

class MyApp extends React.Component {
    
    render() { 
        return ( 
            <div>
                < Header />
                <MainContent />
                <Footer />

                           
            </div>
         );
    }
}
 
export default MyApp;