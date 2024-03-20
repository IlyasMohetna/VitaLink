import React, { createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import axiosConfig from '../helpers/axiosConfig';
import { router } from 'expo-router';
import { useProtectedRoute } from "../hooks/useProtectedRoute";
import { AppState } from 'react-native'; // Import AppState to listen to app state changes

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useProtectedRoute(user);

  const refreshUserDetails = () => {
    if (user) {
      axiosConfig
        .get(`/api/user/`, {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((response) => {
          const user_details = response.data.user;
          const identity_details = response.data.identity;
          const updatedUser = {
            ...user,
            ...user_details,
            ...identity_details
          };
          setUser(updatedUser);
          SecureStore.setItemAsync('user', JSON.stringify(updatedUser));
        })
        .catch((error) => {
          console.error('Failed to refresh user details', error);
          // Handle error (e.g., show a notification, log out if token is invalid, etc.)
        });
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        refreshUserDetails();
      }
    });

    return () => subscription.remove();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        isLoading,
        login: (email, password) => {
          setIsLoading(true);
          axiosConfig
            .post('/api/login', {
              email,
              password,
              device_name: 'mobile',
            })
            .then(response => {
              const userResponse = {
                token: response.data.data.token,
                id: response.data.data.user.id,
                email: response.data.data.user.email,
                type: response.data.data.user.type,
                identity: response.data.data.identity
              };
              setUser(userResponse);
              setError(null);
              SecureStore.setItemAsync('user', JSON.stringify(userResponse));
              setIsLoading(false);
            })
            .catch(error => {
              setError( (error.response) ? error.response.data.message : 'Vous n\'etes pas connecté au réseau');
              setIsLoading(false);
            });
        },
        logout: () => {
          setIsLoading(true);
          axiosConfig.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${user.token}`;
          axiosConfig
            .post('/api/logout')
            .then(response => {
              setUser(null);
              SecureStore.deleteItemAsync('user');
              setError(null);
              setIsLoading(false);
            })
            .catch(error => {
              setUser(null);
              SecureStore.deleteItemAsync('user');
              setError(error.response.data.message);
              setIsLoading(false);
            });
        },
        refreshUserDetails, // Make this function available to your components
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};