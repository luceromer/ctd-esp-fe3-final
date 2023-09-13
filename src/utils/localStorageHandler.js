export const getInfoFromStorage = () => {
  const localData = localStorage.getItem("favorites")
  return localData ? JSON.parse(localData) : []
}

export const setInfoInStorage = (fav) => {
  const localData = getInfoFromStorage()
  !localData.find((f) => f.id === fav.id) && localData.push(fav)
  localStorage.setItem("favorites", JSON.stringify(localData))
}

export const removeInfoInStorage = () => {
  localStorage.clear()
}

export const removeIndividualInStorage = (id) => {
  const localData = getInfoFromStorage()
  const newLocalData = localData.filter((f) => f.id !== id)
  localStorage.setItem("favorites", JSON.stringify(newLocalData))
}
