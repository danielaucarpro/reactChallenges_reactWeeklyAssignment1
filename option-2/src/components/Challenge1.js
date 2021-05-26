import React from "react";
import './Challenge1.css';

class ChangeText extends React.Component {
    state = {
        isLeft: true,
        text: ''
    }
    updateTextToRight = () => {
        this.setState({
            isLeft: true
        });
        console.log(this.state.isLeft);
    }
    updateTextToLeft = () => {
        this.setState({
            isLeft: false
        });
        console.log(this.state.isLeft);
    }
    render() {
        return (
            <>
                <div className='container'>
                    <h1>CHALLENGE 1</h1>
                    <h1>This is the {this.state.isLeft ? this.state.text = 'Left' : this.state.text = 'Right'} Text</h1>
                    <button onClick={this.updateTextToRight} className="btn">Show Left</button>
                    <button onClick={this.updateTextToLeft} className="btn">Show Right</button>
                    <hr></hr>
                </div>
            </>
        );
    }
}

export default ChangeText;