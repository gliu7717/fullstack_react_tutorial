import React from "react";
//function Greeting(){
/*export const Greeting = ()=>{
  let isMorning = (new Date()).getHours() < 12;
  return isMorning
    ?<h3>Good Morning!</h3>
    :<h3>Good Evening!</h3>
}
*/

//export const Greeting = (props)=>{
//  const {name,numberofMessage} = (props)

export const Greeting = ({name,numberofMessages})=>{
    console.log("Rendering Greeting...")
    if(!name) return null
    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
    ? <h3>Good Morning {name}</h3>
    :<h3>Good Evening {name}</h3>
    return isMorning
      ?(
        <div>
      <h3>Good Morning! {name}!</h3>
      <p>You have {numberofMessages} messages</p>
        </div>
      )
      :(
        <>
        {greetingHeader}
            {numberofMessages === 0
                ? null
                :<p>You have {numberofMessages} messages</p>
            }
      
        </>
      )
}
//export default Greeting