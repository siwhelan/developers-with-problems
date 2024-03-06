import { User } from '../../lib/models/user.js';
import { v2 as cloudinary } from 'cloudinary';
import {
	CLOUDINARY_API_SECRET,
	CLOUDINARY_API_KEY,
	CLOUDINARY_CLOUD_NAME
} from '$env/static/private';

// Cloudinary configuration
cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
	secure: true
});

export const actions = {
	default: async ({ request, locals }) => {
		try {
			const formData = await request.formData();
			const fileData = formData.get('file');
			if (!fileData || typeof fileData === 'string') {
				return { status: 400, error: 'No file uploaded' };
			}
			const arrayBuffer = await fileData.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);
			const uploadResult = await new Promise((resolve, reject) => {
				const uploadStream = cloudinary.uploader.upload_stream(
					{ resource_type: 'auto' },
					(error, result) => {
						if (error) reject(error);
						else resolve(result);
					}
				);
				uploadStream.end(buffer);
			});

			// Manually pick the properties you need from the uploadResult object
			const result = {
				success: true,
				image: uploadResult.secure_url,
				public_id: uploadResult.public_id,
				version: uploadResult.version,
				format: uploadResult.format,
				resource_type: uploadResult.resource_type,
				created_at: new Date(uploadResult.created_at).toISOString(),
				bytes: uploadResult.bytes,
				width: uploadResult.width,
				height: uploadResult.height,
				url: uploadResult.url,
				secure_url: uploadResult.secure_url
			};
			console.log('Cloudinary URL:', result.secure_url);

			let loggedInUser;
			if (locals.user) {
				loggedInUser = locals.user.id;

				// Update the user's document in MongoDB
				await User.findByIdAndUpdate(loggedInUser, { avatar: result.secure_url });
				console.log('User avatar updated in MongoDB');
			} else {
				console.error('User is not defined in locals');
			}

			return result;
		} catch (er) {
			console.error(er);
			return { status: 500, error: 'Failed to upload image' };
		}
	}
};
