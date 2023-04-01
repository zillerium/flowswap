import {Link, useMatch, useResolvedPath} from "react-router-dom"
import flowswap from './flowswap.png';
import {CartContext} from './CartContext';
import {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ArrowRight, WalletFill, Wallet2} from 'react-bootstrap-icons';

const NavBar=() => {
	const cart = useContext(CartContext);

  return <nav className="nav">
      <Link to="/" className="site-title"><img src={flowswap} className="img-fluid" /></Link>
      <ul>
		<CustomLink to="/admin" >Register</CustomLink>
		<CustomLink to="/portfolio" >Portfolio</CustomLink>
		<CustomLink to="/invest" >Invest</CustomLink>
		<CustomLink to="/investments" >Investment</CustomLink>
		<CustomLink to="/addasset" >Add Asset</CustomLink>
		<CustomLink to="/about" >About</CustomLink>
      </ul>
  </nav>


}

const CustomLink = ({to, children, ...props}) => {
   const path = window.location.pathname;
	const resolvedPath = useResolvedPath (to);
	const isActive = useMatch({ path: resolvedPath.pathname, end:true});
console.log("children = " + children);
console.log("children = " + children);
console.log("props = " + JSON.stringify({...props}));
   return (
      <li className={isActive ? "active" : ""}>
         <Link to={to} {...props}>
             {children}
	 </Link>
      </li>
   )
}

export default NavBar;
