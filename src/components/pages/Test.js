import React from 'react';
import Card from '../layout/Card'

const Test = () => {
    const test = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis consectetur sit, vitae laudantium architecto facere aspernatur et eligendi assumenda illum nobis ipsam qui tempora nesciunt esse temporibus, voluptatibus nisi."
    return (
        <div className="flex mb-4">
            <Card title="Hello World" desc={test} link="/test" />
            <Card title="Second Card" desc={test} link="/test" />
        </div>
    )
}

export default Test