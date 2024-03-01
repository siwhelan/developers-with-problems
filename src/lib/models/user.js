import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// const hashCost = 12;

const UserSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			required: true
		},
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		hashed_password: { type: String, required: true },
		followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
		following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
		avatar: { type: String },
		bio: { type: String },
		social: { type: Object }
	},
	{ _id: false }
);

// UserSchema.pre('save', function (next) {
// 	const user = this;
// 	if (!user.isModified('password')) return next();
// 	bcrypt.genSalt(hashCost, function (err, salt) {
// 		if (err) return next(err);
// 		bcrypt.hash(user.password, salt, function (err, hash) {
// 			if (err) return next(err);
// 			user.password = hash;
// 			next();
// 		});
// 	});
// });

export const User = mongoose.model('User', UserSchema);
