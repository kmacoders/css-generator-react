import React from "react";
import './Style/CodeBoxShadow.css'

class CodeBoxShadow extends React.Component {
    render() {
        var inset;
        if (this.props.inset) {
            inset = "inset";
        } else {
            inset = "";
        }
        return (
            <div className="CodeBoxShadow">
                <h3>CSS Code</h3>
                {/* box-shadow: rgba(0,0,0,1) 0px 0px 0px 3px;  */}
                <p>
                    box-shadow: {this.props.rgba} {this.props.shiftRight}px{" "}
                    {this.props.shiftDown}px {this.props.blur}px{" "}
                    {this.props.spread}px {inset}
                </p>
            </div>
        );
    }
}

export default CodeBoxShadow;
