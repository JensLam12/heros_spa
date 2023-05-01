import { useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { AuthReducer } from './authReducer';
import { Types } from '../types';

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( AuthReducer, {}, init)

  const login = ( name = '' ) => {
    const user = {  id: '1',  name: name  };
    const action = { type: Types.login, payload: user }
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: Types.logout
    }
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ 
      ...authState,
      login: login,
      logout: logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}
