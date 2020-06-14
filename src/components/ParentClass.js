import React, { Component } from 'react'
import RegularFunction from './RegularFunction'
import PureFunction from './PureFunction'

export class ParentClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Sikander'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'khan',
             } )
        },2000)
    }
    
    render() {
        console.log('*********************|Parent Component|***************************')
        return (
            <div>
                <h1>ParentClass</h1>
                <RegularFunction name={this.state.name}/>
                <PureFunction  name={this.state.name}/>
            </div>
        )
    }
}

export default ParentClass
