import React from 'react';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      phone: '',
      message: '',
      errorMessage: '',
    };
  }

  fullNameRegex = new RegExp(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i);
  phoneRegex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
  emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, message } = this.state;

    if (!this.fullNameRegex.test(fullName)) {
      this.setState({ errorMessage: 'Wrong full name input!' });
      return;
    }
    if (!this.emailRegex.test(email)) {
      this.setState({ errorMessage: 'Wrong email input' });
      return;
    }
    if (!this.phoneRegex.test(phone)) {
      this.setState({ errorMessage: 'Wrong phone input' });
      return;
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { fullName, email, phone, message, errorMessage } = this.state;

    return (
      <div className='contact-page'>
        <form className='contact-form' onSubmit={this.handleSubmit}>
          <h4 className='fill-form'>Please, fill out the form...</h4>
          <FormInput
            type='text'
            name='fullName'
            value={fullName}
            onChange={this.handleChange}
            label='Full Name'
            required
          />
          <FormInput
            type='text'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='text'
            name='phone'
            value={phone}
            onChange={this.handleChange}
            label='Phone Number (optional)'
          />
          <p className='wrong-input'>{errorMessage}</p>
          <textarea
            className='message'
            name='message'
            onChange={this.handleChange}
            value={message}
            placeholder='Your message...'
          ></textarea>
          <CustomButton type='submit'>Send</CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactPage;
