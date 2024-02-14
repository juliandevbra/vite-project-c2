import '../Styles/Navbar.css'

const Navbar = () => {
    const titulos = ['Home', 'Shop', 'Contact']

  return (
    <div className="navbar">
        {titulos.map((titulo, indice) => <h4 key={indice}>{titulo}</h4>)}
    </div>
  )
}

export default Navbar