import React from "react";
import {Link} from "react-router";

class Error404 extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
            <div id="error">
                <div className="error-404">
                    <div className="chain-left"></div>
                    <div className="error-content">
                        <h1>Page not found</h1>
                        <p>Sorry, the page you requested doesn't exist.</p>

                        <div>
                            <Link to="home" className="btn btn-white">Return to homepage</Link>
                        </div>
                    </div>
                    <div className="chain-right"></div>
                </div>
            </div>
    );
  }
}

export default Error404;