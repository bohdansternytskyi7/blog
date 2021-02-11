import ContactForm from '../../components/contact-form/contact-form';
import WithSpinner from '../../components/with-spinner/with-spinner';

const ContactPage = () => (
  <div className='contact-page'>
    <ContactForm />
  </div>
);

export default WithSpinner(ContactPage);
