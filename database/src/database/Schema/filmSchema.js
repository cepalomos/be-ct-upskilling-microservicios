const { Schema } = require('mongoose');

const filmSchema = new Schema({
  "_id": String,
  "title": String,
  "opening_crawl": String,
  "director": String,
  "producer": String,
  "release_date": String,
  "characters": [{ type: String, ref: "Character" }],
  "planets": [{ type: String, ref: "Planet" }]
}, {
  statics: {
    list() {
      return this.find()
      .populate("characters", ["_id", "name"])
      .populate("planets", ["_id", ""]);
    }
  }
});

module.exports = filmSchema;