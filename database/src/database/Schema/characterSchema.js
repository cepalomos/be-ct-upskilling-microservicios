const { Schema } = require('mongoose');

const characterSchema = new Schema({
  "_id": String,
  "name": String,
  "height": String,
  "mass": String,
  "hair_color": String,
  "skin_color": String,
  "eye_color": String,
  "birth_year": String,
  "gender": String,
  "homeworld": { type: String, ref: "Planet" },
  "films": [{ type: String, ref: "Film" }]
});

characterSchema.static(
  'list',
  function () {
    return this.find()
      .populate("homeworld", ["_id", "name"])
      .populate("films", ["_id", "title"]);
  });

module.exports = characterSchema;