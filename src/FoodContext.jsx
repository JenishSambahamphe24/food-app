import { createContext, useState } from "react";

const FoodContext = createContext();
const FoodProvider = ({children})=>{
  const [foodItems,setFoodItems] = useState([
    {
        name: 'Buttermilk pancakes',
        foodType: 'breakfast',
        price: '15.99',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-1.jpeg'
      },
      {
        name: 'Diner Double',
        foodType: 'lunch',
        price: '6.99',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-2.jpeg'
  
      },
      {
        name: 'Godzilla Milkshake',
        foodType: 'shakes',
        price: '13.09',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-3.jpeg'
      },
      {
        name: 'Country Delight',
        price: '10.09',
        foodType: 'breakfast',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-4.jpeg'
      },
      {
        name: 'Egg Attack',
        foodType: 'lunch',
        price: '13.09',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-5.jpeg'
      },
      {
        name: 'Oreo cream',
        foodType: 'shakes',
        price: '5.09',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-6.jpeg'
      },
      {
        name: 'Bacon Overflow',
        foodType: 'breakfast',
        price: '8.09',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-7.jpeg'
      },
      {
        name: 'American Classic',
        foodType: 'lunch',
        price: '12.23',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-8.jpeg'
      },
      {
        name: 'Quarantine Buddy',
        foodType: 'shakes',
        price: '16.00',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ullam maiores fugit reprehenderit enim aut corporis amet sapiente voluptate eum.',
        image: '../images/item-9.jpeg'
      }
  ]
  );
  return (
    <FoodContext.Provider value={{foodItems, setFoodItems}}>
        {children}
    </FoodContext.Provider>
  )
}
export {FoodContext, FoodProvider}