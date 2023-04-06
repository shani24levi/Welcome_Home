import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import isEmpty from '../../validation/is-empty';
import ApartmentPoto from './ApartmentPoto';
import ApartmentDetails from './ApartmentDetails';
import ApartmentPosts from './ApartmentPosts';
import { Link } from 'react-router-dom';
import { getApartentsByApartmentId } from '../../actions/apartmentsActions';



class ApartmentView extends Component {
  componentDidMount() {
    this.props.getApartentsByApartmentId(this.props.match.params.apartment_id);
  }
  render() {

    const { apartment, loading } = this.props.apartment || [];
    let item;

    if (loading || apartment === null) {
      item = <Spinner />;
    } else if (apartment.message) {
      item = <h4>Apartment Not found...</h4>;
    } else {
      item = (
        <>
          { /* left side -potos */}
          <div className="galluryView">
            {/* <ApartmentPoto  apartment={apartment} /> */}
          </div>

          {/* right side  */}
          <div className="infoView">
            <div className="conectOwner">

              <Link to={{ pathname: '/create-requst', state: this.state }}>
                <input
                  type="button"
                  value="Contact Apartment Owner"
                  className="btn btn-danger wrn-btn"
                />
              </Link>
              <ApartmentDetails apartment={apartment} />
              <ApartmentPosts apartment={apartment} />
            </div>
          </div>
        </>
      );
    }

    //  if (!apartment) return 'no appartment';
    return (
      <div className="apartmentView">
        {item}
      </div>
    );
  }
}

ApartmentView.propTypes = {
  getApartentsByApartmentId: PropTypes.func.isRequired,
  apartment: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apartment: state.apartment,
  errors: state.errors
});

export default connect(mapStateToProps, { getApartentsByApartmentId })((ApartmentView));
