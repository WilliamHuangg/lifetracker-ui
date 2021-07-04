import NotAllowed from "../NotAllowed/NotAllowed"
import "./Exercise.css"

export default function Exercise({ user }) {

    return (
        <div className="exercise">
            <h1 className="intro">Exercise</h1>  
            <div className="feed">
            {user?.email ? (
                <>
                    <h2>Exercise Log</h2>  
                    <p>Add exercise content here</p>
                </>
                ) : (
                    <>
                    <NotAllowed />
                    </>
                ) }

            </div>
        </div>
    )
  }
  
