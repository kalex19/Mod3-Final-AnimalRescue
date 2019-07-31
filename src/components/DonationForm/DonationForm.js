import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addDonation} from '../../actions';

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
    ...this.state,
    id: this.props.donations.length + 1
  }
  this.props.addDonation(donation)
  // this.props.postDonation(donation)
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
      <div>
        <h2>Donate!</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <input  type="text" name="donation" value={this.state.donation} onChange={this.handleChange}/>
          <input type="submit" placeholder="Donate!"/>
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