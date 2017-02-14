var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var albumSchema = new Schema({
	title: String,
	artist: String,
	releaseDate: String,
	genre: [String]
})

var Album = mongoose.model("Album", albumSchema);

module.exports = {Album: Album}