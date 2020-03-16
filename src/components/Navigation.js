import React, { Component } from 'react';

class Navigation extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    // }
    handleActiveLink (e) {
        this.props.handleClick(e)
    }
    render() {
        return (
            <div className="navigational">
                <div className="row justify-content-between no-gutters">
                    <div className="col-2 nameLogo">
                        <span className="lname">Suazo<span className="fname">.</span></span>
                    </div>
                    <div className="col-6 nav-links">
                        <span onClick={this.handleActiveLink.bind(this,'active-about')}>About</span> 
                        <span onClick={this.handleActiveLink.bind(this,'active-work')}>Work</span> 
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;