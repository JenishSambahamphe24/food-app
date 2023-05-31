import '../style.css'
import {Link} from 'react-router-dom'



export default function Navbar() {
  return (
    <div>
        <div className='nav-section'>
        <p className='heading'>
          Our Menu
        </p>
        <div className='nav-items'>
          <ul>
            <li>
              <button><Link to='/'>ALL</Link></button>
            </li>
            <li>
              <button><Link to='/lunch'>Lunch</Link></button>
            </li>
            <li>
              <button><Link to="/breakfast">Brekfast</Link></button>
            </li>
            <li>
              <button><a href="/shakes">Shakes</a></button>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}
