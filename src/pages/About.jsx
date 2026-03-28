import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>This is the about page. Learn more about our application here.</p>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  )
}

export default About
