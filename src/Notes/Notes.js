import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Enter notes for turn ' + this.props.number
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    /// handle save of data here
  }

  handleSubmit(event) {
    alert('A Note submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={{position: 'fixed', top: '2%', left: '70%',}}>
          Turn {this.props.number} Notes:
          </label>
          <textarea style={{position: 'fixed', top: '5%', left: '50%', resize: 'none', height: '47vh', width: '47vw', backgroundColor: '#f8f8f8',   
          border: '2px solid #ccc',
          borderRadius: '4px',
          outline: 'none'}} 
          value={this.state.value} onChange={this.handleChange} /> 
      </form>
    );
  }
}

export default Note