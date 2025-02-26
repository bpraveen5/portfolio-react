import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
const Navbar = () => {
    const[menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' href='#'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
           
        </ul>
     </div>
  )
}

export default Navbar