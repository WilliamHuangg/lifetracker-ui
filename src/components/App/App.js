import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import apiClient from "../../services/apiClient"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Login from "../Login/Login"
import Activity from "../Activity/Activity"
import Exercise from "../Exercise/Exercise"
import Nutrition from "../Nutrition/Nutrition"
import Sleep from "../Sleep/Sleep"
import PostDetail from "../PostDetail/PostDetail"
import NewPostForm from "../NewPostForm/NewPostForm"
import NotFound from "../NotFound/NotFound"
import "./App.css"

export default function App() {
  const [user, setUser] = useState({})
  const [nutrition, setNutrition] = useState([])
  const [exercise, setExercise] = useState([])
  const [sleep, setSleep] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const [totalCalories, setTotalCalories] = useState(0)

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken()
      if (data) setUser(data.user)
      if (error) setError(error)
    }

    const token = localStorage.getItem("lifetracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  useEffect(() => {
    const fetchNutrition = async () => {
      setIsFetching(true)

      const { data, error } = await apiClient.listNutrition()
      if (data) setNutrition(data.nutrition)
      if (error) setError(error)

      setIsFetching(false)
    }

    fetchNutrition()
  }, [user])

  const addPost = (newPost) => {
    setNutrition((oldPosts) => [newPost, ...oldPosts])
  }

  useEffect(() => {
    const fetchTotalCalories = async () => {
      setIsFetching(true)
      
      const { data, error } = await apiClient.nutritionCalories()
      if (data) { setTotalCalories(data.totalCalories) }
      if (error) setError(error)
  
      setIsFetching(false)
    }
    fetchTotalCalories()
  }, [user] )


  const updatePost = ({ postId, postUpdate }) => {
    setNutrition((oldPosts) => {
      return oldPosts.map((post) => {
        if (post.id === Number(postId)) {
          return { ...post, ...postUpdate }
        }

        return post
      })
    })
  }

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setNutrition([])
    setError(null)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} error={error} isFetching={isFetching} />}
          />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register user={user} setUser={setUser} />} />
          <Route path="/activity" element={<Activity user={user} totalCalories={totalCalories}/> } />
          <Route path="/exercise" element={<Exercise user={user} /> } />
          <Route path="/nutrition" element={<Nutrition user={user} error={error} nutrition={nutrition} addPost={addPost} isFetching={isFetching}/>} />
          <Route path="/nutrition/:postId" element={<PostDetail user={user} updatePost={updatePost} />} />
          <Route path="/nutrition/new" element={<NewPostForm user={user} addPost={addPost} setNutrition={setNutrition}/> } />
          <Route path="/sleep" element={<Sleep user={user} /> } />

          <Route path="*" element={<NotFound user={user} error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
