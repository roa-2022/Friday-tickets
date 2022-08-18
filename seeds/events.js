/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {id: 1, name: 'Franks Franks', type:'food festival', price:50, date:'19/08/2022', time:'5pm'},
    {id: 2, name: 'Beervana', type:'music festival', price:70, date:'19/08/2022', time:'6pm'},
    {id: 3, name: 'Songs without Jokes Tour', type:'comedy', price:30, date:'26/08/2022', time:'5pm'},
  ]);
};
