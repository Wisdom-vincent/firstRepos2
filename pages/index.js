 import Favourite from "./api/favourite"
 import React from "react"
 import Tools from "./api/tools"
 import Todo from "./todo"


export default function Home(){
  return(
      <div>
      <h1> wow! my first react projact</h1>
      <h2>my love react</h2>
      <ul>
      <li>it is reusabel</li>
      <li>it is Easy to use</li>
      <li> it is Easy to learn and the community is wide</li>
       <Favourite name='wisdom' />
      </ul>
   
    
      < Tools  name='wisdom'
        skills1='html'
        skills2='css'
        skills3= 'Bootstrap'
        skills4='copy and pest'
      />

<h1> my todo's fortoday </h1>
      <Todo props='learn usestate'/>
       <Todo props='learn lisk'/>
       <Todo props='learn condition rendering'/>

      </div>

  )
}
