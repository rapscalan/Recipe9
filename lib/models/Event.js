const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  dateOfEvent: {
    type: Date,
    required: true
  },
  notes: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
});
schema.virtual('day').get(function() {
  const date = this.dateOfEvent;
  const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  return daysOfTheWeek[date.getDay()];
})
schema.virtual('month').get(function() {
  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const date = this.dateOfEvent;
  return month[date.getMonth()];
})
schema.virtual('year').get(function() {
  const year = this.dateOfEvent.getFullYear();
  return year;
})
module.exports = mongoose.model('Event', schema);
