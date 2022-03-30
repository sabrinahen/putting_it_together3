// import React, { useState} from 'react';
// const PersonCard = (props) => {
//     const [age, setAge] = useState (props.age)
//     return(
//         <div>
//             <h1>{ props.lastName }, { props.firstName }</h1>
//             <p>Age: { age }</p>
//             <p>Hair Color: { props.hairColor }</p>
//             <button onClick={(event) => setAge(age + 1)}>It's {props.firstName}'s birthday</button>
//         </div>
//     );
// }
// export default PersonCard;

import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
    super(props);

    this.state = {
        ageUp: this.props.age,
    };
}
    render() {

    const { firstName, lastName, hair } = this.props;

    return (
        <div className="container">
            <h2>
                {lastName}, {firstName}
            </h2>
            <p>Age: {this.state.ageUp}</p>
            <p>Hair Color: {hair}</p>
            <button onClick={() => this.setState({ ageUp: this.state.ageUp + 1 })}> It's {firstName}'s birthday! </button>
        </div>
    );
    }
}
export default PersonCard;