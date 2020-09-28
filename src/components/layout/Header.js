import React, { Component } from "react";
import './style.css';
class Header extends Component {
    render() {
        return (
            <header>
                <div className="card-header">
                    <div className="view intro-2">
                        <div className="full-bg-img">
                            <div className="mask rgba-black-light flex-center">
                                <div className="container text-center white-text">
                                    <div className="white-text text-center wow fadeInUp">
                                        <h2>React CRUD simple</h2>
                                        <h5></h5>
                                        
                                            <p></p>
                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </header>
                
                

        )
    }

}
export default Header;