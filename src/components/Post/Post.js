import { Link } from "react-router-dom"
import { formatDate } from "../../utils/format"
import "./Post.css"

export default function Post({ post, user }) {
  const userOwnsPost = user?.email && post?.userEmail === user?.email

  return (
    <div className="Post">
      <Link
        className="media"
        style={{
          backgroundImage: `url(${post.imageUrl})`,
        }}
        to={`/nutrition/${post.id}`}
      ></Link>

      <div className="body">
        <div className="info">
          <h2 className="caption">{post.name}</h2>
          <p>Category: {post.category}</p>
          <p>Quantity: {post.quantity}</p>
          <p>Calories: {post.calories}</p>
          {/* <span className="rating">
            {formatRating(post.rating || 0)}
          </span> */}
        </div>

        <div className="meta">
          <span className="date">{formatDate(post.createdAt)}</span>
          <span className="user">
            {/* {userOwnsPost ? "You" : post.userEmail} */}
            {userOwnsPost ? (
              <Link to={`/nutrition/${post.id}`}>
                {/* <i className="material-icons">edit</i> */}
              </Link>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  )
}
