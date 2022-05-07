
import "./navbar.scss"
import { Email } from "@material-ui/icons"

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Emanuel</a>
          <div className="itemContainer">
            <Email className="icon"></Email>
            <span>emanuelsilvalopez@gmail.com</span>
          </div>
          <div className="itemContainer nav-container">
            <ul>
              <li><a className="nav-link logo" href="#intro">About Me</a></li>
            </ul>
            <ul>
              <li><a className="nav-link logo" href="#portfolio">Portfolio</a></li>
            </ul>
            <ul>
              <li><a className="nav-link logo" href="#contact">Contact Me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
