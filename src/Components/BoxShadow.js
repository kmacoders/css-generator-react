import React from "react";
import ModifyBoxShadow from "./ModifyBoxShadow";
import PreviewBoxShadow from "./PreviewBoxShadow";
import CodeBoxShadow from "./CodeBoxShadow";

class BoxShadow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shiftRight: 0,
            shiftDown: 0,
            spread: 3,
            blur: 5,
            opacity: 20,
            inset: false,
            colorPicker: "#000000",
            rgba: "rgba(0,0,0,0.20)",
        };
        this.handleProperty = this.handleProperty.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.hexToRgba = this.hexToRgba.bind(this);
    }
    handleProperty(name, value) {
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    handleCheckbox(value) {
        this.setState({
            inset: value,
        });
    }
    // Convert from HEX -> RGBA color
    hexToRgba(hex, opacity) {
        var h = hex.replace("#", "");
        h = h.match(new RegExp("(.{" + h.length / 3 + "})", "g"));
        for (var i = 0; i < h.length; i++)
            h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);
        if (typeof opacity != "undefined") h.push(opacity);

        return "rgba(" + h.join(",") + ")";
    }
    render() {
        return (
            // Modify property of BoxShadow
            <div className="BoxShadow">
                <h3>Change Box shadow</h3>
                <ModifyBoxShadow
                    shiftRight={this.state.shiftRight}
                    shiftDown={this.state.shiftDown}
                    spread={this.state.spread}
                    blur={this.state.blur}
                    opacity={this.state.opacity}
                    inset={this.state.inset}
                    colorPicker={this.state.colorPicker}
                    handleProperty={this.handleProperty}
                    handleCheckbox={this.handleCheckbox}
                    handleConvertColor={this.handleConvertColor}
                />
                <PreviewBoxShadow
                    shiftRight={this.state.shiftRight}
                    shiftDown={this.state.shiftDown}
                    spread={this.state.spread}
                    blur={this.state.blur}
                    inset={this.state.inset}
                    // Convert hex to rgba
                    rgba={this.hexToRgba(
                        this.state.colorPicker,
                        this.state.opacity / 100
                    )}
                />
                <CodeBoxShadow
                    shiftRight={this.state.shiftRight}
                    shiftDown={this.state.shiftDown}
                    spread={this.state.spread}
                    blur={this.state.blur}
                    inset={this.state.inset}
                    // Convert hex to rgba
                    rgba={this.hexToRgba(
                        this.state.colorPicker,
                        this.state.opacity / 100
                    )}
                />
            </div>
        );
    }
}

export default BoxShadow;
