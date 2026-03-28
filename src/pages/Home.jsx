import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Home</h1>
      <p>This is the home page of our demo application.</p>
      <nav>
        <Link to="/about">Go to About Page</Link>
      </nav>
    </div>
  )
}

export default Home
