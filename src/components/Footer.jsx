import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer()
{
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/katis-nikos-839530246/" target="_blank"> <LinkedInIcon /> </a>
      </div>
      <p> &copy; 2023 </p>
    </div>
  )
}

export default Footer;