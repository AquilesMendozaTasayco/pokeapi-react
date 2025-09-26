import '../styles/Navbar.css'

export const Navbar = ({texto ,setTexto}) => {
  return (
    <header className="header-poke">
        <input 
            type="text" 
            placeholder='Search Pokemon'
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
        />
        <p>
            Use this input to search for any pokemon. <br />
            In an instant.
        </p>
    </header>
  )
}
