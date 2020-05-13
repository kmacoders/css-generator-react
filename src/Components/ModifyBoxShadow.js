import React from "react";
import "./Style/ModifyBoxShadow.css";

class ModifyBoxShadow extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }
    handleChange(e) {
        this.props.handleProperty(e.target.name, e.target.value);
    }
    handleCheckbox(e) {
        this.props.handleCheckbox(e.target.checked);
    }
    render() {
        return (
            <div className="ModifyBoxShadow">
                <div className="property">
                    <label>Shift right</label>
                    <input
                        type="range"
                        name="shiftRight"
                        min="-100"
                        max="100"
                        value={this.props.shiftRight}
                        onChange={this.handleChange}
                    />
                    <span>{this.props.shiftRight}</span>
                </div>
                <div className="property">
                    <label>Shift down</label>
                    <input
                        type="range"
                        name="shiftDown"
                        min="-100"
                        max="100"
                        value={this.props.shiftDown}
                        onChange={this.handleChange}
                    />
                    <span>{this.props.shiftDown}</span>
                </div>
                <div className="property">
                    <label>Spread</label>
                    <input
                        type="range"
                        name="spread"
                        min="0"
                        max="100"
                        value={this.props.spread}
                        onChange={this.handleChange}
                    />
                    <span>{this.props.spread}</span>
                </div>
                <div className="property">
                    <label>Blur</label>
                    <input
                        type="range"
                        name="blur"
                        min="0"
                        max="100"
                        value={this.props.blur}
                        onChange={this.handleChange}
                    />
                    <span>{this.props.blur}</span>
                </div>
                <div className="property">
                    <label>Opacity</label>
                    <input
                        type="range"
                        name="opacity"
                        min="0"
                        max="100"
                        value={this.props.opacity}
                        onChange={this.handleChange}
                    />
                    <span>{this.props.opacity}</span>
                </div>
                {/* Inset  */}
                <div className="inset">
                    <input
                        type="checkbox"
                        checked={this.props.inset}
                        name="inset"
                        onChange={this.handleCheckbox}
                    />
                    <label>Inset</label>
                </div>
                {/* Color Picker  */}
                <div className="colorPicker">
                    <input
                        type="color"
                        value={this.props.colorPicker}
                        name="colorPicker"
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default ModifyBoxShadow;
