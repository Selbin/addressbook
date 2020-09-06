import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jsonData from '../settings/setting.json'
import { Link } from 'react-router-dom'

const api = JSON.parse(JSON.stringify(jsonData)).api

const AddressList = props => {
  const [addressList, setAddressList] = useState([])
  useEffect(() => {
    const url = api + 'get'
    axios.get(url).then(response => {
      setAddressList(response.data.data)
    })
  }, [])
  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th className='table-style'>SLNO</th>
            <th className='table-style'>Name</th>
            <th className='table-style'>phone Number</th>
          </tr>
        </thead>
        <tbody>
          {addressList.map((value, i) => {
            return (
              <tr id={value.user_id} key={i}>
                <td className='table-style'>
                  <Link to={`/addressinfo/${value.user_id}`}>{i + 1}</Link>
                </td>

                <td className='table-style'>
                  <Link to={`/addressinfo/${value.user_id}`}>
                    {value.first_name + ' ' + value.last_name}
                  </Link>
                </td>
                <td className='table-style'>
                  <Link to={`/addressinfo/${value.user_id}`}>
                    {value.phoneno}
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div><Link className='button' to='/add'>Add</Link></div>

    </div>
  )
}

export default AddressList
