import { FoodContext } from "../FoodContext"
import { useContext } from "react"
import '../style.css'

export default function Lunch() {
  const {foodItems} = useContext(FoodContext);
  const lunchItems = foodItems.filter((foodItem) => foodItem.foodType === 'lunch' );
  return (
    <div>
      <div className="food-items">
        {lunchItems.map((lunchItem, index) => (
          <div className='card' key={index}>
            <img src={lunchItem.image} alt="" />
            <div className="card-info">
              <p>{lunchItem.name}</p>
              <div className='price'>
                <p>{lunchItem.price}</p>
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
