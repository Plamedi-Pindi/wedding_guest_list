
// Import Router, lazy and Suspense
import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

// Import Components
const LoginPage = lazy(() => import("../pages/auth/Login"));
const HomePage = lazy(() => import("../pages/home/Home"));
const LayoutPage = lazy(() => import("../pages/layouts/Layout"));
const NotFound = lazy(()=> import("../pages/404/NotFound"))

const RouterProvider: React.FC = () => {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes >
                    <Route path='/' element={<LayoutPage />} />
                    <Route index element={<LoginPage />} />
                    <Route path='home' element={<HomePage />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default RouterProvider