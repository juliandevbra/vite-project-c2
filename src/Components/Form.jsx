import { useState } from "react"
const btnStyle = {backgroundColor: '#FDCA40'}

const Form = () => {
  // const [name, setName] = useState('')
  // const [address, setAddress] = useState('')

  const [customer, setCustomer] = useState({
    name: '',
    address: '',
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const numRegex = /[0-9]/
    if(customer.name.length >= 3 && numRegex.test(customer.address) && customer.address.length >= 3 && customer.address.includes(' ')){
      setShow(true)
      setErr(false)
    } else {
      setErr(true)
    }
  }
  console.log(customer)
  return (
    <div>
      {show ? null : 
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" onChange={(event) => setCustomer({...customer, name: event.target.value})}/>
          <label>Direccion:</label>
          <input type="text" onChange={(event) => setCustomer({...customer, address: event.target.value})}/>
          <button  style={btnStyle}>Enviar</button>
        </form>
      }
      {show ? 
        <>
          <h3>Genial, {customer.name}!</h3>
          <h3>En 30 minutos te llega el pedido a {customer.address}</h3>
        </> 
      : 'Coloque sus datos para enviar el pedido'}

      {err && <h4 style={{color: 'red'}}>Debe colocar los datos correctamente</h4 >}
      
    </div>
  )
}

export default Form