
import React, { Component } from 'react';
class Footer extends Component {

    render() {
        return (
            <div className='footer'>


                Copyright <span>{new Date().getFullYear()}</span>© <a className={"copyright-a"} href={"https://feyzaerat.com/"}> FeyzaErat</a>

            </div>


        );
    }
}

export default Footer;
