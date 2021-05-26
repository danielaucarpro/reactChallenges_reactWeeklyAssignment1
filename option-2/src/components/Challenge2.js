import React from 'react';
import './Challenge2.css';

class ShowStudentNames extends React.Component {
    state = {
        names: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                names: this.props.studentName
            });
        }, 3000);
        this.render = () => {
            let arrayOfNames = this.state.names.map(namesArray => {
                return (
                    <li>{namesArray}</li>
                );
            });
            return (
                <>
                    <div className='container'>
                        <h1>CHALLENGE 2</h1>
                        <ul className='list'>
                            <li className="listElement">{arrayOfNames}</li>
                        </ul>
                        <button onClick={this.shuffleNames}>Shuffle Students</button>
                    </div>
                </>
            );
        }
    }


    shuffleNames = () => {
        let randomArray = this.state.names.sort(() => Math.random() - 0.5);
        this.setState({
            names: randomArray
        });
        console.log(randomArray);
    }

    render() {
        return (
            <>
                <div className='container'>
                    <h1>CHALLENGE 2</h1>
                    <ul className='list'>
                        <li className="listElement">Loading Students...</li>
                    </ul>
                    <button onClick={this.shuffleNames}>Shuffle Students</button>
                </div>
            </>
        );
    }
}


export default ShowStudentNames;