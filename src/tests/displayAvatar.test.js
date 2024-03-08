import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import DisplayAvatar from '../components/DisplayAvatar.svelte';

describe('DisplayAvatar Component', () => {
	it('renders the DisplayAvatar component', () => {
		const mockAvatarData = {
			avatarUrl: 'test123'
		};

		render(DisplayAvatar, { props: mockAvatarData });
		const component = screen.getByRole('img');
		expect(component).toBeTruthy();
	});
});
