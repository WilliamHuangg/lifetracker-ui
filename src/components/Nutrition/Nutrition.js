import { Link } from "react-router-dom"
// import { formatDate } from "../../utils/format"
import Post from "../Post/Post"
import NotAllowed from "../NotAllowed/NotAllowed"
// import NewPostForm from "../NewPostForm/NewPostForm"

import "./Nutrition.css"

export default function Nutrition({ user, isFetching, nutrition, addPost, error }) {

//   if (!user){
//     return <NotAllowed />
// }

    return (
      <div className="Nutrition">
        <h1 className="intro">Nutrition</h1>  

        {/* <button className="createBtn"><Link to="/nutrition/new">Record Nutrition</Link></button> */}

        {/* <NewPostForm user={user} addPost={addPost} /> */}
        <div className="feed">
          {user?.email ? (
              <>
                <div className="newNutritionBtn">
                  <Link to="/nutrition/new">
                    <button className="createBtn">Record Nutrition</button>
                  </Link>
                </div>
                <h2>Nutrition Logs</h2>
                {isFetching ? <h2>Loading...</h2> : null}
                {console.log(nutrition)}        
                {nutrition?.map((post) => (
                    <Post post={post} key={post.id} user={user} />
                ))}
              </>) : (
                <>
                {/* {error ? <h2 className="error">{error}</h2> : null} */}
                <NotAllowed />
                </>
              ) }
          {/* {isFetching ? <h2>Loading...</h2> : null}
          {console.log(nutrition)}        
          {nutrition?.map((post) => (
            <Post post={post} key={post.id} user={user} />
          ))} */}
        </div>
      </div>
    )
  }
  
