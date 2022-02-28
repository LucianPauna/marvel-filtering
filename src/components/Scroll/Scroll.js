import React from "react";

class Scroll extends React.Component {
    render() {
        return (
            <div className="Scroll" style={{overflowY: 'scroll',border: '1px solid #000', height: 'calc(100vh - 176px)'}}>
                {this.props.children}
            </div>
        )
    }
}

export default Scroll;