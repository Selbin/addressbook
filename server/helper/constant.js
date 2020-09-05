module.exports = {
  successMsg: 'Fetch Sucessful',
  errorMsg: 'Unable to fetch data, Please try again later',
  setResponseObj: (success, data, message, error) => {
    return { success, data, message, error }
  }
}