import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
const Navbar = () => {

  const { loading, error, dispatch,user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>Ug Rentals</Link>
          </span>
        <div className="navItems">
          {!user &&
          <button className="navButton">Login</button>
}

{user &&  <>
          <h4 className="logo">{user.username}</h4>
          </>

}


        </div>
      </div>
    </div>
  )
}

export default Navbar