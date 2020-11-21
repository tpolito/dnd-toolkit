import React from 'react';

export const getChildByFilter = (children, filter) => {
    if(filter.length <= 0) {
        return children
    }

    return React.Children.toArray(children).filter(child => {
        return child.props.text.toLowerCase().match(filter.toLowerCase())
    })
}

export const getChildByFilterAndSort = (children, filter) => {
    const alph = (a, b) => {
        if(a.props.text < b.props.text) { return -1; }
        if(a.props.text > b.props.text) { return 1; }
        return 0;
    }

    if(filter.length <= 0) {
        return React.Children.toArray(children).sort(alph)
    }
    
    return React.Children.toArray(children).filter(child => {
        return child.props.text.toLowerCase().match(filter.toLowerCase())
    }).sort(alph)
}