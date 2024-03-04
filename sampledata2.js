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
			{
				title: 'Introduction to React Hooks',
				content:
					'Learn how to use React Hooks to manage state and side effects in functional components.',
				userID: userIds[0],
				tags: ['react', 'javascript', 'frontend'],
				upvotes: ['user_id_2', 'user_id_3'],
				downvotes: [userIds[2]],
				timestamp: new Date()
			},
			{
				title: 'Best Practices for RESTful API Design',
				content:
					'Explore the principles and guidelines for designing RESTful APIs that are scalable, maintainable, and easy to use.',
				userID: userIds[1],
				tags: ['api', 'rest', 'backend'],
				upvotes: ['user_id_1'],
				downvotes: [userIds[2], userIds[0]],
				timestamp: new Date()
			},
			{
				title: 'Deploying Node.js Applications with Docker',
				content:
					'Learn how to containerize and deploy Node.js applications using Docker for easier scalability and portability.',
				userID: userIds[2],
				tags: ['docker', 'nodejs', 'deployment'],
				upvotes: [userIds[0], userIds[1]],
				downvotes: [],
				timestamp: new Date()
			},
			{
				title: 'Getting Started with Python Data Science',
				content:
					'Discover the essential libraries and tools for data science in Python, including NumPy, pandas, and scikit-learn.',
				userID: 'user_id_1',
				tags: ['python', 'datascience'],
				upvotes: ['user_id_3'],
				downvotes: ['user_id_2'],
				timestamp: new Date()
			},
			{
				title: 'Securing Your Web Applications',
				content:
					'Explore common security vulnerabilities in web applications and best practices for mitigating them, such as XSS, CSRF, and SQL injection.',
				userID: 'user_id_2',
				tags: ['security', 'webdev'],
				upvotes: ['user_id_1', 'user_id_3'],
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
