import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Enter notes'
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
        <label style={{position: 'fixed', top: '14px', left: '730px',}}>
          Turn {this.props.number} Notes:
          </label>
          <textarea style={{position: 'fixed', top: '35px', left: '500px', resize: 'none', height: '310px', width: '49vw', backgroundColor: '#f8f8f8',   
          border: '2px solid #ccc',
          borderRadius: '4px',
          outline: 'none'}} 
          value={this.state.value} onChange={this.handleChange} /> 
      </form>
    );
  }
}

export default Note