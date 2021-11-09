import  React,{ memo ,useState} from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
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
    // let [counter,setCounter]=useState(0)


    const [{ isOver, canDrop }, drop] = useDrop({
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
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    if(lastDroppedItem){
        console.log("item",lastDroppedItem.name)
        if(lastDroppedItem.name==val){
           backgroundColor="green"
          //   setCounter(counter++)
          //   console.log("counter : ",counter)
            
        }
        else{
        backgroundColor="red"
          // console.log("lose",counter)
        }
      //   console.log("i",i)
      //   if(counter==3){
      //     setDust[1](
      //         [ { accepts: [ItemTypes.PAPER], lastDroppedItem: null,value:"Bottle" },]
      //     )
      //   }
    }else{
        console.log("undone")
    }
   
    return (<div ref={drop} role="Dustbin" style={{ ...style, backgroundColor }}>
			{isActive
            ? 'Release to drop'
            : `This dustbin accepts: ${accept.join(', ')}`}

			{lastDroppedItem && (<p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>)}
		</div>);
});
