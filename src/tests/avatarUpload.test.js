import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import AvatarUpload from '../components/AvatarUpload.svelte';

describe('AvatarUpload Component', () => {
	it('renders the avatar upload component', () => {
		render(AvatarUpload);
		const formElement = screen.getByRole('button');
		expect(formElement).toBeTruthy();
		expect(formElement.textContent).toBe('Upload Avatar');
	});
});
