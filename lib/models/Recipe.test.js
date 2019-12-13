const mongoose = require('mongoose');
const Recipe = require('./Recipe');

describe('Recipe model', () => {
  it('has a required name', () => {
    const recipe = new Recipe();
    const { errors } = recipe.validateSync();

    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('has a name and directions field', () => {
    const recipe = new Recipe({
      name: 'Cookies',
      ingredients: [
        { name: 'flour', amount: 1, measurement: 'cup' }
      ],
      directions: [
        'preheat oven to 375',
        'mix ingredients',
        'put dough on cookie sheet',
        'bake for 10 minutes'
      ]
    });

    expect(recipe.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      name: 'Cookies',
      ingredients: [
        { _id: expect.any(mongoose.Types.ObjectId), name: 'flour', amount: 1, measurement: 'cup' }
      ],
      directions: [
        'preheat oven to 375',
        'mix ingredients',
        'put dough on cookie sheet',
        'bake for 10 minutes'
      ]
    });
  });

  // it('virtually populates the events for a recipe', () => {
  //   const recipe = new Recipe({
  //     name: 'Cookies',
  //     ingredients: [
  //       { name: 'flour', amount: 1, measurement: 'cup' }
  //     ],
  //     directions: [
  //       'preheat oven to 375',
  //       'mix ingredients',
  //       'put dough on cookie sheet',
  //       'bake for 10 minutes'
  //     ]
  //   });
  //   const event1 = new Event({
  //     recipeId: recipe._id,
  //     rating: 5,
  //     dateOfEvent: Date.now()
  //   });
  //   const event2 = new Event({
  //     recipeId: recipe._id,
  //     rating: 4,
  //     dateOfEvent: Date.now()
  //   });
  //   expect(recipe.events).toEqual({});
  // });
});
