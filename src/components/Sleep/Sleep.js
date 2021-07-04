import NotAllowed from "../NotAllowed/NotAllowed"
import "./Sleep.css"

export default function Sleep({ user }) {

    return (
        <div className="sleep">
            <h1 className="intro">Sleep</h1>  
            <div className="feed">
            {user?.email ? (
                <>
                    <h2>Sleep Log</h2>  
                    <p>Add sleep content here</p>
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
  
