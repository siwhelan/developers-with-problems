import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './src/lib/models/user.js';
import { Resource } from './src/lib/models/resource.js';
import { Post } from './src/lib/models/post.js';
import { Event } from './src/lib/models/event.js';
import { Comment } from './src/lib/models/comment.js';
import { Job } from './src/lib/models/job.js';

dotenv.config();

const uri = process.env.MONGO_URI;

mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((error) => console.error('Error connecting to MongoDB:', error));

async function insertSampleData() {
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
			{
				_id: 'user1id',
				username: 'user1',
				email: 'user1@example.com',
				hashed_password: 'password1'
			},
			{
				_id: 'user2id',
				username: 'user2',
				email: 'user2@example.com',
				hashed_password: 'password2'
			},
			{
				_id: 'user3id',
				username: 'user3',
				email: 'user3@example.com',
				hashed_password: 'password3'
			}
		]);

		// Insert resources
		await Resource.insertMany([
			{
				title: 'Resource 1',
				url: 'https://example.com/resource1',
				description: 'Description of Resource 1',
				tags: ['tag1', 'tag2'],
				timestamp: new Date(),
				upvotes: [insertedUsers[0]],
				downvotes: [insertedUsers[1]],
				userID: insertedUsers[0]
			}
			// More resources as needed
		]);

		// Insert posts
		await Post.insertMany([
			{
				title: 'Post 1',
				content: 'Content of Post 1',
				url: 'https://example.com/post1',
				tags: ['tag1', 'tag2'],
				userID: insertedUsers[0],
				upvotes: [],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Post 2',
				content: 'Content of Post 2',
				url: 'https://example.com/post2',
				tags: ['tag1', 'tag2'],
				userID: insertedUsers[0],
				upvotes: [],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Post 3',
				content: 'Content of Post 3',
				url: 'https://example.com/post3',
				tags: ['tag1', 'tag2'],
				userID: insertedUsers[0],
				upvotes: [],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Post 4',
				content: 'Content of Post 4',
				url: 'https://example.com/post4',
				tags: ['tag1', 'tag2'],
				userID: insertedUsers[0],
				upvotes: [],
				downvotes: [],
				timestamp: new Date()
			}
			// More posts as needed
		]);

		// Insert events
		await Event.insertMany([
			{
				title: 'Event 1',
				startDate: new Date(),
				endDate: new Date(),
				location: 'Location of Event 1',
				link: 'https://example.com/event1',
				description: 'Description of Event 1',
				free: true,
				attending: [insertedUsers[0]],
				interested: [insertedUsers[1]]
			},
			{
				title: 'Event 2',
				startDate: new Date(),
				endDate: new Date(),
				location: 'Location of Event 1',
				link: 'https://example.com/event1',
				description: 'Description of Event 1',
				free: true,
				attending: [insertedUsers[0]],
				interested: [insertedUsers[1]]
			},
			{
				title: 'Event 3',
				startDate: new Date(),
				endDate: new Date(),
				location: 'Location of Event 1',
				link: 'https://example.com/event1',
				description: 'Description of Event 1',
				free: true,
				attending: [insertedUsers[0]],
				interested: [insertedUsers[1]]
			}
			// More events as needed
		]);

		// Insert comments
		const insertedPosts = await Post.find(); // Retrieve posts to link comments correctly
		await Comment.insertMany([
			{
				content: 'Comment 1 content',
				userID: [insertedUsers[0]],
				postID: [insertedPosts[0]],
				timestamp: new Date()
			}
			// More comments as needed
		]);

		// Insert jobs
		await Job.insertMany([
			{
				title: 'Junior Software Engineer',
				description: "We're looking for a junior software engineer to join our team.",
				salary: '£30,000',
				company: 'Acme Corp',
				location: 'London',
				tags: ['JavaScript', 'Node.js', 'React'],
				timestamp: new Date(),
				closingDate: new Date(new Date().getTime() + 28 * 24 * 60 * 60 * 1000),
				userID: insertedUsers[0]
			},
			// More jobs as needed
			{
				title: 'Junior Software Engineer',
				description: "We're looking for a junior software engineer to join our team.",
				salary: '£30,000',
				company: 'Acme Corp',
				location: 'London',
				tags: ['JavaScript', 'Node.js', 'React'],
				timestamp: new Date(),
				closingDate: new Date(new Date().getTime() + 28 * 24 * 60 * 60 * 1000),
				userID: insertedUsers[0]
			}
		]);

		console.log('Sample data inserted successfully.');

		await mongoose.connection.close();
		console.log('Disconnected from MongoDB');
	} catch (error) {
		console.error('Error inserting sample data:', error);
	}
}

insertSampleData();
