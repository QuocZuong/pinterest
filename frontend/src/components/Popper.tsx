import { ReactElement } from "react";
import Tippy from "@tippyjs/react/headless";

const Popper = ({ children }: { children: ReactElement }) => {
    return <Tippy>{children}</Tippy>;
};

export default Popper;
