import {useSelector} from "react-redux";
import {selectAuth} from "../store/profile/selector";
import {Outlet} from "react-router-dom";

export const PublicRoute = ({component}) => {
    const isAuth = useSelector(selectAuth);

    if (isAuth) {

    }

    return component ? component : <Outlet />;
};
