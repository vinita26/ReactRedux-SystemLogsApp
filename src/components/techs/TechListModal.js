import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {
        getTechs();
        console.log("tech value:", techs)
        //eslint-disable-next-line
    }, []);

    return (

        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician list</h4>
                <ul className="collection">
                    {!loading &&
                        techs !== null &&
                        techs.map(tech => (
                            <TechItem tech={tech} className="collection-item" key={tech.id}>{tech.firstName}</TechItem>
                        ))}
                </ul>
            </div>

        </div>
    );
}

TechListModal.propTypes = {
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);

