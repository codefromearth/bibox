import {  useDrop } from 'react-dnd';
//import { ItemTypes } from './ItemTypes'; // You'll define the item types later


const DroppableArea = () => {

    const ItemTypes = {
        ITEM: 'item', // Customize the item types based on your needs
      };
      
    const [{ isOver }, drop] = useDrop({
      accept: ItemTypes.ITEM, // Specify the accepted item types
      drop: () => console.log('Item dropped!'), // Define what happens when an item is dropped
      collect: monitor => ({
        isOver: monitor.isOver(),
      }),
    });
  
    return (
      <div ref={drop} style={{ backgroundColor: isOver ? 'lightblue' : 'white' }}>
        Drop here
      </div>
    );
  };

  export default DroppableArea;
  