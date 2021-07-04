import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import axios from "axios"
import apiClient from "../../services/apiClient"
import { formatDate } from "../../utils/format"
import "./PostDetail.css"

const fetchPostById = async ({ postId, setIsFetching, setError, setPost }) => {
  setIsFetching(true)

  const { data, error } = await apiClient.fetchPostById(postId)
  if (error) setError(error)
  if (data) {
    setPost(data.nutrition)
  }

  setIsFetching(false)
}

export default function PostDetail({ user }) {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPostById({ postId, setIsFetching, setError, setPost })
  }, [postId])

  // const userIsLoggedIn = Boolean(user?.email)
  // const userOwnsPost = userIsLoggedIn && post?.userEmail === user?.email

  if (!post && !isFetching) return null
  if (!post) return <h1>Loading...</h1>

  return (
    <div className="PostDetail">
      <div className="Post">
        <div
          className="media"
          style={{
            backgroundImage: `url(${post.imageUrl})`,
          }}
          to={`/nutrition/${post.id}`}
        />

        <div className="body">
          <div className="info">
            <h2 className="name">{post.name}</h2>
            <p>Category: {post.category}</p>
            <p>Quantity: {post.quantity}</p>
            <p>Calories: {post.calories}</p>
          </div>

          <div className="meta">
            <span className="date">{formatDate(post.createdAt)}</span>
            {/* <span className="user">{post.userEmail}</span> */}
            {/* <span className="firstname">{user.firstname}</span>
            <span className="lastname">{user.lastname}</span> */}
          </div>
        </div>
      </div>

      {error && <span className="error">Error: {error}</span>}
    </div>
  )
}
