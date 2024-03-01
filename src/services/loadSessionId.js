export const loadSessionId = async (cookies) => {
	const sessionId = cookies.get('session');
	console.log('Session ID:', sessionId);
	return sessionId;
};
