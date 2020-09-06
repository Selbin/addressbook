const { setResponseObj } = require('../helper/constant')

const checkFields = (req, res, next) => {
  const { firstName, lastName, email, phoneNo, notes, dob } = req.body
  if (firstName.length < 3) return res.status(422).json(setResponseObj(false, null, 'First name length should be atleast 3', 'First name doesn\'t meet the requirement'))
  else if (!lastName)  return res.status(422).json(setResponseObj(false, null, 'Please provide last name', 'Last name is empty'))
  else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) return res.status(422).json(setResponseObj(false, null, 'Please provide a valid email id', 'invalid Email id'))
  else if (phoneNo.length !== 10) return res.status(422).json(setResponseObj(false, null, 'Please provide a valid phone number', 'Phone number is invalid'))
  else if (!notes) return res.status(422).json(setResponseObj(false, null, 'Note can\'t be empty', 'empty note'))
  else if (!(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(dob))) return res.status(422).json(setResponseObj(false, null, 'please follow yyyy-mm-dd format', 'Invalid date'))
  else next()
  // if (dob == null || dob == "" || !pattern.test(dob)) {
}

module.exports = { checkFields }
