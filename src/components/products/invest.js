import React from 'react';

import './invest.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faGraduationCap, faMobileAlt, faCoins} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBlackberry} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'


library.add(faGraduationCap, faMobileAlt);

const Investments = () => {

    return (  
        <div>
            <div className= "prod">
            
            <h1 className="products"><FontAwesomeIcon
                            icon={faBlackberry}
                            color="blue"
                            size="2x"
                        />Our Products</h1>
            </div>
       
        <div className = "cont">
            <div className = "items">
                <FontAwesomeIcon
                            icon={faMobileAlt}
                            color="blUE"
                            size="2x"
                        />
                        <span className = 'title'>E-Kash</span><br></br><br></br>
                        <div className = 'content'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>

            </div>
            <div className = "items">
            <FontAwesomeIcon
                            icon={faGraduationCap}
                            color="blue"
                            size="2x"
                        />
                        <span className = 'title'>Edu-Kash</span><br></br><br></br>
            <div className = 'content'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>

            </div> 
            <div className = "items">
            <FontAwesomeIcon
                            icon={faCoins}
                            color="blue"
                            background='yellow'
                            size="2x"
                        />
                        <span className = 'title'>Biz-loan</span><br></br><br></br>
                        <div className = 'content'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>
            </div>

        </div>
      
       
        <div className = "cont">
            <div className = "items">
                <FontAwesomeIcon
                            icon={faMobileAlt}
                            color="blUE"
                            size="2x"
                        />
                        <span className = 'title'>E-Kash</span><br></br><br></br>
                        <div className = 'content'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>

            </div>
            <div className = "items">
            <FontAwesomeIcon
                            icon={faGraduationCap}
                            color="blue"
                            size="2x"
                        />
                        <span className = 'title'>Edu-Kash</span><br></br><br></br>
            <div className = 'content'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>

            </div> 
            <div className = "items">
            <FontAwesomeIcon
                            icon={faCoins}
                            color="blue"
                            background='yellow'
                            size="2x"
                        />
                        <span className = 'title'>Biz-loan</span><br></br><br></br>
                        <div className = 'content'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>
            </div>

        </div>
        </div>
    );
}
 
export default Investments;