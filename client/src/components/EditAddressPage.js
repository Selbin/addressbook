import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jsonData from '../settings/setting.json'
import { useParams } from 'react-router-dom'

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

const EditAddressPage = props => {
  console.log(props)
  const { id } = useParams()
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNo, setPhoneno] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNote] = useState('')
  const [dob, setDob] = useState('')

  const updateAddress = () => {
    const url = api + 'update/' + id
    console.log(dob)
    axios.put(url, { firstName, lastName, phoneNo, email, notes, dob })
  }

  useEffect(() => {
    const url = api + 'get/' + id
    axios.get(url).then(response => {
      setFirstname(response.data.data.first_name)
      setLastName(response.data.data.last_name)
      setPhoneno(response.data.data.phoneno)
      setEmail(response.data.data.email)
      setNote(response.data.data.notes)
      setDob(formatDate(response.data.data.dob))
    })
  }, [])
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
            value={firstName}
            onChange={event => setFirstname(event.target.value)}
          />
        </label>
        <label>
          Last Name: <br />
          <input
            type='text'
            name='lastname'
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <br />{' '}
          <input
            type='number'
            name='phoneno'
            value={phoneNo}
            onChange={event => setPhoneno(event.target.value)}
          />
        </label>
        <label>
          Email:
          <br />{' '}
          <input
            type='email'
            name='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Note: <br />
          <input
            type='textarea'
            name='note'
            value={notes}
            onChange={event => setNote(event.target.value)}
          />
        </label>
        <label>
          Date of birth: <br />
          <input
            type='date'
            name='dob'
            value={formatDate(dob)}
            onChange={event => setDob(formatDate(event.target.value))}
          />
        </label>
        <div>
          <a
            href={`/addressinfo/${id}`}
            className='button'
            onClick={updateAddress}
          >
            Save
          </a>
          <a href={`/addressinfo/${id}`} className='button'>
            Cancel
          </a>
        </div>
      </div>
    </div>
  )
}

export default EditAddressPage
