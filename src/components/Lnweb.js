import React from 'react';
import { BrowserRouter } from 'react-router-dom'


import Navbar from './Navigation/Navbar'

import Footer from './Footer/Footer'
import Registration from './Downloads/Registration';
import Investments from './products/invest';



class Lnweb extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (
            <div className = "container">
                <BrowserRouter>
                    <Navbar />
                

                    <Investments />
                    <Registration />
                    <Footer />

                </BrowserRouter>
            </div>

        )
    }
}

export default Lnweb;