import React from 'react';


// using variable
 const fname = 'bob';


 const date = new Date();
 const hours = date.getHours();
 let timeOfDay;

 if(hours < 12){
     timeOfDay = 'Good Morning';
 } else if (hours >12 && hours <17) {
     timeOfDay =  "Good afternoon";
 } else {
     timeOfDay = "Good night"
 }

class MainContent extends React.Component {

    
    render() { 
        return ( 
            <main>
                <p>Hello {timeOfDay}</p>
            </main>
         );
    }
}
 
export default MainContent;
