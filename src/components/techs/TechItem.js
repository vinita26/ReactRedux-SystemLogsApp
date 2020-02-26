import React from 'react'
import { deleteTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ tech, deleteTech }) => {

    const ondelete = id => {
        deleteTech(id);
        M.toast({ html: `Technician ${id} has been deleted` })
    }

    return (
        <li className="collection-item avatar">
            <img src={tech.imgSrc} alt="" className="circle"></img>
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content" onClick={() => ondelete(tech.id)}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>

        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null, { deleteTech })(TechItem)
