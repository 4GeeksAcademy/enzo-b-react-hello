import React from "react";

const Jumbotron = () => {
    return (
        <div className="mt-4">
            <div className="p-5 bg-light rounded-3">
                <div className="container-fluid py-4">
                    <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                    <p className="col">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
                        incidunt odit vero aliquid similique.
                    </p>
                    <button className="btn btn-primary btn-lg">Call to action!</button>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron