import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Register = lazy(() => import('./routes/register/Register'));
const Login = lazy(() => import('./routes/login/Login'));
const Profile = lazy(() => import('./routes/profile/Profile'));

const RouteController = () => {
  return (
    <div>
        <Routes>
            <Route path="register" element={<Suspense fallback={<p>Loading...</p>}><Register/></Suspense>}/>
            <Route path="login" element={<Suspense fallback={<p>Loading...</p>}><Login/></Suspense>}/>
            <Route path="profile" element={<Suspense fallback={<p>Loading...</p>}><Profile/></Suspense>}/>
        </Routes>
    </div>
  )
}

export default RouteController;
