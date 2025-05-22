import { auth } from '../../Firebase.config';
import { signOut } from 'firebase/auth';

// Handle logout functionality
export const logoutUser = async () => {
	try {
		await signOut(auth);
		return true;
	} catch (error) {
		console.error('Logout error:', error);
		throw error;
	}
};