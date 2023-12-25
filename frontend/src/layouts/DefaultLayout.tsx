import React, { ReactNode } from "react";

import Header from "../components/Header";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Header></Header>
            <div className="main">{children}</div>
        </>
    );
};

export default DefaultLayout;
