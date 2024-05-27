import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import Chat from '../Pages/Chat/Chat'
import RepChat from '../Pages/RepChat/RepChat'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/services',
                    element: <Home />
                },
                {
                    path: '/training',
                    element: <Home />
                },
                {
                    path: '/chat',
                    element: <Chat />
                },
                {
                    path: '/rep-chat',
                    element: <RepChat />
                }
            ]
        }
    ])

  return <RouterProvider router={router}/>
}

export default Router