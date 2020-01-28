import React from 'react'

const withClass = (WrappedComp, className) => {
    return props => (
        <div className={className}>
            <WrappedComp {...props} />
        </div>
    )
}

export default withClass;