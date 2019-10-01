// 'use strict';

// // const db = require('../server/db');
// const { User, db } = require('../server/db/models');

// let usersArr = [];
// for (let i = 1; i < 101; i++) {
//   let newUser = {
//     firstName: 'Cody',
//     lastName: 'Dog',
//     email: 'cody@gmail.com',
//     password: '1234',
//     height: 70,
//     weight: 180,
//     age: 65,
//     cupsRecc: 0,
//     cupsRem: 0,
//     salt: 'alsidghsl',
//   };
//   usersArr.push(newUser);
// }

// async function seed() {
//   try {
//     await db.sync({ force: true });
//     console.log(green('db synced!'));
//   } catch (error) {
//     console.error(err);
//   }

//   // const users = await Promise.all(
//   //   usersArr.map(user => {
//   //     return User.create(user);
//   //   })
//   // );

//   // console.log(`seeded ${users.length} users`);
//   // console.log(`seeded successfully`);
// }

// // seed();
// // // // We've separated the `seed` function from the `runSeed` function.
// // // // This way we can isolate the error handling and exit trapping.
// // // // The `seed` function is concerned only with modifying the database.
// // async function runSeed() {
// //   console.log('seeding...');
// //   try {
// //     await seed();
// //   } catch (err) {
// //     console.error(err);
// //     process.exitCode = 1;
// //   } finally {
// //     console.log('closing db connection');
// //     await db.close();
// //     console.log('db connection closed');
// //   }
// // }

// // // Execute the `seed` function, IF we ran this module directly (`node seed`).
// // // `Async` functions always return a promise, so we can use `catch` to handle
// // // any errors that might occur inside of `seed`.
// // if (module === require.main) {
// //   runSeed();
// // }

// // // we export the seed function for testing purposes (see `./seed.spec.js`)
// // module.exports = seed;

// // const http = require('http');
// // const { User } = require('../server/db/models');
// // const app = require('../index');
// // const server = http.createServer(app);

// // const PORT = 3000;

// // const init = async () => {
// //   //sync creates the table if it does not exist. alter true creates the tables and makes any changes to keep the modules in sync
// //   await User.sync();
// //   server.listen(PORT, () => {
// //     console.log(`Server is listening on port ${PORT}!`);
// //   });
// // };

// // init();
