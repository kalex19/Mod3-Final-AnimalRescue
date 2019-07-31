import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addDonation} from '../../actions';
import './DonationForm.css';

export class DonationForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      donation: null
    }
  }

handleSubmit = (e) => {
  e.preventDefault()
  const donation = {
    id: this.props.donations.length + 1,
    ...this.state
  }
  this.props.addDonation(donation)
  this.props.postDonation(donation)
  this.clearInputs()
}

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({
    [name]: value
  })
}

clearInputs = () => {
  this.setState({
    name: '',
    donation: null
  })
}

  render() {
    return (
      <div className="donationForm">
        <h2>Donate!</h2>
        <form onSubmit={this.handleSubmit} >
        <label className="label" for="name">Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <label className="label"  for="donation">Donation Amount</label>
          <input  type="text" name="donation" value={this.state.donation} onChange={this.handleChange}/>
          <input type="submit" placeholder="Donate!" className="submit-btn"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addDonation: donation => dispatch(addDonation(donation))
})

export default connect(null, mapDispatchToProps)(DonationForm)

DonationForm.propTypes = {
donation: PropTypes.object
}