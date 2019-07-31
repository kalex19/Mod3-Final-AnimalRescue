import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getAnimals, getDonations, hasError} from '../../actions';
import {fetchData} from '../../util/apicalls';

export class App extends Component {

  async componentDidMount(){
    await this.fetchAnimals()
  }

  fetchAnimals = async () => {
    if(!this.props.animals.length){
      try{
        const url = 'http://localhost:3001/api/v1/rescue-animals';
        const results = await fetchData(url);
        console.log(resutls)
        this.props.getAnimals(results)
      } catch(error){
        this.props.hasError(error.message)
      }
    }
  }


  render() {
    // const animal = this.props.animals.map(animals => {
    //   return (
    //     <article>
    //       <p></p>
    //     </article>
    //   )
    // }

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
  getDonations: donations => dispatch(getDonations(donations)),
  hasError: error => dispatch(hasError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  animals: PropTypes.array,
  donations: PropTypes.array,
}

