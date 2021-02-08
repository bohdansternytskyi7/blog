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
    };
  }
  fullNameRegex = new RegExp(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i);
  emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  phoneRegex = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  );

  handleSubmit = () => {};

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { fullName, email, phone, message } = this.state;

    return (
      <div className='contact-page'>
        <form className='contact-form' onSubmit={this.handleSubmit}>
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
            label='Phone Number'
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
      </div>
    );
  }
}

export default ContactPage;
