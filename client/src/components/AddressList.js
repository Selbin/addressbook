import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jsonData from '../settings/setting.json'

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
              <tr key={i} id={value.user_id}>
                <td className='table-style'>{i + 1}</td>
                <td className='table-style'>{value.first_name + ' ' + value.last_name}</td>
                <td className='table-style'> {value.phoneno}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AddressList
