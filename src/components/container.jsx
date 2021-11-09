import { useState, useCallback, memo } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Dustbin } from './Dustbin';
import { Box } from './Box';
import { ItemTypes } from './ItemTypes';
import update from 'immutability-helper';
export const Container = memo(function Container() {
    const dustbins = useState([
        { accepts: [ItemTypes.GLASS,ItemTypes.FOOD,ItemTypes.PAPER], lastDroppedItem: null,value:"Bottle" },
        { accepts: [ItemTypes.GLASS,ItemTypes.FOOD,ItemTypes.PAPER], lastDroppedItem: null,value:"Banana"  },
        {
            accepts: [ItemTypes.GLASS,ItemTypes.FOOD,ItemTypes.PAPER],
            lastDroppedItem: null,value:"Magazine" 
        },
        
    ]);
    const boxes = useState([
        { name: 'Bottle', type: ItemTypes.GLASS },
        { name: 'Banana', type: ItemTypes.FOOD },
        { name: 'Magazine', type: ItemTypes.PAPER },
    ]);
    const [droppedBoxNames, setDroppedBoxNames] = useState([]);
    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1;
    }
    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
        dustbins[1](update(dustbins[0], {
            [index]: {
                lastDroppedItem: {
                    $set: item,
                },
            },
        }));
    }, [droppedBoxNames, dustbins[0]]);
    return (<div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
                {dustbins[0].map(({ accepts, lastDroppedItem,value }, index) =>

                      (<Dustbin setDust={dustbins} accept={accepts} val={value}  lastDroppedItem={lastDroppedItem} onDrop={(item) => handleDrop(index, item)} key={index}/>))
                }
              
			</div>

			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{boxes[0].map(({ name, type }, index) => (<Box box={boxes} name={name} type={type} isDropped={isDropped(name)} key={index}/>))}
			</div>
		</div>);
});
