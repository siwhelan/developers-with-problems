import { test, expect, beforeEach } from 'vitest';
import { User } from '../../lib/models/user.js';

beforeEach(async () => {
	await User.deleteMany({});
});

test('has an email address', () => {
	const user = new User({
		_id: 'testId',
		username: 'Someone',
		email: 'someone@example.com',
		hashed_password: 'hashedPassword',
		followers: [],
		following: [],
		avatar: 'avatar.png',
		bio: 'This is a test user',
		social: {}
	});

	expect(user.email).toBe('someone@example.com');
});

test('has a password', () => {
	const user = new User({
		_id: 'testId',
		username: 'Someone',
		email: 'someone@example.com',
		hashed_password: 'hashedPassword',
		followers: [],
		following: [],
		avatar: 'avatar.png',
		bio: 'This is a test user',
		social: {}
	});

	expect(user.hashed_password).toBe('hashedPassword');
});

test('can list all users', async () => {
	const users = await User.find();
	expect(users).toEqual([]);
});

test('can save a user', async () => {
	const user = new User({
		_id: 'testId',
		username: 'Someone',
		email: 'someone@example.com',
		hashed_password: 'hashedPassword',
		followers: [],
		following: [],
		avatar: 'avatar.png',
		bio: 'This is a test user',
		social: {}
	});

	await user.save();
	const users = await User.find();

	expect(users[0].email).toBe('someone@example.com');
	expect(users[0].hashed_password).toBe('hashedPassword');
});
