import type { RouteObject } from "react-router";
import HomePage from "./pages/home";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import ForgotPasswordPage from "./pages/auth/forgot-password";

export const routes: RouteObject[] = [
    {
        path: "/",
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
            { path: "/forgot-password", element: <ForgotPasswordPage /> },
            {
                path: "/dashboard",
                children: [
                    
                ]
            }
        ],
    }
]