const { exeQuery } = require('../database/database')
const { successMsg, updateSucessMsg, deleteSuccessMsg, errorMsg, setResponseObj } = require('../helper/constant')

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
  const query = 'select first_name, last_name, user_id, phoneno from users'
  try {
    const result = await exeQuery(query)
    res.status(200).json(setResponseObj(true, result.rows, successMsg, null))
  } catch (error) {
    console.log(error)
    res.status(500).json(setResponseObj(false, null, errorMsg, errorMsg))
  }
}

const getAddressById = async (req, res) => {
  const query = 'select * from users where user_id = $1'
  try {
    const result = await exeQuery(query, [req.params.id])
    res.status(200).json(setResponseObj(true, result.rows[0], successMsg, null))
  } catch (error) {
    console.log(error)
    res.status(500).json(setResponseObj(false, null, errorMsg, errorMsg))
  }
}

const editAddress = async (req, res) => {
  const { firstName, lastName, email, phoneNo, notes, dob } = req.body
  const query = 'update users set first_name = $1, last_name= $2, email = $3, phoneno = $4, notes = $5, dob = $6 where user_id = $7 returning *'
  try {
    const result = await exeQuery(query, [firstName, lastName, email, phoneNo, notes, dob, req.params.id])
    res.status(200).json(setResponseObj(true, result.rows[0], updateSucessMsg, null))
  } catch (error) {
    console.log(error)
    res.status(500).json(setResponseObj(false, null, errorMsg, errorMsg))
  }
}

const deleteAddress = async (req, res) => {
  const userId = req.params.id
  const query = 'delete from users where user_id = $1 returning *'
  try {
    const result = await exeQuery(query, [userId])
    res.status(200).json(setResponseObj(true, result.rows[0], deleteSuccessMsg, null))
  } catch (error) {
    console.log(error)
    res.status(500).json(setResponseObj(false, null, errorMsg, errorMsg))
  }
}

module.exports = { addAddress, getAddress, getAddressById, editAddress, deleteAddress }
