import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        isError: false
    }

    componentDidCatch() {
        this.setState({isError: true})
    }

    render() {
        if (this.state.isError) {
            return (
                <div className="error">
                    <h2>Sorry, but something want wrong</h2>
                </div>
            )
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children
    }
}

export default ErrorBoundary;