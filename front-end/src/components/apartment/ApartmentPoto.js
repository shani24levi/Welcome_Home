
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import { getApartentsByApartmentId } from '../../actions/apartmentsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ApartmentPotos extends Component {
  render() {
    const { apartment } = this.props;
    console.log('apartment', apartment)

    //for gellary :
    const useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 500,
        height: 450,
      },
    }));

    const classes = useStyles();

    return (
      <div className={classes.root} className="gallury">
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {apartment.picturs.map(tile => (
            <GridListTile key={tile.img} >
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}


ApartmentPotos.propTypes = {
  getApartentsByApartmentId: PropTypes.func.isRequired,
  getCurrentApartment: PropTypes.func.isRequired,
  apartment: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apartment: state.apartment,
  errors: state.errors
});

export default connect(mapStateToProps, { getApartentsByApartmentId })((ApartmentPotos)
);

