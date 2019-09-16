import React from 'react';

class RightPannel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputs: '',
            // items : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addBtn = this.addBtn.bind(this)
    }
    handleChange(event) {
        this.setState({ inputs: event.target.value })
    }
    addBtn() {
        // console.log(this.props.some.bind(this, this.state.inputs));
        this.props.some(this.state.inputs)
    }

    render() {
        return <div className='div'>
            <h1>add item</h1>
            <input type='text' onChange={this.handleChange} value={this.state.inputs} />

            <button onClick={this.addBtn}>Add</button>
        </div>

    }

}

export default RightPannel