import React, { useState } from "react"
import { Link } from "react-router-dom"
import { removeIndividualInStorage, setInfoInStorage } from "../utils/localStorageHandler"

const Card = ({ individualData, pageName }) => {
  const { name, username, id } = individualData
  const linkTo = `/dentist/${id}`
  const [isCardAddedToFavorites, setIsCardAddedToFavorites] = useState(false)

  const addFav = () => {
    setInfoInStorage(individualData)
    setIsCardAddedToFavorites(!isCardAddedToFavorites)
  }

  const removeFav = () => {
    removeIndividualInStorage(id)
    setIsCardAddedToFavorites(!isCardAddedToFavorites)
  }

  return (
    <div className="card">
      <Link to={linkTo}>
        <img src="../../images/doctor.jpg" alt="doctor" />
        <h1>{name}</h1>
        <h2>{username}</h2>
        <h3>{id}</h3>
        {pageName === "detail" && (
          <>
            <p>{individualData.phone}</p>
            <p>{individualData.website}</p>
          </>
        )}
      </Link>
      {isCardAddedToFavorites ? (
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
