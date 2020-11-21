import React from 'react';

export const getChildByFilter = (children, filter) => {
    if(filter.length <= 0) {
        return children
    }

    return React.Children.toArray(children).filter(child => {
        return child.props.text.toLowerCase().match(filter.toLowerCase())
    })
}