class Radio extends React.Component {
  constructor() {
    state = {
      size: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    alert(`You chose the ${this.state.size} pizza.`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Select a pizza size:</p>
        
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="small"
                checked={this.state.size === "small"}
                onChange={this.handleChange}
              />
              Small
            </label>
          </li>
          
          <li>
            <label>
              <input
                type="radio"
                value="medium"
                checked={this.state.size === "medium"}
                onChange={this.handleChange}
              />
              Medium
            </label>
          </li>
  
          <li>
            <label>
              <input
                type="radio"
                value="large"
                checked={this.state.size === "large"}
                onChange={this.handleChange}
              />
              Large
            </label>
          </li>
        </ul>
  
        <button type="submit">Make your choice</button>
      </form>
    );
  }
}

export default Radio;