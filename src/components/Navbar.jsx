import React from 'react';
import {useEffect, useState} from 'react';      //React hooks
import {Link, useLocation} from 'react-router-dom';    //To react-router-dom χρησιμοποιείται για dynamic routing
import ReorderIcon from '@mui/icons-material/Reorder';   //Toggler


function Navbar()
{
  const [expandNavbar, setExpandNavbar] = useState(false);    //expandNavbar === false
  const location = useLocation();     //Η useLocation() είναι hook που μας επιστρέφει το route στο οποίο βρίσκομαι

  /*Βρισκόμενος στο navbar που εμφανίζεται μετά το πάτημα του toggler, μόλις κλικάρω
  σε οποιoδήποτε page (δηλαδή αλλάξω location-route), το navbar εξαφανίζεται*/
  useEffect(() =>
  {
    setExpandNavbar(false);
  }, [location]);

  //setExpandNavbar((prev) => !prev)---> Αν είναι true το κάνει false και αντίστροφα
  return(
    <div className="navbar" id={expandNavbar ? "open" : "close"}>  
      <div className="toggleButton">
        <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}


export default Navbar;