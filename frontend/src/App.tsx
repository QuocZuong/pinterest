import { ComponentType, Fragment, ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import publicRoutes from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayout";

type Props = {
    children: ReactNode;
    className?: string;
};

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes?.map((route, index) => {
                        let Layout: ComponentType<Props> = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
