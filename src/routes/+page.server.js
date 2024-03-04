// src/routes/+page.server.js
import { Post } from '../lib/models/post.js';
import { Event } from '../lib/models/Event.js';
import { Job } from '../lib/models/Job.js';

export const load = async () => {
	let posts = await Post.find().lean();
	let events = await Event.find().lean();
	let jobs = await Job.find().lean();
	posts = JSON.parse(JSON.stringify(posts)).reverse().slice(0, 10);
	events = JSON.parse(JSON.stringify(events));
	jobs = JSON.parse(JSON.stringify(jobs));
	console.log('jobs:', jobs);
	return { posts, events, jobs };
};
