// .populate()

// Study
// .findOne({ title: 'Bob goes sledding' })
// .populate('timeslot') //This populates the author id with actual author information!
// .exec(function (err, story) {
//   if (err) return handleError(err);
//   console.log('The author is %s', story.author.name);
//   // prints "The author is Bob Smith"
// });

// .virtual()

// Virtual for author's full name
// AuthorSchema
// .virtual('name')
// .get(function () {
//   return this.family_name + ', ' + this.first_name;
// });

// // Virtual for author's lifespan
// AuthorSchema
// .virtual('lifespan')
// .get(function () {
//   return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
// });

// // Virtual for author's URL
// AuthorSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/author/' + this._id;
// });

// Validation

// var breakfastSchema = new Schema({
//     eggs: {
//       type: Number,
//       min: [6, 'Too few eggs'],
//       max: 12,
//       required: [true, 'Why no eggs?']
//     },
//     drink: {
//       type: String,
//       enum: ['Coffee', 'Tea', 'Water',]
//     }
//   });
