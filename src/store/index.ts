import {
    AnalyticsApi,
    AuthApi,
    CalendarApi,
    CartApi,
    CustomerApi,
    OrderApi,
    ProductApi,
    ProviderApi,
    ReportApi,
    TeamApi,
    UserApi,
} from "@eevos/macellum-api-client-typescript";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";

import analyticsReducer from "@/store/reducers/analytics.reducer";
import authReducer from "@/store/reducers/auth.reducer";
import calendarReducer from "@/store/reducers/calendar.reducer";
import cartReducer from "@/store/reducers/cart.reducer";
import customerReducer from "@/store/reducers/customer.reducer";
import dashboardReducer from "@/store/reducers/dashboard.reducer";
import notificationReducer from "@/store/reducers/notification.reducer";
import orderReducer from "@/store/reducers/order.reducer";
import productReducer from "@/store/reducers/product.reducer";
import providerReducer from "@/store/reducers/provider.reducer";
import reportReducer from "@/store/reducers/report.reducer";
import settingsReducer from "@/store/reducers/settings.reducer";
import teamReducer from "@/store/reducers/team.reducer";

const rootReducer = combineReducers({
    analytics: analyticsReducer,
    auth: authReducer,
    calendars: calendarReducer,
    carts: cartReducer,
    customers: customerReducer,
    dashboard: dashboardReducer,
    orders: orderReducer,
    products: productReducer,
    providers: providerReducer,
    notifications: notificationReducer,
    reports: reportReducer,
    settings: settingsReducer,
    teams: teamReducer,
    users: teamReducer,
});

export type StoreThunk = {
    analytics: AnalyticsApi;
    auth: AuthApi;
    calendars: CalendarApi;
    carts: CartApi;
    customers: CustomerApi;
    orders: OrderApi;
    products: ProductApi;
    providers: ProviderApi;
    reports: ReportApi;
    settings: UserApi;
    teams: TeamApi;
    users: UserApi;
};

const API_URL = import.meta.env.VITE_API_URL || "sdfsdfsdf";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: <StoreThunk>{
                    analytics: new AnalyticsApi({
                        basePath: API_URL,
                    }),
                    auth: new AuthApi({
                        basePath: API_URL,
                    }),
                    calendars: new CalendarApi({
                        basePath: API_URL,
                    }),
                    carts: new CartApi({
                        basePath: API_URL,
                    }),
                    customers: new CustomerApi({
                        basePath: API_URL,
                    }),
                    orders: new OrderApi({
                        basePath: API_URL,
                    }),
                    overviews: new AnalyticsApi({
                        basePath: API_URL,
                    }),
                    products: new ProductApi({
                        basePath: API_URL,
                    }),
                    providers: new ProviderApi({
                        basePath: API_URL,
                    }),
                    reports: new ReportApi({
                        basePath: API_URL,
                    }),
                    settings: new UserApi({
                        basePath: API_URL,
                    }),
                    teams: new TeamApi({
                        basePath: API_URL,
                    }),
                    users: new UserApi({
                        basePath: API_URL,
                    }),
                },
            },
            serializableCheck: false,
            immutableCheck: true,
            logger: loggerMiddleware,
        }),
    devTools: process.env.NODE_ENV !== "production",
    //   preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
