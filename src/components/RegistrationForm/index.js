import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    fblur: false,
    lblur: false,
    isSucces: false,
  }

  onSubmitAnotherForm = () => {
    this.setState({isSucces: false})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstname, lastname} = this.state

    if (firstname === '') {
      this.setState({
        fblur: true,
      })
    }
    if (lastname === '') {
      this.setState({
        lblur: true,
      })
    }
    if (firstname !== '' && lastname !== '') {
      this.setState({isSucces: true, firstname: '', lastname: ''})
    }
  }

  onFirstNameBlur = event => {
    if (event.target.value === '') {
      this.setState(prevState => ({fblur: !prevState.fblur}))
    }
  }

  onLastNameBlur = event => {
    if (event.target.value === '') {
      this.setState(prevState => ({lblur: !prevState.lblur}))
    }
  }

  firstNameInput = event => {
    this.setState({firstname: event.target.value, fblur: false})
  }

  getFirstName = () => {
    const {firstname, fblur} = this.state
    return (
      <>
        <label htmlFor="firstName">FIRST NAME</label>
        <br />
        <input
          id="firstName"
          type="text"
          value={firstname}
          onBlur={this.onFirstNameBlur}
          onChange={this.firstNameInput}
          placeholder="First name"
        />
        {fblur ? <p className="error-message">Required</p> : null}
      </>
    )
  }

  lastNameInput = event => {
    this.setState({lastname: event.target.value, lblur: false})
  }

  getLastName = () => {
    const {lastname, lblur} = this.state
    return (
      <>
        <label htmlFor="lastName">LAST NAME</label>
        <br />
        <input
          id="lastName"
          type="text"
          value={lastname}
          onBlur={this.onLastNameBlur}
          onChange={this.lastNameInput}
          placeholder="Last name"
        />
        {lblur ? <p className="error-message">Required</p> : null}
      </>
    )
  }

  render() {
    const {isSucces} = this.state
    return (
      <div className="bg-container">
        <h1 className="head">Registration</h1>
        {isSucces ? (
          <form className="form-container" onSubmit={this.onSubmitAnotherForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-image"
            />
            <p className="success-text">Submitted Successfully</p>
            <button className="submit-button" type="submit">
              Submit Another Response
            </button>
          </form>
        ) : (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.getFirstName()}</div>
            <br />
            <div className="input-container">{this.getLastName()}</div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
