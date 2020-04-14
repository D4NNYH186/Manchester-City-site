const {Schema, model} = require('mongoose');

const user = new Schema({
	username: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true}
});

user.statics.exists = async function (email) {
	let existingUser = await this.findOne({email});
	
	if(existingUser) {
		return true;
	}

	return false; 
}

module.exports = model('users', user)