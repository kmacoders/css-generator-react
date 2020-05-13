import React from "react";
import './Style/PreviewBoxShadow.css'

class PreviewBoxShadow extends React.Component {
    render() {
        var inset;
        if (this.props.inset) {
            inset = "inset";
        } else {
            inset = "";
        }
        var style = {
            width: 200,
            height: 200,
            backgroundColor: "#3d9df6",
            boxShadow: `${this.props.rgba} ${this.props.shiftRight}px ${this.props.shiftDown}px ${this.props.blur}px ${this.props.spread}px ${inset}`
        }
        return (
            <div className="PreviewBoxShadow">
                <h3>Preview</h3>
                <div className="square" style={style}>
                </div>
            </div>
        );
    }
}

export default PreviewBoxShadow;
