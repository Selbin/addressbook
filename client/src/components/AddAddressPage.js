import React, { useState } from 'react'
import axios from 'axios'
import jsonData from '../settings/setting.json'
import { useForm } from 'react-hook-form'
import { withRouter } from 'react-router-dom'

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
  const { register, errors, handleSubmit } = useForm()

  const addAddress = () => {
    const url = api + 'add'
    axios.post(url, { firstName, lastName, phoneNo, email, notes, dob })
    props.history.push('/')
    window.location.reload()
  }

  return (
    <div className='container'>
      <form className='form-container' onSubmit={handleSubmit(addAddress)}>
        <h4>Address Info</h4>
        <label>
          First Name:
          <br />
          <input
            type='text'
            name='firstname'
            value={firstName}
            ref={register({
              required: 'Required',
              pattern: {
                value: /[A-Z]{3}[A-Z]*/i,
                message: 'Name should be atleast 3 letter long'
              }
            })}
            onChange={event => setFirstname(event.target.value)}
          />
        </label>
        {errors.firstname && <p className='error'> {errors.firstname.message}</p>}
        <label>
          Last Name: <br />
          <input
            type='text'
            name='lastname'
            value={lastName}
            ref={register({
              required: 'Required',
              message: 'Last name should not be empty'
            })}
            onChange={event => setLastName(event.target.value)}
          />
        </label>
        {errors.lastname && <p className='error'>{errors.lastname.message}</p>}

        <label>
          Phone Number:
          <br />{' '}
          <input
            type='number'
            name='phoneno'
            value={phoneNo}
            ref={register({
              required: 'Required',
              pattern: {
                value: /[0-9]{10}/,
                message: 'Invalid Phone number'
              }
            })}
            onChange={event => setPhoneno(event.target.value)}
          />
        </label>
        {errors.phoneno && <p className='error'>{errors.phoneno.message}</p>}
        <label>
          Email:
          <br />{' '}
          <input
            name='email'
            value={email}
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
              }
            })}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        {errors.email && <p className='error'> {errors.email.message}</p>}
        <label>
          Note: <br />
          <input
            type='textarea'
            name='note'
            value={notes}
            ref={register({
              required: 'Required',
              message: 'Note should not be empty'
            })}
            onChange={event => setNote(event.target.value)}
          />
        </label>
        {errors.note && <p className='error'>{errors.note.message} </p>}
        <label>
          Date of birth: <br />
          <input
            type='date'
            name='dob'
            value={formatDate(dob)}
            ref={register({
              required: 'Required',
              message: 'DOB is Mandatory'
            })}
            onChange={event => setDob(formatDate(event.target.value))}
          />
        </label>
        {errors.dob && <p className='error'> {errors.dob.message}</p>}
        <div>
          <button type='submit'>Save</button>
          <button onClick={() => props.history.push('/')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(AddAddressPage)
