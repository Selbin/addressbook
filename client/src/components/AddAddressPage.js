import React, { useState } from 'react'
import axios from 'axios'
import jsonData from '../settings/setting.json'

const api = JSON.parse(JSON.stringify(jsonData)).api

const formatDate = dateString => {
  const date = new Date(dateString)
  let month = '' + (date.getMonth() + 1)
  let day = '' + date.getDate()
  const year = date.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const AddAddressPage = props => {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNo, setPhoneno] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNote] = useState('')
  const [dob, setDob] = useState('')

  const addAddress = () => {
    const url = api + 'add'
    axios.post(url, { firstName, lastName, phoneNo, email, notes, dob })
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <h4>Address Info</h4>
        <label>
          First Name:
          <br />
          <input
            type='text'
            name='firstname'
            onChange={event => setFirstname(event.target.value)}
          />
        </label>
        <label>
          Last Name: <br />
          <input
            type='text'
            name='lastname'
            onChange={event => setLastName(event.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <br />{' '}
          <input
            type='number'
            name='phoneno'
            onChange={event => setPhoneno(event.target.value)}
          />
        </label>
        <label>
          Email:
          <br />{' '}
          <input
            type='email'
            name='email'
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Note: <br />
          <input
            type='textarea'
            name='note'
            onChange={event => setNote(event.target.value)}
          />
        </label>
        <label>
          Date of birth: <br />
          <input
            type='date'
            name='dob'
            onChange={event => setDob(formatDate(event.target.value))}
          />
        </label>
        <div>
          <a
            href='/'
            className='button'
            onClick={addAddress}
          >
            Save
          </a>
          <a href='/' className='button'>
            Cancel
          </a>
        </div>
      </div>
    </div>
  )
}

export default AddAddressPage
