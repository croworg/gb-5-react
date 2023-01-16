import {useSelector} from "react-redux";
import {selectAuth} from "../store/profile/selector";
import {Navigate, Outlet} from "react-router-dom";

export const PrivateRoute = ({component}) => {
    const isAuth = useSelector(selectAuth);

    if (!isAuth) {
        return <Navigate to='/signin' />;
    }

    return component ? component : <Outlet />;
};
