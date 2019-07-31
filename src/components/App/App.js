import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getAnimals, getDonations} from '../../actions';gi

export class App extends Component {

  render() {
    // const animal = this.props.animals.map(animals => {
    //   return (
    //     <article>
    //       <p></p>
    //     </article>
    //   )
    // })
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  animals: state.animals,
  donations: state.donations
})

const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimals(animals)),
  getDonations: donations => dispatch(getDonations(donations))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  animals: PropTypes.array,
  donations: PropTypes.array,
}

