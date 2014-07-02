var Schema = mongoose.Schema;

var GorillaSchema = new Schema({
  name : String
});

module.exports = db.model('Gorilla', GorillaSchema);
