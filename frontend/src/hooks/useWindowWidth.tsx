import { useEffect, useState } from "react";

function getWindowWidth() {
    return window.innerWidth;
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener("resize", handleWindowResize);
        return () => {
            console.log("remove event");
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [windowWidth]);

    return windowWidth;
};

export default useWindowWidth;
