import { describe, it, expect, vi } from 'vitest';
import { handle } from '../../hooks.server.js'; // import the handle function

// Mock dependencies
vi.mock('./routes/login/+page.server.js', () => {
	const _lucia = {
		validateSession: vi.fn().mockReturnValue({ user: {}, session: {} }),
		createSessionCookie: vi.fn(),
		createBlankSessionCookie: vi.fn()
	};

	return { _lucia };
});

describe('Handle function', () => {
	it('should handle event without session', async () => {
		const event = {
			cookies: {
				get: vi.fn().mockReturnValue(null),
				set: vi.fn()
			},
			locals: {}
		};

		await handle({ event, resolve: vi.fn() });

		expect(event.locals.user).toBe(null);
		expect(event.locals.session).toBe(null);
	});
});
