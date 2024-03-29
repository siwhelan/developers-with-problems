import mongoose from 'mongoose';
import { User } from './src/lib/models/user.js';
import { Resource } from './src/lib/models/resource.js';
import { Post } from './src/lib/models/post.js';
import { Event } from './src/lib/models/event.js';
import { Comment } from './src/lib/models/comment.js';
import { Job } from './src/lib/models/job.js';
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO_URI;

mongoose
	.connect(uri)
	.then(() => console.log('Connected to MongoDB'))
	.catch((error) => console.error('Error connecting to MongoDB:', error));

async function insertSampleData() {
	// delete all data
	await User.deleteMany({});
	await Resource.deleteMany({});
	await Post.deleteMany({});
	await Event.deleteMany({});
	await Comment.deleteMany({});
	await Job.deleteMany({});
	console.log('Deleted all data');
	try {
		// Insert sample users
		const insertedUsers = await User.insertMany([
			{ _id: '123', username: 'user1', email: 'user1@example.com', hashed_password: 'password1' },
			{ _id: '456', username: 'user2', email: 'user2@example.com', hashed_password: 'password2' },
			{ _id: '789', username: 'user3', email: 'user3@example.com', hashed_password: 'password3' }
		]);
		console.log(`${insertedUsers.length} users inserted successfully.`);

		// Get the IDs of the inserted users
		const userIds = insertedUsers.map((user) => user._id);

		// Insert sample resources
		const insertedResources = await Resource.insertMany([
			{
				title: 'Resource 1',
				url: 'https://example.com/resource1',
				description: 'Description of Resource 1',
				userID: userIds[0]
			},
			{
				title: 'Resource 2',
				url: 'https://example.com/resource2',
				description: 'Description of Resource 2',
				userID: userIds[1]
			},
			{
				title: 'Resource 3',
				url: 'https://example.com/resource3',
				description: 'Description of Resource 3',
				userID: userIds[2]
			}
		]);
		console.log(`${insertedResources.length} resources inserted successfully.`);

		// Insert sample posts
		const insertedPosts = await Post.insertMany([
			{ title: 'Post 1', content: 'Content of Post 1', userID: userIds[0] },
			{ title: 'Post 2', content: 'Content of Post 2', userID: userIds[1] },
			{ title: 'Post 3', content: 'Content of Post 3', userID: userIds[2] }
		]);
		console.log(`${insertedPosts.length} posts inserted successfully.`);

		// Insert sample events
		const insertedEvents = await Event.insertMany([
			{
				title: 'Event 1',
				startDate: new Date(),
				endDate: new Date(),
				location: 'Location of Event 1',
				description: 'Description of Event 1',
				free: true,
				attending: [userIds[0]],
				interested: [userIds[1]]
			},
			{
				title: 'Event 2',
				startDate: new Date(),
				endDate: new Date(),
				location: 'Location of Event 2',
				description: 'Description of Event 2',
				free: false,
				attending: [userIds[1]],
				interested: [userIds[2]]
			},
			{
				title: 'Event 3',
				startDate: new Date(),
				endDate: new Date(),
				location: 'Location of Event 3',
				description: 'Description of Event 3',
				free: true,
				attending: [userIds[2]],
				interested: [userIds[0]]
			}
		]);
		console.log(`${insertedEvents.length} events inserted successfully.`);

		// Insert sample comments
		const insertedComments = await Comment.insertMany([
			{ content: 'Comment 1 content', userID: userIds[0], postID: insertedPosts[0]._id },
			{ content: 'Comment 2 content', userID: userIds[1], postID: insertedPosts[1]._id },
			{ content: 'Comment 3 content', userID: userIds[2], postID: insertedPosts[2]._id }
		]);
		console.log(`${insertedComments.length} comments inserted successfully.`);

		// Insert sample jobs
		const insertedJobs = await Job.insertMany([
			{
				title: 'Junior Software Engineer',
				description: "We're looking for a junior software engineer to join our team.",
				salary: '£30,000',
				company: 'Acme Corp',
				location: 'London',
				tags: ['JavaScript', 'Node.js', 'React'],
				userID: userIds[0]
			},
			{
				title: 'Apprentice Software Developer',
				description: 'UK Apprenticeship in Software Development.',
				salary: '£29,000',
				company: 'Tech Co',
				location: 'Manchester',
				tags: ['Python', 'Django', 'Flask'],
				userID: userIds[1]
			},
			{
				title: 'Cyber Security Analyst',
				description: 'Entry Level Cyber Security Analyst role.',
				salary: '£35,000',
				company: 'X Corp',
				location: 'Birmingham',
				tags: ['Cyber Security', 'Networking'],
				userID: userIds[2]
			}
		]);

		console.log(`${insertedJobs.length} jobs inserted successfully.`);

		// Close the MongoDB connection
		await mongoose.connection.close();
		console.log('Disconnected from MongoDB');
	} catch (error) {
		console.error('Error inserting sample data:', error);
	}
}

insertSampleData();
