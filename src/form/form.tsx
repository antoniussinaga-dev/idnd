import React from "react";




const Form: React.FC<any> = () => {

    return (
        <form onSubmit={() => console.log("submit")}>
            From
        </form>
    )
};

export default Form;
