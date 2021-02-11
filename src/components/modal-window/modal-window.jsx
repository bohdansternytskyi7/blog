import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import { hideModal } from '../../redux/modal/modal.actions';

const ModalWindow = ({ msg, hideModal }) => (
  <div className='modal-window'>
    <div className='container'>
      <div className='message'>{msg}</div>
      <CustomButton onClick={hideModal}>OK</CustomButton>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
});

export default connect(null, mapDispatchToProps)(ModalWindow);
