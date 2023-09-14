import React, { useContext, useState } from "react"
import Card from "../Components/Card"
import { ContextGlobal } from "../utils/global.context"
import { getInfoFromStorage, removeIndividualInStorage, removeInfoInStorage } from "../utils/localStorageHandler"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useContext(ContextGlobal)
  const favs = getInfoFromStorage()
  const [isFavRemoved, setIsFavRemoved] = useState(false)

  const removeFav = (id) => {
    removeIndividualInStorage(id)
    setIsFavRemoved(!isFavRemoved)
  }

  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Website</th>
            <th>Remove fav</th>
          </tr>
          {favs.map((fav) => (
            <tr>
              <td>{fav.name}</td>
              <td>{fav.email}</td>
              <td>{fav.phone}</td>
              <td>{fav.website}</td>
              <td>
                <button onClick={() => removeFav(fav.id)} className="favButton">
                  Remove fav
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <button
        className="favButton narrow"
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
