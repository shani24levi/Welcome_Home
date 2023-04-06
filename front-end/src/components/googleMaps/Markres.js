import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { getApartents } from '../../actions/apartmentsActions';
import PropTypes from 'prop-types';

class MarkerApartment extends Component {
    componentDidMount() {
    }
    render() {
        console.log('apartments', this.props.apartments);

        const apartments = this.props.apartments || [];

        return (<Marker
            name={'Dolores park'}
            position={{ lat: 32.085300, lng: 34.781769 }}
        />)

        return apartments.map(app => {

            console.log('app', app.lat, app.lng)

            if (!app.lat || !app.lng) return null;

            return <Marker name={app._id} position={{ lat: app.lat, lng: app.lng }} />
        })

        return <Marker
            name={'Dolores park'}
            position={{ lat: 32.085300, lng: 34.781769 }
            }
        />
    }
}

MarkerApartment.propTypes = {
    getApartents: PropTypes.func.isRequired,
    apartment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    apartments: state.apartment.apartments
});

export default connect(mapStateToProps, { getApartents })(MarkerApartment);



