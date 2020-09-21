const bcrypt = require('bcryptjs');

exports.seed = async function (knex) {
  await knex('users').insert([
    {
      username: 'coolguy123',
      password: bcrypt.hashSync('password', 10),
      fullName: 'John Doe',
      email: 'JohnDoe@gmail.com',
      address: '1408 Sandy Lane',
      city: 'Pleasantville',
      state: 'PA',
      owner: true
    },
    {
      username: 'niceguy456',
      password: bcrypt.hashSync('password', 10),
      fullName: 'Jane Doe',
      email: 'JaneDoe@gmail.com',
      address: '908 Maple Drive',
      city: 'Springfield',
      state: 'IL',
      owner: true
    },
    {
      username: 'larrydoe',
      password: bcrypt.hashSync('password', 10),
      fullName: 'Larry Doe',
      email: 'LarryDoe@gmail.com',
      address: '102 Bridgewater Avenue',
      city: 'Boise',
      state: 'ID',
      owner: true
    },
    {
      username: 'coolname',
      password: bcrypt.hashSync('password', 10),
      fullName: 'Pam Doe',
      email: 'PamDoe@gmail.com',
      address: '1408 Palm Lane',
      city: 'Eden',
      state: 'OH',
      owner: false
    },
    {
      username: 'lamename',
      password: bcrypt.hashSync('password', 10),
      fullName: 'Steve Doe',
      email: 'SteveDoe@gmail.com',
      address: '200 Oak Street',
      city: 'Bakersfield',
      state: 'CA',
      owner: false
    },
    {
      username: 'somename',
      password: bcrypt.hashSync('password', 10),
      fullName: 'Phil Doe',
      email: 'PhilDoe@gmail.com',
      address: '1029 High Street',
      city: 'Austin',
      state: 'TX',
      owner: false
    }
  ]);
};
