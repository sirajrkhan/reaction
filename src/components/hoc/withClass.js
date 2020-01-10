import React from 'react'

const withClass = (WrappedComp, className) => {
    return props => (
        <div className={className}>
            <WrappedComp />
        </div>
    )
}

export default withClass;