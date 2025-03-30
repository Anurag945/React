import React from 'react'
import Card from './components/Card'

const App = () => {
  const data =[{Name:"Anurag Sinha",profession:"Web Development", image:"https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
  {Name:"Chandler Bing",profession:"Data Analyst", image:"https://th.bing.com/th/id/OIP.YbQ23Vk_BRrw9hSF8dUC4wHaE7?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {Name:"Joey Trribiani",profession:"Actor", image:"https://th.bing.com/th/id/OIP.wTiXV7cM3I6ijRQbisbUiAHaEl?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {Name:"Racheal Green",profession:"Sr.Sales Executive", image:"https://th.bing.com/th/id/OIP.33DdAqr2Edi9cvv1tm6A4gHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {Name:"Monica ",profession:"Actor", image:"https://th.bing.com/th/id/OIP.TDpzgtS8FeBHNfvnwGI-jgHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {Name:"Phoebe",profession:"Singer", image:"https://th.bing.com/th/id/OIP.vtXB6USvomNyTVW7VXjOKgHaF6?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {Name:"Ross ",profession:"proffesor", image:"https://th.bing.com/th/id/OIP.jYOboDqKkiu3TnLB9qVdcgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
]


  
  return (
    <div className='bg-zinc-200 w-full flex justify-center items-center h-screen gap-4'>
   {data.map((item,index)=>(
    <Card image={item.image} profession={item.profession} Name={item.Name}/>
    ))}
    
    
    </div>
    
  )
}

export default App