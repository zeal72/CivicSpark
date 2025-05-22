import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../../Firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, get } from 'firebase/database';

// Create context
const UserAuthContext = createContext();

// Provider component
export const UserAuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [userProfile, setUserProfile] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			setCurrentUser(user);

			if (user) {
				try {
					// Fetch user profile data from Firebase Realtime Database
					const userRef = ref(db, `users/${user.uid}`);
					const snapshot = await get(userRef);

					if (snapshot.exists()) {
						setUserProfile(snapshot.val());
					} else {
						console.log("No user profile data found");
					}
				} catch (error) {
					console.error("Error fetching user profile:", error);
				}
			} else {
				setUserProfile(null);
			}

			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const value = {
		currentUser,
		userProfile,
		loading
	};

	return (
		<UserAuthContext.Provider value={value}>
			{!loading && children}
		</UserAuthContext.Provider>
	);
};

// Custom hook to use the auth context
export const useUserAuth = () => {
	return useContext(UserAuthContext);
};

export default UserAuthContext;