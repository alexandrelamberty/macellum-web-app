import { configureStore } from "@reduxjs/toolkit";

import analyticsReducer from "@/store/reducers/analytics.reducer";
import authReducer from "@/store/reducers/auth.reducer";
import calendarReducer from "@/store/reducers/calendar.reducer";
import cartReducer from "@/store/reducers/cart.reducer";
import customerReducer from "@/store/reducers/customer.reducer";
import dashboardReducer from "@/store/reducers/dashboard.reducer";
import notificationReducer from "@/store/reducers/notification.reducer";
import orderReducer from "@/store/reducers/order.reducer";
import productReducer from "@/store/reducers/product.reducer";
import profileReducer from "@/store/reducers/profile.reducer";
import providerReducer from "@/store/reducers/provider.reducer";
import reportReducer from "@/store/reducers/report.reducer";
import settingsReducer from "@/store/reducers/settings.reducer";
import teamReducer from "@/store/reducers/team.reducer";

// import loggerMiddleware from "redux-logger";

export const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
    auth: authReducer,
    calendars: calendarReducer,
    carts: cartReducer,
    customers: customerReducer,
    dashboard: dashboardReducer,
    orders: orderReducer,
    products: productReducer,
    profile: profileReducer,
    providers: providerReducer,
    notifications: notificationReducer,
    reports: reportReducer,
    settings: settingsReducer,
    team: teamReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: true,
      immutableCheck: true,
      // TODO: add logging middleware
      // logger: loggerMiddleware,
    }),
  devTools: import.meta.env.DEV,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {products: ProductState, customers: CustomerState, ...}
export type AppDispatch = typeof store.dispatch;
