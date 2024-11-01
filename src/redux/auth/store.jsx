import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice"


 const store = configureStore ({
        reducer: {
              
               auth: authReducer,
        },
        // middleware:(getDefaultMiddleware) => 
        //         getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: true,
});

export default store;