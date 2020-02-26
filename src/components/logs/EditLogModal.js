import React, { useState, useEffect } from 'react';
import TechSelectOption from '../techs/TechSelectOption';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = ({ current, updateLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }

    }, [current]);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: "Please add some value for log message and tech" })
        }
        else {
            console.log("current value:", current);
            console.log("new values:", tech, attention, message);
            const updtlg = {
                id: current.id,
                message,
                attention,
                tech
            }
            updateLog(updtlg);
            M.toast({ html: `Log updated by ${tech}` })
        }
        //Clear Fileds
        setMessage('');
        setTech('');
        setAttention(false);
    }

    return (
        <div id="edit-log-modal" className="modal" styles={{ width: "75%", height: "75%" }}>
            <div className="modal-content">
                <h4>Edit System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}>
                        </input>

                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOption />

                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    name="attention"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                ></input>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect  blue waves-light btn">submit</a>
            </div>
        </div>
    )
}

EditLogModal.propTypes = {
    updateLog: PropTypes.func.isRequired,
    current: PropTypes.object
}

const mapStateToProps = state => ({
    current: state.log.current
})
export default connect(mapStateToProps, { updateLog })(EditLogModal);
