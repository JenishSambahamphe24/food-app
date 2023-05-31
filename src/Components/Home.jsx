import { useContext } from 'react'
import '../style.css'
import { FoodContext } from '../FoodContext'

export default function Home() {
  const {foodItems} = useContext(FoodContext);
  console.log(foodItems[1].name)
  console.log(foodItems.image)

  return (
    <>
      <div className="food-items">
        {foodItems.map((fooditem, index) => (
          <div className='card' key={index}>
            <img src={fooditem.image} alt="" />
            <div className="card-info">
              <p>{fooditem.name}</p>
              <div className='price'>
                <p>{fooditem.price}</p>
              </div>
            </div>
            <p className='description'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur placeat qui excepturi inventore sapiente voluptatibus odio blanditiis ullam aut, iure minima, optio quam nihil. Omnis animi ullam fuga ducimus a.
            </p>
          </div>
        ))}
      </div>
      </>
  )
}
