import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalWindow from './ModalWindow';


class ModalWindowContainer extends Component {
    render() {
        const modals = this.props.modalWindows;
        return(
            <div>
                {modals.map((modal,ind) =>
                    <ModalWindow
                        key={ind}
                        modalType={modal.modalType}
                        onCancel={modal.modalProps.onCancel}
                        onSave={modal.modalProps.onSave}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    modalWindows: state.modalWindows
})

export default connect(mapStateToProps)(ModalWindowContainer);