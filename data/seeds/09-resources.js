const moment = require('moment')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
        title: 'Lorem Ipsum', 
        description: 'Lorem Ipsom delores', 
        link: 'google.com', 
        thumbnail: 'https://zartnerds.files.wordpress.com/2015/10/thumbnail.png?w=676',
        runDate: moment().utc().format(),
        user_id: 1
        }
      ]);
    });
};
