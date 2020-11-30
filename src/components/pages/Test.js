import React from 'react';
import ListContainer from '../layout/Lists/ListContainer'
import ListItem from '../layout/Lists/ListItem'

const Test = () => {


    const data = [
        { key: 1, string: 'Dog', url: '/test' },
        { key: 2, string: 'Cat', url: '/test' },
        { key: 3, string: 'Cow', url: '/test' },
        { key: 4, string: 'Shark', url: '/test' },
        { key: 5, string: 'Mouse', url: '/test' },
        { key: 6, string: 'Hedgehog', url: '/test' },
        { key: 7, string: 'Tiger', url: '/test' },
        { key: 8, string: 'Lion', url: '/test' },
        { key: 9, string: 'Bear', url: '/test' },
        { key: 10, string: 'Fish', url: '/test' }
    ]

    return (
        <ListContainer inputPlaceholder="Animal Name..." header="Test List" sorted={true}>
            {data.map(item => {
                return <ListItem key={item.key} text={item.string} url={item.url}></ListItem >
            })}
        </ListContainer>
    )
}

export default Test