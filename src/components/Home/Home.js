import { Link } from "react-router-dom"
import Hero from "../Hero/Hero"
import "./Home.css"

const heroBgImage = "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"

export default function Home({ user, isFetching, nutrition, addPost, error }) {
  return (
    <div className="Home">
      <Hero bgImage = {heroBgImage} />
      <div className="about">
        <h1 className="intro">Helping you take back control of your world</h1>
      </div>
      <div className="btnArea">
        <Link to="/exercise"><button>Fitness</button></Link>
        <Link to="/nutrition"><button>Food</button></Link>
        <Link to="/sleep"><button>Rest</button></Link>
        <Link to="/"><button>Planner</button></Link>
      </div>



    </div>
  )
}
