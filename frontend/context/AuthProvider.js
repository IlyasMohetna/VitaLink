import React, { createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import axiosConfig from '../helpers/axiosConfig';
import { router } from 'expo-router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('evoked');
  if (user) {
    console.log('called');
    router.replace("/appointments");
  } else {
    router.replace("/landing");
  }
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
                name: response.data.data.user.name,
                email: response.data.data.user.email
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
              console.log('here',error);
              setUser(null);
              SecureStore.deleteItemAsync('user');
              setError(error.response.data.message);
              setIsLoading(false);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};