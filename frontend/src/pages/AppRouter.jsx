import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, LoadingPage, NotFoundPage, RegisterPage, ChatPage } from "../views";
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    return (
        <Suspense fallback={<LoadingPage />}>
            <BrowserRouter>
                <Routes>
                    <Route element={<PublicRoutes />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/" element={<ChatPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
