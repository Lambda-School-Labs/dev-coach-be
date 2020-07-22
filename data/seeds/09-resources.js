const moment = require('moment')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
        title: 'Building a cat image generator with Unsplash', 
        description: 'An image generator worthy of our cat overlords', 
        link: 'https://dev.to/technicallymandi/building-a-cat-image-generator-with-unsplash--4f6j', 
        thumbnail: 'https://source.unsplash.com/CVS4kWJaYLs',
        runDate: moment().utc().format(),
        user_id: 1
        },
        {
        title: 'How to build forms with React Hook Form', 
        description: 'Goodbye Formik!', 
        link: 'https://react-hook-form.com/', 
        thumbnail: 'https://source.unsplash.com/95YRwf6CNw8',
        runDate: moment().utc().format(),
        user_id: 2
        },
        {
          title: 'Non-Technical Skills Every Developer Needs', 
          description: 'What I wish I knew before', 
          link: 'https://dev.to/chechenev/non-technical-skills-every-developer-needs-j58', 
          thumbnail: 'https://source.unsplash.com/l4cSSdNrqak',
          runDate: moment().utc().format(),
          user_id: 5
        },
        {
          title: 'What Are Code Smells?', 
          description: 'Learning code smells is an important part of creating and maintaining quality code.', 
          link: 'https://react-hook-form.com/', 
          thumbnail: 'https://source.unsplash.com/1uj4f2j0H4Q',
          runDate: moment().utc().format(),
          user_id: 6
        },
      ]);
    });
};
