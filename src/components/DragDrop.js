
	// import { render } from 'react-dom'
	import React,{useContext  } from "react";
	import Example from './example'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'
  import data from "../components/allData"
  import {GlobalContext} from "./GlobalContext/globalContext"

	function App() {
		const {selectedOptions,addTransaction}=useContext(GlobalContext)
		const add=()=>{
             addTransaction({s:"syunajhn"})
		}
		console.log(data)
		return (
			<div className="App">
				<DndProvider backend={HTML5Backend}>
					<Example />
					{/* <button onClick={add}>Next</button> */}
				</DndProvider>
			</div>
		)
	}

	export default App
