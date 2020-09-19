const bcrypt = require('bcryptjs');

exports.seed = async function (knex) {
  await knex('renters').insert([
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
