const request = require('supertest')
const { describe, it } = require('mocha')
const app = require('../app')
let id = ''

describe('POST /addressbook/add', () => {
  it('responds with json containing stored data', done => {
    request(app)
      .post('/addressbook/add')
      .send({
        firstName: 'niya',
        lastName: 'C F',
        email: 'niya@gmail.com',
        phoneNo: '7907072823',
        notes: 'hello world',
        dob: '1997-05-27'
      })
      .expect(200)
      .expect(res => {
        id = res.body.data.user_id
      })
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })
})

describe('GET addressbook/get', () => {
  it('responds with json containing all addresses', done => {
    request(app)
      .get('/addressbook/get')
      .expect(200)
      .expect(res => {})
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })
})

describe('GET addressbook/get/:id', () => {
  it('responds with json containing full address of given id', done => {
    request(app)
      .get(`/addressbook/get/${id}`)
      .expect(200)
      .expect(res => {})
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })
})

describe('PUT /addressbook/update/:id', () => {
  it('responds with json containing updated data', done => {
    request(app)
      .put(`/addressbook/update/${id}`)
      .send({
        firstName: 'niyamol',
        lastName: 'C F',
        email: 'niya@gmail.com',
        phoneNo: '7907072823',
        notes: 'hello world',
        dob: '1997-05-27'
      })
      .expect(200)
      .expect(res => {})
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })
})

describe('DELETE /addressbook/delete/:id', () => {
  it('responds with json containing deleted data', done => {
    request(app)
      .delete(`/addressbook/delete/${id}`)
      .expect(200)
      .expect(res => {})
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })
})
