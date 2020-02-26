import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({ addTech }) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: "Please add some value for firstName and lastName" })
        }
        else {
            console.log("values:", firstName, lastName);
            const newTech = {
                firstName, lastName
            }
            addTech(newTech);
        }
        //Clear Fileds
        setfirstName('');
        setlastName('');
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setfirstName(e.target.value)}>
                        </input>
                        <label htmlFor='firstName' className="active">FirstName:</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setlastName(e.target.value)}>
                        </input>
                        <label htmlFor='lastName' className="active">Last Name:</label>
                    </div>
                </div>


            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect  blue waves-light btn">add</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal);
