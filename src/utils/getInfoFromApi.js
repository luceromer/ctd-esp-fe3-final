import { dentistEndpoint } from "./endpoints"

export const getInfoFromApi = async (id = "") => {
  const getInfo = async (dentistId) => {
    const response = await fetch(dentistEndpoint(dentistId)).then((response) => response.json())
    return response
  }
  const dataParsed = await getInfo(id).then((result) => {
    return result
  })
  return dataParsed
}
