import React from 'react'
import Cards from './Cards';
const Tours = ({removeTour,tours}) => {

    function removeHandler(id) {
        console.log(id);
        removeTour(id);
    }

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Srivathsa</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Cards {...tour} key={tour.id} removeTours={removeHandler} />;
                    })
                }
            </div>
        </div>
    )
}

export default Tours;