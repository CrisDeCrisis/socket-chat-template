import { lazy } from "react";

export const RegisterPage = lazy(() => import("./Register"));
export const LoginPage = lazy(() => import("./Login"));
export const LoadingPage = lazy(() => import("./Loading"));
export const HomePage = lazy(() => import("./Home"));
export const NotFoundPage = lazy(() => import("./NotFound"));