import React from 'react'
import logo from '../assets/el.png';
// import Link from 'react-router-dom';
import '../Styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
          <img src={logo} />
      </div>
      <div className="rightSide">
        {/* <Link to={"/"}>Home</Link> */}
        <button>
          <ReorderIcon />
        </button>
      </div>
    
    </div>
  )
}

export default Navbar
//rfce kol ma tekteb component  
