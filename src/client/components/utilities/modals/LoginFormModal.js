import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, OverlayTrigger, Tooltip } from  'react-bootstrap';
import { setLoginForm } from '../../../actions';

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.handleHide = this.handleHide.bind(this)
    }

    handleHide() {
        this.props.setLoginForm(false);
    }

    render () {
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return (
            <Modal
                show={this.props.loginFormStatus}
                onHide={this.handleHide}
                bsSize="sm"
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                        Contained Modal
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Elit est explicabo
                    ipsum
                    <OverlayTrigger overlay={tooltip}>
                        <a href="#tooltip">tooltip</a>
                    </OverlayTrigger>{' '}

                    eaque dolorem blanditiis doloribus sed id
                    ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginFormStatus: state.auth.loginFormStatus,
    }
}

export default connect(mapStateToProps, {
    setLoginForm
})(LoginForm);
