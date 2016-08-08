import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { authChange } from '../actions/action';

class Signup extends React.Component{
  constructor(props) {
    super(props);
  }

  onFieldChange(e) {
    this.props.dispatch(authChange(e.target.name, e.target.value))
  }

  render() {
    console.log('BEFORE RETURN IN SIGNUP RENDER', this.props);
    return (
      <div>
        {console.log('AFTER RETURN IN SIGNUP RENDER')}
        <form>
          <h2> Sign Up! </h2>
          <input value={this.props.username} name="username" onChange={this.onFieldChange.bind(this)} />
          <input value={this.props.password} name="password" onChange={this.onFieldChange.bind(this)} type="password" />
          // <h2>{this.props}</h2>
          <button>Sign up</button><br />
          <Link to="/"><button> Back to homepage </button></Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => state.authReducer;
export default connect(mapStateToProps)(withRouter(Signup));
