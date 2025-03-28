import React from 'react';
import Card from './components/card';

function App(){

    return(
        <div className='flex'>

        <Card text="Know more" colour="bg-blue-500" />
        <Card text="Download" colour="bg-red-600" />
       </div>

        
    )
}

export default App;