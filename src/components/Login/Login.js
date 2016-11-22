import React, { PropTypes, Component } from 'react';
import { autobind } from 'core-decorators';
import cx from 'classnames/bind';
import logo from 'assets/logo.svg';
import lang from 'modules/home/locale/pl_PL.lang';
import style from './Login.scss';

class Login extends Component {

  static propTypes = {
    auth: PropTypes.any,
    authError: PropTypes.func,
    onClose: PropTypes.func,
    onLogin: PropTypes.func,
  };

  state = { loading: false, error: false };

  @autobind
  handleLogin(event) {
    event.preventDefault();
    const credentials = {
      email: this.emailInput.value,
      password: this.passwordInput.value,
    };

    this.setState({ loading: true, error: false });

    this.props.onLogin(credentials);
  }

  render() {
    const inputClass = cx({
      [style.Input]: true,
      [style.InputError]: this.state.error,
    });

    return (
      <div className={style.Container}>
        <img className={style.Logo} src={logo} alt="logo"/>
        <h2 className={style.Header}>{lang.LOGIN_MODAL_HEADER}</h2>
        <p className={style.Text}>{lang.LOGIN_MODAL_SUBTITLE}</p>
        <form onSubmit={this.handleLogin}>
          <input
            autoFocus="autofocus"
            className={inputClass}
            type="email"
            placeholder={lang.PLACEHOLDER_EMAIL}
            onChange={() => this.state.error ? this.setState({ error: false }) : false}
            ref={el => {
              this.emailInput = el;
            }}
          />
          <input
            className={inputClass}
            type="password"
            placeholder={lang.PLACEHOLDER_PASSWORD}
            ref={el => {
              this.passwordInput = el;
            }}
          />
          <button
            type="submit"
            className={style.Button}
          >
            {this.state.loading ? `${lang.LOGGING_IN}...` : lang.LOGIN}
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
