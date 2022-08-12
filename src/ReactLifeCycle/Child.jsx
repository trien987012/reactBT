import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    render() {
        console.log('render child')
        return (
            <div className='bg-dark p-5 display-4 text-light' >
                Child component
            </div>
        );
    }

    componentDidMount(){
        console.log('componentDidMount child')
    }
    
}

export default Child;
