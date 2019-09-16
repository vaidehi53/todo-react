import React from 'react';

class Leftpannel extends React.Component {

    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (            
            <div className='div'>
                <h1>todo list here</h1>
                {
                    this.props.list.map(item =>
                        <li key={item.id}>
                            <input type='checkbox' onChange={this.props.changeClick.bind(this, item.id)} />
                            {item.name}
                        </li >
                    )
                }

            </div>
        )
    }

}

export default Leftpannel