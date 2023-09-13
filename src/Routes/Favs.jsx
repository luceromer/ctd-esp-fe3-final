import React, { useContext, useState } from "react"
import Card from "../Components/Card"
import { ContextGlobal } from "../utils/global.context"
import { getInfoFromStorage, removeInfoInStorage } from "../utils/localStorageHandler"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useContext(ContextGlobal)
  const favs = getInfoFromStorage()
  const [isFavRemoved, setIsFavRemoved] = useState(false)

  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((fav) => (
          <Card name={fav.name} username={fav.username} id={fav.id} key={fav.id} pageName="fav" setIsFavRemoved={setIsFavRemoved} />
        ))}
      </div>
      <button
        className="favButton"
        onClick={() => {
          removeInfoInStorage()
          setIsFavRemoved(!isFavRemoved)
        }}
      >
        Clear favs
      </button>
    </div>
  )
}

export default Favs
