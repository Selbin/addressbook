module.exports = {
  successMsg: 'Fetch Successful',
  updateSucessMsg: 'update Successful',
  errorMsg: 'Unable to fetch data, Please try again later',
  deleteSuccessMsg: 'Delete Sucessful',
  setResponseObj: (success, data, message, error) => {
    return { success, data, message, error }
  }
}