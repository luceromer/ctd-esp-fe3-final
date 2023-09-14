import React, { useState } from "react"

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formInputs, setFormInputs] = useState({ name: "", email: "" })
  const [isValidatedFields, setIsValidatedFields] = useState(true)
  const [isFormSentSuccessfully, setIsFormSentSuccessfully] = useState(false)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (formInputs.name.trim().length < 5 || !formInputs.email.match(emailRegex)) {
      setIsValidatedFields(false)
    } else {
      setIsFormSentSuccessfully(true)
    }
  }

  return (
    <>
      {!isFormSentSuccessfully && (
        <form action="submit">
          {!isValidatedFields && <div className="validation">Por favor verifique su información nuevamente.</div>}

          <label htmlFor="name">Ingrese su nombre</label>
          <input
            className="input"
            type="text"
            name="name"
            value={formInputs.name}
            onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
          />
          <label htmlFor="email">Ingrese su email</label>
          <input
            className="input"
            type="email"
            name="email"
            value={formInputs.email}
            onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
          />
          <button className="favButton" onClick={handleSubmitForm} type="submit">
            Enviar
          </button>
        </form>
      )}
      {isFormSentSuccessfully && (
        <div className="form-successfull">Gracias {formInputs.name}, te contactaremos cuando antes vía mail. </div>
      )}
    </>
  )
}

export default Form
