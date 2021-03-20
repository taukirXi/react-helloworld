import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import MainContent from './MainContent.jsx';
class MyApp extends React.Component {
    
    render() { 
        return ( 
            <div>
                < Header />
                <MainContent />

                           
            </div>
         );
    }
}
 
export default MyApp;