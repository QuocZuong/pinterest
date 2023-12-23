import Tippy from "@tippyjs/react/headless";
import { ReactElement } from "react";

const Popper = ({ children }: { children: ReactElement }) => {
    return <Tippy>{children}</Tippy>;
};

export default Popper;
