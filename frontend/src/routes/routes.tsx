import config from "@/config";
import Create from "@/pages/Create";
import Home from "@/pages/Home";
import Pin from "@/pages/Pin";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import { ComponentType, ReactNode } from "react";

interface RouteProps {
    path: string;
    component: ComponentType;
    layout?: ComponentType<{ children: ReactNode }> | null;
}

const publicRoutes: Array<RouteProps> = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.create,
        component: Create,
    },
    {
        path: config.routes.pin,
        component: Pin,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.settings,
        component: Settings,
    },
];

export default publicRoutes;
