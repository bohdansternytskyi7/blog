import React from 'react';
import { fullNameRegex, phoneRegex, emailRegex } from '../../regex';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { sendEmailStartAsync } from '../../redux/email/email.actions';

const INITIAL_STATE = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
  wrongFullName: false,
  wrongEmail: false,
  wrongPhone: false,
};

class ContactForm extends React.Component {
  state = INITIAL_STATE;

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      wrongFullName: false,
      wrongEmail: false,
      wrongPhone: false,
    });

    let allowSend = true;
    const { fullName, email, phone } = this.state;
    if (!fullName || !fullNameRegex.test(fullName)) {
      this.setState({ wrongFullName: true });
      allowSend = false;
    }
    if (!email || !emailRegex.test(email)) {
      this.setState({ wrongEmail: true });
      allowSend = false;
    }
    if (phone && !phoneRegex.test(phone)) {
      this.setState({ wrongPhone: true });
      allowSend = false;
    }
    if (!allowSend) return;

    this.props.sendEmailStartAsync(e.target);
    this.setState(INITIAL_STATE);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      fullName,
      email,
      phone,
      message,
      wrongFullName,
      wrongEmail,
      wrongPhone,
    } = this.state;

    return (
      <form className='contact-form' onSubmit={this.handleSubmit}>
        <h4 className='fill-form'>Please, fill out the form...</h4>
        <FormInput
          errorStyle={wrongFullName}
          type='text'
          name='fullName'
          value={fullName}
          onChange={this.handleChange}
          label='Full Name'
          required
        />
        <FormInput
          errorStyle={wrongEmail}
          type='text'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Email'
          required
        />{' '}
        <FormInput
          errorStyle={wrongPhone}
          type='text'
          name='phone'
          value={phone}
          onChange={this.handleChange}
          label='Phone Number (optional)'
        />
        <textarea
          className='message'
          name='message'
          onChange={this.handleChange}
          value={message}
          placeholder='Your message...'
        ></textarea>
        <CustomButton type='submit'>Send</CustomButton>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmailStartAsync: (data) => dispatch(sendEmailStartAsync(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
