const { exeQuery } = require('../database/database')
const { successMsg, errorMsg, setResponseObj } = require('../helper/constant')

const addAddress = async (req, res) => {
  const { firstName, lastName, email, phoneNo, notes, dob } = req.body
  const query = 'insert into users (first_name, last_name, email, phoneno, notes, dob) values ($1,$2, $3, $4, $5, $6) returning *'
  try {
    const result = await exeQuery(query, [firstName, lastName, email, phoneNo, notes, dob])
    res.status(200).json(setResponseObj(true, result.rows[0], successMsg, null))
  } catch (error) {
    console.log(error)
    res.status(500).json(setResponseObj(false, null, errorMsg, errorMsg))
  }
}

const getAddress = async (req, res) => {
  const query = 'select first_name, last_name, user_id from users'
  try {
    const result = await exeQuery(query)
    res.status(200).json(setResponseObj(true, result.rows[0], successMsg, null))
  } catch (error) {
    console.log(error)
    res.status(500).json(setResponseObj(false, null, errorMsg, errorMsg))
  }
}
module.exports = { addAddress, getAddress }
