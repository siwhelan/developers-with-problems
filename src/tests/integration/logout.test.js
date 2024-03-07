import { describe, it, expect, vi, beforeEach } from 'vitest';
import { actions } from '../../routes/logout/+page.server.js';
import * as loginPage from '../../routes/login/+page.server.js';

// Ensure your mocks are set up correctly as before
vi.mock('../../routes/login/+page.server.js', () => ({
	_lucia: {
		invalidateSession: vi.fn().mockResolvedValue(undefined)
	},
	redirect: vi.fn().mockImplementation(() => ({}))
}));

vi.mock('@sveltejs/kit', () => ({
	redirect: vi.fn().mockImplementation(() => ({}))
}));

describe('Logout Actions', () => {
	beforeEach(() => {
		// Reset all mocks before each test
		vi.resetAllMocks();
	});

	it('should invalidate session and redirect on continue action', async () => {
		const mockLocals = { session: { id: 'testSessionId' } };

		await actions.continue({ locals: mockLocals });

		// Access the mocked _lucia through the mocked module import for loginPage
		expect(loginPage._lucia.invalidateSession).toHaveBeenCalledWith('testSessionId');
		expect(loginPage._lucia.invalidateSession).toHaveBeenCalledTimes(1);
	});
});
