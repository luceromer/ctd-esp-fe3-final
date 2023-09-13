import React, { useState } from "react"
import { Link } from "react-router-dom"
import { removeIndividualInStorage, setInfoInStorage } from "../utils/localStorageHandler"

const Card = ({ name, username, id, pageName, setIsFavRemoved }) => {
  const linkTo = `/dentist/${id}`
  const [isCardAddedToFavorites, setIsCardAddedToFavorites] = useState(false)

  const addFav = () => {
    setInfoInStorage({ name, username, id })
    setIsCardAddedToFavorites(!isCardAddedToFavorites)
  }

  const removeFav = () => {
    removeIndividualInStorage(id)
    setIsCardAddedToFavorites(!isCardAddedToFavorites)
  }

  return (
    <div className="card">
      <Link to={linkTo}>
        <h1>{name}</h1>
        <h2>{username}</h2>
        <h3>{id}</h3>
      </Link>
      {isCardAddedToFavorites || pageName === "fav" ? (
        <button onClick={removeFav} className="favButton">
          Remove fav
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      )}
    </div>
  )
}

export default Card
