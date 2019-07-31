import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getAnimals, getDonations, hasError, isLoading} from '../../actions';
import {fetchData} from '../../util/apicalls';
import {DonationForm} from '../DonationForm/DonationForm';
// import {AnimalCards} from '../AnimalCards/AnimalCards';
// import { Donations } from '../Donations/Donations';


export class App extends Component {

  async componentDidMount(){
    await this.fetchAnimals()
    await this.fetchDonations()
  }

  fetchAnimals = async () => {
    if(!this.props.animals.length){
      try{
        const url = 'http://localhost:3001/api/v1/rescue-animals';
        const results = await fetchData(url);
        console.log(results)
        this.props.isLoading(true)
        this.props.getAnimals(results)
        this.props.hasError('')
        this.props.isLoading(false)
      } catch(error){
        this.props.hasError(error.message)
      }
    }
  }

  fetchDonations = async () => {
    if(!this.props.donations.length){
      try{
        const url = 'http://localhost:3001/api/v1/donations';
        const results = await fetchData(url);
        console.log(results)
        this.props.isLoading(true)
        this.props.getDonations(results)
        this.props.hasError('')
        this.props.isLoading(false)
      } catch(error){
        this.props.hasError(error.message)
      }
    }
  }

  // postDonations = async (donation) => {
  //     try{
  //       const url = 'http://localhost:3001/api/v1/donations';
  //       const options = {
  //         method: 'POST',
  //         headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify({
  //           ...donation
  //         })
  //       }
  //       const results = await fetchData(url, options);
  //       return results
  //     } catch(error){
  //       this.props.hasError(error.message)
  //     }
  //   }
  
  render(){

    const animals = this.props.animals.map(animal => {
      return (
        <article>
          <img src={animal.img} alt="animal"/>
          <p>{animal.name}</p>
          <p>{animal.species}</p>
          <p>{animal.description}</p>
        </article>
      )
    });

    const donations = this.props.donations.map(donation => {
      return (
        <article>
          <p>{donation.name}</p>
          <p>{donation.donation}</p>
        </article>
      )
    });

    return (
      <div>
        <DonationForm postDonation={this.postDonation} donations={this.props.donations}/>
        {/* {this.props.isLoading === true && <p>Loading...</p>}
        {this.props.isLoading === false && <section>{donations}</section>} */}
        {donations}
        {animals}
      </div>
    )}};

const mapStateToProps = (state) => ({
  animals: state.animals,
  donations: state.donations
})

const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimals(animals)),
  getDonations: donations => dispatch(getDonations(donations)),
  hasError: error => dispatch(hasError(error)),
  isLoading: loading => dispatch(isLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  animals: PropTypes.array,
  donations: PropTypes.array,
  getAnimals: PropTypes.func,
  getDonations: PropTypes.func,
  hasError: PropTypes.func,
  isLoading: PropTypes.func,
}

