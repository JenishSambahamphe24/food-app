import { FoodContext } from "../FoodContext"
import { useContext } from "react"
import '../style.css'

export default function Breakfast() {
    const {foodItems} = useContext(FoodContext);
  const breakFastItems = foodItems.filter((foodItem) => foodItem.foodType === 'breakfast');
  return (
    <div>
        <div className="food-items">
        {breakFastItems.map((breakfast, index) => (
          <div className='card' key={index}>
            <img src={breakfast.image} alt="" />
            <div className="card-info">
              <p>{breakfast.name}</p>
              <div className='price'>
                <p>{breakfast.price}</p>
              </div>
            </div>
            <p className='description'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur placeat qui excepturi inventore sapiente voluptatibus odio blanditiis ullam aut, iure minima, optio quam nihil. Omnis animi ullam fuga ducimus a.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
