import React from 'react'

const Counter = WrappedComponent => {
    class withCounter extends React.Component {
          constructor(props) {
            super(props)
        
            this.state = {
                 count:0,
            }
        }
    
        handleClick = ()=>{
                 this.setState(state => {
                   return {count: state.count + 1,}
                })
           }
          
        render() {
            return <WrappedComponent 
            count={this.state.count}
            handler={this.handleClick}/>
        }
    }
    return withCounter
}

export default Counter
 