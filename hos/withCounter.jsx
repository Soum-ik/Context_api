import React from "react";

const withCounter = (OriginalComponent) => {
    class newComponent extends React.Component {
        state = {
            count: 0
        }
        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }
        render() {
            const { count } = this.state
            return (
                <OriginalComponent count={count} incrementCount={this.incrementCount} />
            )
        }
    }
    return newComponent
}

export default withCounter