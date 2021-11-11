import  React,{ memo ,useState,useEffect,useContext} from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import {GlobalContext} from "./GlobalContext/globalContext"
const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
export const Dustbin = memo(function Dustbin({ accept, lastDroppedItem, onDrop,val,setDust }) {
    // console.log(setDust,"value : ",val);
    let [counter,setCounter]=useState(0)
    let [ans1,setAns1]=useState()
    const {selectedOptions,addTransaction}=useContext(GlobalContext)
    console.log("data : glocbal wala  ",selectedOptions)
   console.log('last dropped item : ',lastDroppedItem)
    const [{ isOver, canDrop  }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
        // setAns1(lastDroppedItem)
        // addTransaction({l:"subha",s:"akbar"})
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    // if(lastDroppedItem){
    //     setCounter(p=>p+1)
    //     console.log(counter,"counter")
    // }
useEffect(() => {
    
   const T=()=>{
    if(lastDroppedItem){
        console.log("item",lastDroppedItem.name)
        if(lastDroppedItem.name==val){
           backgroundColor="green";
           addTransaction({win:lastDroppedItem.name})
        //    setCounter(p=>p+1)
        //        console.log(counter,"counter")
                 
         }
        else{
            
            //  dropItem.push(val)
            setCounter(p=>p+1)
            console.log(counter,"counter")
            backgroundColor="red"
            addTransaction({lost:lastDroppedItem.name})
     
          
        }
       
        if(counter[0]==3){
          setDust[1](
              [ { accepts: [ItemTypes.PAPER], lastDroppedItem: null,value:"Bottle" }]
          )
        }
    }else{

    }
   }
    return T()
    
}, [lastDroppedItem])
 

   
    return (<div ref={drop} role="Dustbin" style={{ ...style, backgroundColor }}>
			{isActive
            ? 'Release to drop'
            : `This dustbin accepts: ${accept.join(', ')}`}

			{lastDroppedItem && (<p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>)}
          
		</div>);
});
