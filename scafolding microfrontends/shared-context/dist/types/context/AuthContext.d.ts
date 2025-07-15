import React, { ReactNode } from 'react';
interface User {
    id: string;
    name: string;
    email: string;
}
interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (userData: User) => void;
    logout: () => void;
}
export declare const AuthProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useAuthContext: () => AuthContextType;
export {};
