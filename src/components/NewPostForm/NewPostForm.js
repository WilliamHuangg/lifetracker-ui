import { useState } from "react"
import { Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import NotAllowed from "../NotAllowed/NotAllowed"
import "./NewPostForm.css"

export default function NewPostForm({ user, addPost, setNutrition }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity:"",
    calories:"",
    imageUrl: "",
  })

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const { data, error } = await apiClient.createNutritionPost({ name: form.name, category: form.category, quantity: form.quantity, calories: form.calories, imageUrl: form.imageUrl })
    if (error) setError(error)
    if (data) {
      addPost(data.nutrition)
      setForm({ name: "",
                category: "",
                quantity:"",
                calories:"",
                imageUrl: "" })
    }

    setIsLoading(false)
  }

  const renderForm = () => {
    if (!user?.email) {
      return <NotAllowed />
    }
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="caption">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Nutrition Name"
            value={form.name}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="caption">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Nutrition Category"
            value={form.category}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="caption">Quantity</label>
          <input
            type="integer"
            name="quantity"
            placeholder="Quantity"
            value={form.quantity}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="caption">Calories</label>
          <input
            type="integer"
            name="calories"
            placeholder="Calories"
            value={form.calories}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="The image URL for the nutrition"
            value={form.imageUrl}
            onChange={handleOnInputChange}
          />
        </div>

        <button component={ Link } to="/nutrition" className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        
      </div>
    )
  }

  return (
    <div className="NewPostForm">
      <div className="card">
        <h2>Record Nutrition</h2>

        {Boolean(error) && <span className="error">{error}</span>}

        {renderForm()}
      </div>
    </div>
  )
}
