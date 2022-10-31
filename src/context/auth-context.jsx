import React, {createContext, useState} from 'react';

export const AuthContext = createContext({
	token: '',
	setToken: () => {},
});

const AuthContextProvider = ({children}) => {
	const [token, setToken] = useState(null);
	return (
		<AuthContext.Provider value={{token, setToken}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
