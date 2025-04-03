import React from 'react'
import Card from './components/card'

const App = () => {

  const data = [
    {
      song: "https://plus.unsplash.com/premium_photo-1679785652916-e9a21364ce89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxidW0lMjBzb25nfGVufDB8fDB8fHww",
      songName: "Blinding Lights",
      artist: "The Weeknd",
      favorite: false
    },
    {
      song: "https://images.unsplash.com/photo-1583927109257-f21c74dd0c3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsYnVtJTIwc29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      songName: "Levitating",
      artist: "Dua Lipa",
      favorite: false
    },
    {
      song: "https://images.unsplash.com/photo-1585115651099-dd855cb058fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFsYnVtJTIwc29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      songName: "Shape of You",
      artist: "Ed Sheeran",
      favorite: false
    },
    {
      song: "https://images.unsplash.com/photo-1669335596758-4437aef2d612?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFsYnVtJTIwc29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      songName: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      favorite: false
    },
    {
      song: "https://images.unsplash.com/photo-1736363375585-3589a77343ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFsYnVtJTIwc29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      songName: "Bad Habits",
      artist: "Ed Sheeran",
      favorite: false
    },
    {
      song: "https://images.unsplash.com/photo-1709194796140-c2c958031970?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsYnVtJTIwc29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      songName: "Peaches",
      artist: "Justin Bieber",
      favorite: false
    },
    {
      song: "https://plus.unsplash.com/premium_photo-1682125819437-82a7212ee928?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFsYnVtfGVufDB8fDB8fHww",
      songName: "Watermelon Sugar",
      artist: "Harry Styles",
      favorite: false
    },
    {
      song: "song8.https://plus.unsplash.com/premium_photo-1697945800303-2be12402095e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxidW18ZW58MHx8MHx8fDA%3D",
      songName: "Save Your Tears",
      artist: "The Weeknd",
      favorite: false
    },
    {
      song: "https://plus.unsplash.com/premium_photo-1682125896993-12a1758b6cb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsYnVtfGVufDB8fDB8fHww",
      songName: "Good 4 U",
      artist: "Olivia Rodrigo",
      favorite: false
    },
    {
      song: "https://images.unsplash.com/photo-1605286111427-67133b091012?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFsYnVtfGVufDB8fDB8fHww",
      songName: "Montero (Call Me By )",
      artist: "Lil Nas X",
      favorite: false
    }
  ];
  
  


  return (
    <div>
           <Card/>

    </div>
   
  )
}

export default App