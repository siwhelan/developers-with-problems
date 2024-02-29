import { assert, test, describe } from 'vitest';
import { load } from '../../src/routes/careers/+page.server.js';
import { Job } from '../../src/lib/models/job.js';

describe('load function', () => {
	test('load returns all jobs in the db', async () => {
		// Mock the Job.find().lean() call
		const mockJobs = [{ title: 'Job 1' }, { title: 'Job 2' }];
		Job.find = () => ({
			lean: () => Promise.resolve(mockJobs)
		});

		const result = await load();

		assert(result.jobs, mockJobs);
	});

	test('load returns empty array when no jobs in db', async () => {
		// Mock the Job.find().lean() call
		Job.find = () => ({
			lean: () => Promise.resolve([])
		});

		const result = await load();

		assert(result.jobs, []);
	});
});
