import { useState } from "react"

const Validations = () => {

  const [errorNombre, setErrorNombre] = useState('') // String
  const [errorImagen, setErrorImagen] = useState('') // String
  const [errorVida, setErrorVida] = useState(null) // Integer
  const [errorAtaque, setErrorAtaque] = useState(null) // Integer
  const [errorDefensa, setErrorDefensa] = useState(null) // Integer
  const [errorVelocidad, setErrorVelocidad] = useState(null) // Integer
  const [errorAltura, setErrorAltura] = useState(null) // Decimal
  const [errorPeso, setErrorPeso] = useState(null) // Decimal

  const minimo1 = (string) => {
    return string.length >= 1
  }

  const minimo4 = (string) => {
    return string.length >= 4
  }

  const soloLetras = (string) => {
    return /^[a-zA-Z]+$/.test(string)
  }

  const soloNumerosNaturales = (numbers) => {
    return /^[0-9]+$/.test(numbers)
  }

  const soloNumerosDecimales = (numbers) => {
    return /^[+-]?\d+(\.\d+)?$/.test(numbers)
  }

  const formatoUrl = (url) => {
    if(url.length >= 10) return true
    else return false
  }

  const handleNombreVali = (nombre) => {
    if(!soloLetras(nombre) || !minimo4(nombre)) setErrorNombre('Solo se aceptan letras y debe ser mayor a 4 carácteres.')
    else setErrorNombre('')
  }

  const handleImagenVali = (imagen) => {
    if(!formatoUrl(imagen)) setErrorImagen('Debe tener almenos 10 carácteres.')
    else setErrorImagen('')
  }

  const handleVidaVali = (vida) => {
    if(!soloNumerosNaturales(vida) || !minimo1(vida)) setErrorVida('La vida solo debe tener enteros y almenos 1 número.')
    else setErrorVida('')
  }

  const handleAtaqueVali = (ataque) => {
    if(!soloNumerosNaturales(ataque) || !minimo1(ataque)) setErrorAtaque('El ataque solo debe tener enteros y almenos 1 número.')
    else setErrorAtaque('')
  }

  const handleDefensaVali = (defensa) => {
    if(!soloNumerosNaturales(defensa) || !minimo1(defensa)) setErrorDefensa('La defensa solo debe tener enteros y almenos 1 número.')
    else setErrorDefensa('')
  }

  const handleVelocidadVali = (velocidad) => {
    if(!soloNumerosNaturales(velocidad)) setErrorVelocidad('La velocidad solo debe teber numeros enteros.')
    else setErrorVelocidad('')
  }

  const handleAlturaVali = (altura) => {
    if(!soloNumerosDecimales(altura) && !soloNumerosNaturales(altura)) setErrorAltura('La altura solo debe tener enteros o decimales.')
    else setErrorAltura('')
  }

  const handlePesoVali = (peso) => {
    if(!soloNumerosDecimales(peso) && !soloNumerosNaturales(peso)) setErrorPeso('El peso solo debe tener enteros o decimales.')
    else setErrorPeso('')
  }

  return { 
    handleNombreVali, errorNombre, 
    handleImagenVali, errorImagen, 
    handleVidaVali, errorVida, 
    handleAtaqueVali, errorAtaque,
    handleDefensaVali, errorDefensa,
    handleVelocidadVali,errorVelocidad,
    handleAlturaVali, errorAltura,
    handlePesoVali, errorPeso
  }
}

export default Validations
