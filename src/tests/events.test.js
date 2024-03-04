import { describe, beforeEach, afterEach, it, expect } from 'vitest';
import { Event } from '../../src/lib/models/Event.js';
import { User } from '../../src/lib/models/user.js';
import { load } from '../../src/routes/events/+page.server.js';

describe('load', () => {
	// Save the original methods to restore them later
	const originalEventFind = Event.find;
	const originalUserFind = User.find;

	beforeEach(() => {
		// Replace the methods with mock functions
		Event.find = () => ({
			lean: () =>
				Promise.resolve([
					{ attending: ['user1', 'user2'], interested: ['user3'] },
					{ attending: ['user4'], interested: ['user1', 'user2'] }
				])
		});
		User.find = () => ({
			lean: () =>
				Promise.resolve([
					{ _id: 'user1', username: 'username1' },
					{ _id: 'user2', username: 'username2' },
					{ _id: 'user3', username: 'username3' },
					{ _id: 'user4', username: 'username4' }
				])
		});
	});

	afterEach(() => {
		// Restore the original methods
		Event.find = originalEventFind;
		User.find = originalUserFind;
	});

	it('should replace user IDs with usernames in the attending and interested fields', async () => {
		// Call the function under test
		const result = await load();

		// Verify the result
		expect(result.events).toEqual([
			{ attending: ['username1', 'username2'], interested: ['username3'] },
			{ attending: ['username4'], interested: ['username1', 'username2'] }
		]);
	});
});
