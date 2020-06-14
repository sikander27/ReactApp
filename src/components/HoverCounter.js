import React, { Component } from 'react'
import Counter from './withCounter'
export class HoverCounter extends Component {
  
    render() {
     const{ count , handler} = this.props
        return (
            <div onMouseOver={handler}>
                <p>Hover over {count} times</p>
            </div>
        )
    }
}

export default Counter(HoverCounter)
