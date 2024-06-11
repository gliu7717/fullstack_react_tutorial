import React,{useState} from 'react';
import { useEffect } from 'react';

/*
export const CounterButton = () => {
    const [numberOfClicks, setNumberofClicks] = useState(0)
	return (
		<>
		<p>You've clicked the button {numberOfClicks} times</p>
		<button >Click me!</button>
		</>
	);
}
*/

/*
export const CounterButton = () => {
    console.log("Rendering Counter")
    const [numberOfClicks, setNumberofClicks] = useState(0)
    const onIncrement = () => setNumberofClicks(numberOfClicks + 1)

//    let numberOfClicks = 0
//    const onIncrement = () => {
//       numberOfClicks = numberOfClicks + 1
//       console.log(numberOfClicks)
//    }
   return (
		<>
		<p>You've clicked the button {numberOfClicks} times</p>
		<button onClick={onIncrement}>Click me!</button>
		</>
	);
}

*/

export const CounterButton = ({numberOfClicks, onIncrement}) => {
	useEffect(()=>{
		console.log("useEffect function called")
		return ()=> console.log("Unmounting")
	}, [numberOfClicks])   // only run when numberOfClicks changes
   return (
		<>
		<p>You've clicked the button {numberOfClicks} times</p>
		<button onClick={onIncrement}>Click me!</button>
		</>
	);
}
