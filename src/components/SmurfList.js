import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';


 const SmurfList = (props)=> {

    // static isLoading is replace with state loading variable
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {
            // Iterates through smurfs and returns smurf data card
            props.smurfs.map((smurf) => {
                return(
                    <Smurf smurf={smurf}/>
                )
            })
        }
    </div>);
}

// connects smurfs and loading variable to the component
const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, null)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.