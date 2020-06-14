import React, { Component } from 'react'
import Counter from './withCounter'
export class ClickCounter extends Component {

    render() {
        const {count, handler} = this.props
        return (
            <div>
               <button onClick={handler}>Clicked {count} times</button>
            </div>
        )
    }
}

export default Counter(ClickCounter)
