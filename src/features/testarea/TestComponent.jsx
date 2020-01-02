import React, { Component } from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions';
import {Button} from 'semantic-ui-react';

//we have to specify which reducer we are using.
const mapState = (state) => ({
    data: state.test.data
})

//Import Actions in an Object
const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        //destructuring and using props
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is : {data}</h3>
                                
                <Button onClick={incrementCounter} positive content='Increment'/>
                <Button onClick={decrementCounter} negative content='Decrement'/>
            </div>
        )
    }
}

//then like props, we pass the actions to the Component (TestComponent)
export default connect(mapState, mapDispatchToProps)(TestComponent)
