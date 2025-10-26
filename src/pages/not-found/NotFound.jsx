import "./not-found.css"
import RightArrow from "../../assets/images/right arrow.svg";

export default function NotFound() {
  return (
    <div className="not-found-section">
        <div className="not-found-container">
            <h1>404</h1>
            <p>Hmmmm... I couldn't find that page.</p>
            <button>Go To Home Page <img src={RightArrow} alt="arrow" /></button>
        </div>
    </div>
  )
}
