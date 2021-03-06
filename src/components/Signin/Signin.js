import React from 'react';
import About from '../About';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://arcane-refuge-99944.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
      <About />
      <article className="br3 ba b--black-10 bg-white mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign in</legend>
              <div className="mt3">
                <input
                  className="pa2 input-reset ba bg-transparent borderRadius-10  w-100"
                  type="email"
                  placeholder='Email'
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <input
                  className="pa2 input-reset ba w-100"
                  placeholder='Password'
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="ph5 pv2 input-reset ba btn-sign pointer"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p className='sign-form-text'>Don't have account?</p>
              <p  onClick={() => onRouteChange('register')} className="link db sign-form-link">Register</p>
            </div>
          </div>
        </main>
      </article>
      </div>
    );
  }
}

export default Signin;