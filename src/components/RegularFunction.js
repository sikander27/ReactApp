import React, { Component } from 'react'

export class RegularFunction extends Component {

    render() {
        console.log('Regulare functio')
        return (
            <div>
                Regular Function {this.props.name}
            </div>
        )
    }
}

export default RegularFunction
