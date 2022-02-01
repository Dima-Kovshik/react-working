import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './infoUser.jsx';

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
});
