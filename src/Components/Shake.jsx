import { FoodContext } from "../FoodContext"
import { useContext } from "react"
import '../style.css'

export default function Shake() {
  const {foodItems} = useContext(FoodContext);
  const shakeItems = foodItems.filter((foodItem) => foodItem.foodType === 'shakes');
  return (
    <div>
        <div className="food-items">
        {shakeItems.map((shakeItem, index) => (
          <div className='card' key={index}>
            <img src={shakeItem.image} alt="" />
            <div className="card-info">
              <p>{shakeItem.name}</p>
              <div className='price'>
                <p>{shakeItem.price}</p>
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
