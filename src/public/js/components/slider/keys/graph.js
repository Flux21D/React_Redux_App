import React from "react";

class Graph extends React.Component {

    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div id="keys">
                <div>
                    <img src="img/keys/_key_graph_grey.png" alt=""/> Placebo + MTX (n=488)
                </div>
                <div>
                    <img src="img/keys/_key_graph_orange.png" alt=""/> Olumiant 4 mg + MTX (n=487)
                </div>
                <div>
                    <img src="img/keys/_key_graph_black.png" alt=""/> Adalimubab + MTX (n=330)
                </div>

                <div className="placebo">
                    <p>P-value vs placebo + MTX</p>
                    <p>*** P≤0.001  |  ** P≤0.01  |  * P≤0.05</p>
                </div>

                <div className="adalimumab">
                    <p>P-value vs adalimumab + MTX</p>
                    <p>*** P≤0.001  |  ** P≤0.01  |  * P≤0.05</p>
                </div>
            </div>
        );
    }

}

export default Graph;