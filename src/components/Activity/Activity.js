import NotAllowed from "../NotAllowed/NotAllowed"
import "./Activity.css"

export default function Activity({ user, totalCalories }) {

    return (
        <div className="activity">
            <h1 className="intro">Activity</h1>  
            <div className="feed">
            {user?.email ? (
                <>
                    <h2>Activity Feed</h2>  
                    <div className="exerciseActivity">
                        Total Exercise Minutes:
                    </div>
                    <div className="nutritionActivity">
                        Total Calories Recorded: {totalCalories.sum}
                    </div>
                    <div className="sleepActivity">
                        Total Hours Slept:
                    </div>

                </>) : (
                    <>
                    <NotAllowed />
                    </>
                ) }

            </div>
        </div>
    )
  }
  
