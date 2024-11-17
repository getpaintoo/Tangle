import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
// import { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuthContext = () => {
//     return useContext(AuthContext);
// };

// export const AuthContextProvider = ({ children }) => {
//     const [authUser , setAuthUser ] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

//     // Функция для инициализации фейкового пользователя
//     const initializeFakeUser  = () => {
//         const fakeUser  = {
//             id: "1",
//             name: "Fake User",
//             email: "fakeuser@example.com"
//         };
//         setAuthUser (fakeUser );
//         localStorage.setItem("chat-user", JSON.stringify(fakeUser ));
//     };

//     // Пример использования эффекта для инициализации фейкового пользователя
//     useEffect(() => {
//         if (!authUser ) {
//             initializeFakeUser ();
//         }
//     }, [authUser ]);

//     return (
//         <AuthContext.Provider value={{ authUser , setAuthUser  }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };