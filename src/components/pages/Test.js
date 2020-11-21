import React from 'react';
import ListContainer from '../layout/Lists/ListContainer'
import ListItem from '../layout/Lists/ListItem'

const Test = () => {


    const data = [
        { key: 1, string: 'Dog', url: '/url' },
        { key: 2, string: 'Cat', url: '/url' },
        { key: 3, string: 'Cow', url: '/url' },
        { key: 4, string: 'Shark', url: '/url' },
        { key: 5, string: 'Mouse', url: '/url' },
        { key: 6, string: 'Hedgehog', url: '/url' },
        { key: 7, string: 'Tiger', url: '/url' },
        { key: 8, string: 'Lion', url: '/url' },
        { key: 9, string: 'Bear', url: '/url' },
        { key: 10, string: 'Fish', url: '/url' }
    ]

    return (
        <ListContainer inputPlaceholder="Animal Name...">
            {data.map(item => {
                return <ListItem key={item.key} text={item.string} url={item.url}></ListItem >
            })}
        </ListContainer>
    )
}

export default Test