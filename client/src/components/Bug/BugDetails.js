import React from "react";
import { Card } from "reactstrap";


const BugDetails = props => {
    console.log(props);
    return (
        <Card>
            <h2><strong>Detailed Bug Info for {props.bug}:</strong></h2>
            <h4>{props.details}</h4>
        </Card>
    )
}

export default BugDetails;