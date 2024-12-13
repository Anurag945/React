import React from "react"

function Card() {

    var Data = [ 
        {image:'https://images.unsplash.com/photo-1512446816042-444d641267d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbiUyMGFuaXJ1ZGh8ZW58MHx8MHx8fDA%3D',name:'Amazon Basics',description:'Lorem Ipsum Generator lets you create Lorem Ipsum text with customizable options. You can', Instock:true},
        {image:'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWUlMjBuZWVkc3xlbnwwfHwwfHx8MA%3D%3D',name:'Home Needs',description:'Lorem Ipsum Generator lets you create Lorem Ipsum text with customizable ',Instock:false},
        {image:'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D',name:'Electronics',description:'Lorem Ipsums you create Lorem Ipsum text with customizable options. You can',Instock:true}
    ]
    return (

        <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
        {Data.map((value,index)=>
            <div key={index} className=" w-52  bg-zinc-100 rounded-md overflow-hidden">
        <div className="W-full h-32 bg-zinc-300 ">
          <img className="w-full h-full object-cover" src={value.image}></img>
        </div>
        <div>
        <div className=" w-full px-3 py-4">
        <h2 className="font-semibold">{value.name}</h2>
        <p className="text-xs mt-1">{value.description}</p>
        <button className={` ${value.Instock ?"bg-blue-500":"bg-red-600"} px-4 py-1 text-xs mt-3 rounded-sm`}>{value.Instock ? "In stock" : "out of stock"}</button>
        </div>
       </div>
       </div>
         )}

      </div>
    )
}

export default Card




