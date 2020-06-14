import React, { PureComponent } from 'react'

export class PureFunction extends PureComponent {
    render() {
        console.log('Pure Function')
        return (
            <div>
                Pure Function:{this.props.name}
            </div>
        )
    }
}

export default PureFunction
