import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Login from '../pages/Auth/Login.jsx';
import Register from '../pages/Auth/Register.jsx';
import ErrorPage from '../pages/error/ErrorPage.jsx';
import Home from '../pages/Home.jsx';
import AddItem from '../pages/items/AddItem.jsx';
import BlogPage from '../pages/items/BlogPage.jsx';
import ItemDetails from '../pages/items/ItemDetails.jsx';
import LostAndFound from '../pages/items/LostAndFound.jsx';
import MyItems from '../pages/items/MyItems.jsx';
import RecoveredItems from '../pages/items/RecoveredItems.jsx';
import UpdateItem from '../pages/items/UpdateItem.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/allItems',
                element: <LostAndFound />
            },
            {
                path: '/addItems',
                element: (
                    <PrivateRoute>
                        <AddItem />
                    </PrivateRoute>
                )
            },
            {
                path: '/items/:id',
                element: (
                    <PrivateRoute>
                        <ItemDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/items/${params.id}`)

            },
            {
                path: '/myItems',
                element: (
                    <PrivateRoute>
                        <MyItems />
                    </PrivateRoute>
                )
            },
            {
                path: '/updateItem/:id',
                element: (
                    <PrivateRoute>
                        <UpdateItem />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/items/${params.id}`)
            },
            {
                path: '/allRecovered',
                element: (
                    <PrivateRoute>
                        <RecoveredItems />
                    </PrivateRoute>
                )
            },
            {
                path: '/blogPost',
                element: <BlogPage />
            },
        ]

    }
])

export default routes;