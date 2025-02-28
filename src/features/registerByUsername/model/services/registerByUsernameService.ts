/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { User, UserActions } from 'entities/User';
import { NavigateFunction } from 'react-router-dom';
import { RegisterByUsernameData } from '../types/registerByUsernameSchema';

interface RegisterByUsernameService {
  data: RegisterByUsernameData;
  navigate: NavigateFunction;
}

export const registerByUsernameService = createAsyncThunk<
  User,
  RegisterByUsernameService,
  ThunkConfig<string>
>('registerByUsernameService', async ({ data, navigate }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const response = await axios.post<User>(
      `http://localhost:8000/users/create`,
      {
        name: data.name,
        login: data.username,
        password: data.password
      },
      {
        headers: {
          authorization: '123',
        },
      },
    );

    if (!response.data) {
      rejectWithValue('Server error');
    }

    dispatch(UserActions.setAuthData(response.data));
    navigate('/');

    return response.data;
  } catch (e: any) {
    if (e.message) {
      return rejectWithValue(e.message);
    }

    return rejectWithValue('Error, something went wrong');
  }
});
