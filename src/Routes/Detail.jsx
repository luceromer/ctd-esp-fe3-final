import React, { useContext, useEffect } from "react"
import { ContextGlobal } from "../utils/global.context"
import { useParams } from "react-router-dom"
import { getInfoFromApi } from "../utils/getInfoFromApi"
import Card from "../Components/Card"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { theme, individualData, getIndividualData } = useContext(ContextGlobal)

  const { id } = useParams()

  useEffect(() => {
    getInfoFromApi(id).then((response) => getIndividualData(response))
  }, [id])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={theme}>
      <h1>Detail Dentist id: {id} </h1>
      <Card individualData={individualData} pageName="detail" />
    </div>
  )
}

export default Detail
