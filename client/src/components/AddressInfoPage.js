import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jsonData from '../settings/setting.json'
import { useParams, Link } from 'react-router-dom'
const api = JSON.parse(JSON.stringify(jsonData)).api

const AddressInfoPage = props => {
  const [addressInfo, setAddressInfo] = useState([])
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    const url = api + 'get/' + id
    axios.get(url).then(response => {
      setAddressInfo(response.data.data)
    })
  }, [])
  return (
    <div className='container'>
      <table>
        <h4>Address Info</h4>
        <p>
          <b>Name:</b> {addressInfo.first_name + ' ' + addressInfo.last_name}
        </p>
        <p>
          <b>Phone Number:</b>
          {addressInfo.phoneno}
        </p>
        <p>
          <b>Email:</b> {addressInfo.email}
        </p>
        <p>
          <b>Note:</b>
          {addressInfo.notes}
        </p>
        <p>
          <b>Date of birth: </b>
          {new Date(addressInfo.dob).toDateString()}
        </p>
        <tf>
          <Link
            className='button'
            addressinfo={addressInfo}
            to={{
              pathname: `/addressinfo/update/${id}`,
              state: { addressInfo }
            }}
          >
            edit
          </Link>
        </tf>
      </table>
    </div>
  )
}

export default AddressInfoPage
