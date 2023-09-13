import React, { useContext, useEffect } from "react"
import Card from "../Components/Card"
import { ContextGlobal } from "../utils/global.context"
import { getInfoFromApi } from "../utils/getInfoFromApi"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, data, getAllData } = useContext(ContextGlobal)

  useEffect(() => {
    getInfoFromApi().then((response) => getAllData(response))
  }, [])

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {data.map(({ name, username, id }) => (
          <Card name={name} username={username} id={id} key={id} />
        ))}
      </div>
    </main>
  )
}

export default Home
