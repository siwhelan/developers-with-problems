import mongoose from 'mongoose';
import { User } from './src/lib/models/user.js';
import { Resource } from './src/lib/models/resource.js';
import { Post } from './src/lib/models/post.js';
import { Event } from './src/lib/models/event.js';
import { Comment } from './src/lib/models/comment.js';
import { Job } from './src/lib/models/job.js';
import { generateId } from 'lucia';
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
		const user1 = await User.create({
			_id: generateId(15),
			username: 'scriptSavvy',
			email: 'user1@example.com',
			hashed_password: 'password1'
		});
		const user2 = await User.create({
			_id: generateId(15),
			username: 'devDabbler',
			email: 'user2@example.com',
			hashed_password: 'password2'
		});
		const user3 = await User.create({
			_id: generateId(15),
			username: 'byteBard',
			email: 'user3@example.com',
			hashed_password: 'password3'
		});

		// console.log(`${insertedUsers.length} users inserted successfully.`);

		// Get the IDs of the inserted users
		const userIds = [user1._id, user2._id, user3._id];
		console.log(user1._id);
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
			// General Coding
			{
				title: 'React Hooks vs. Class Components',
				content:
					'Discuss the advantages and disadvantages of using React Hooks over class components, and when to choose one over the other.',
				userID: userIds[0],
				tags: ['general'],
				upvotes: [userIds[1], userIds[2]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Mastering Git: Tips and Tricks',
				content:
					'Learn advanced Git techniques for managing complex projects, including rebasing, cherry-picking, and stashing.',
				userID: userIds[1],
				tags: ['general'],
				upvotes: [userIds[2], userIds[1]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Implementing WebSockets in Node.js',
				content:
					'Explore how to build real-time applications using WebSockets in Node.js, with examples and best practices.',
				userID: userIds[2],
				tags: ['general'],
				upvotes: [userIds[0], userIds[1]],
				downvotes: [],
				timestamp: new Date()
			},

			// Job Search/Career Advice
			{
				title: 'Acing the Technical Interview',
				content:
					'Strategies and tips for preparing for technical interviews, including coding challenges, system design questions, and behavioral questions.',
				userID: userIds[1],
				tags: ['job'],
				upvotes: [userIds[0], userIds[1]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Negotiating Your Salary as a Developer',
				content:
					'Learn how to effectively negotiate your salary and benefits when receiving a job offer, with examples and real-world advice.',
				userID: userIds[0],
				tags: ['job'],
				upvotes: [userIds[2], userIds[1]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Building a Solid Developer Portfolio',
				content:
					'Tips and best practices for creating an impressive developer portfolio that showcases your skills and experience.',
				userID: userIds[1],
				tags: ['job'],
				upvotes: [userIds[0], userIds[1]],
				downvotes: [],
				timestamp: new Date()
			},

			// Events
			{
				title: 'React Conference 2024 - Early Bird Tickets',
				content:
					"Early bird tickets are now available for the React Conference 2024! Don't miss this opportunity to learn from industry experts and connect with the React community.",
				userID: userIds[2],
				tags: ['events'],
				upvotes: [userIds[0], userIds[1]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Python User Group Meetup - May 2024',
				content:
					"Join the Python User Group for our monthly meetup in May! This month, we'll be discussing best practices for writing clean and maintainable Python code.",
				userID: userIds[0],
				tags: ['events'],
				upvotes: [userIds[1], userIds[2]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Hackathon: Build the Future of Healthcare',
				content:
					'Calling all developers, designers, and healthcare professionals! Join us for a 48-hour hackathon to build innovative solutions for the healthcare industry.',
				userID: userIds[0],
				tags: ['events'],
				upvotes: [userIds[1], userIds[2]],
				downvotes: [],
				timestamp: new Date()
			},

			// News
			{
				title: 'New JavaScript Features in ECMAScript 2024',
				content:
					'Explore the latest features and improvements introduced in the ECMAScript 2024 specification, including enhanced module support and new syntax additions.',
				userID: userIds[1],
				tags: ['news'],
				upvotes: [userIds[0], userIds[2]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Google Releases TensorFlow 3.0',
				content:
					'Google has announced the release of TensorFlow 3.0, with significant performance improvements, new APIs, and better support for distributed training.',
				userID: userIds[2],
				tags: ['news'],
				upvotes: [userIds[0], userIds[1]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Microsoft Acquires GitHub for $75 Billion',
				content:
					"In a surprising move, Microsoft has acquired GitHub, the world's leading software development platform, for a staggering $75 billion.",
				userID: userIds[2],
				tags: ['news'],
				upvotes: [userIds[0], userIds[1], userIds[2]],
				downvotes: [],
				timestamp: new Date()
			}
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
