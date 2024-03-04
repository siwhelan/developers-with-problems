import { Job } from '../../lib/models/job.js';

export const load = async () => {
	let jobs = await Job.find().lean();
	jobs = JSON.parse(JSON.stringify(jobs));
	return {
		jobs
	};
};
