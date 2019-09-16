import React from 'react';

export default (props) => {

    return (
        <div className='div'>
            <h1>work which is doen</h1>
            {
                props.list.map(item => 
                    {
                        return item.isActive ? <div key={item.id}>{item.name} </div>: null
                    }
                )
            }
        </div>
    )

}

// export default CenterPannel