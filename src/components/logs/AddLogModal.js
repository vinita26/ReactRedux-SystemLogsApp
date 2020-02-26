import React, { useState } from 'react';
import TechSelectOption from '../techs/TechSelectOption';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = ({ addLog, getTechs }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');


    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: "Please add some value for log message and tech" })
        }
        else {
            console.log("values:", tech, attention, message);
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }
            addLog(newLog);
            M.toast({ html: `Log added by ${tech}` })
        }
        //Clear Fileds
        setMessage('');
        setTech('');
        setAttention(false);
    }

    return (
        <div id="add-log-modal" className="modal" styles={{ width: "75%", height: "75%" }}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}>
                        </input>
                        <label htmlFor='message' className="active">Log Message:</label>
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

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired
}

export default connect(
    null,
    { addLog }
)(AddLogModal);
