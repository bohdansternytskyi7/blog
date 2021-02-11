import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectResponseMessage } from '../../redux/email/email.selectors';
import { selectModalHidden } from '../../redux/modal/modal.selectors';
import ContactForm from '../../components/contact-form/contact-form';
import ModalWindow from '../../components/modal-window/modal-window';
import WithSpinner from '../../components/with-spinner/with-spinner';

const ContactPage = ({ message, modalHidden }) => (
  <div className='contact-page'>
    {!modalHidden ? <ModalWindow msg={message} /> : null}
    <ContactForm />
  </div>
);

const mapStateToProps = createStructuredSelector({
  message: selectResponseMessage,
  modalHidden: selectModalHidden,
});

export default compose(connect(mapStateToProps), WithSpinner)(ContactPage);
