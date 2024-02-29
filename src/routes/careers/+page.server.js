import { Job } from '../../lib/models/job.js';

export const load = async () => {
	let jobs = await Job.find().lean();
	// console.log(jobs);
	jobs = JSON.parse(JSON.stringify(jobs));
	jobs = jobs.reverse();
	return {
		jobs
	};
};
