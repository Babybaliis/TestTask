import React from "react";

const Footer: React.FC = () => {
    return(
        <div className={"navbar-fixed-bottom row-fluid"}>
            <div className={"container"}>
                <hr/>
                <p className={"col-sm"}>
                    &copy;{new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}

export default Footer;