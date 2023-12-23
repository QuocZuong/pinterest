import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    layout?: string;
    disable?: boolean;
    rounded?: boolean;
    small?: boolean;
    large?: boolean;
    hover?: boolean;
    to?: string;
    href?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onClick?: () => unknown;
    children?: ReactNode;
    passProps?: string[];
}

const Button: React.FC<ButtonProps> = ({
    to,
    href,
    layout = 1,
    disabled,
    children,
    className,
    hover = false,
    onClick,
    ...rest
}) => {
    let Comp: React.ElementType = "button";
    const props: ButtonProps = { onClick, ...rest };

    // Remove event listener when btn disabled
    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props.key === "function") {
                delete props.key;
            }
        });
    }

    // use Link to switch between pages local
    if (to) {
        props.to = to;
        Comp = Link;
    }

    // use href of a tag to move another site
    else if (href) {
        props.href = href;
        Comp = "a";
    }

    // Add classes
    let classes = "flex justify-center items-center py-2 px-2 rounded-full ";
    if (layout === 2) {
        classes += "bg-black-950 ";
    } else if (layout === 3) {
        classes += "bg-grey-200 ";
    }

    if (hover) {
        classes += "hover:bg-grey-150";
    }
    classes += className ? ` ${className}` : "";

    return (
        <Comp className={classes.trim()} {...props}>
            {children}
        </Comp>
    );
};

export default Button;
