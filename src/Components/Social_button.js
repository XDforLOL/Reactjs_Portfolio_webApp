import {Button, Grid} from "semantic-ui-react";
import React from "react";

const Social_buttons = () =>(
        <Grid.Row>
        <Button circular color='github' icon='github' href='https://github.com/XDforLOL?tab=repositories' target="_blank" />
        <Button circular color='blue' icon='linkedin' href='https://www.linkedin.com/in/%D7%90%D7%A8%D7%AA%D7%95%D7%A8-%D7%9E%D7%95%D7%A8%D7%92%D7%9F-4284a2170/' target="_blank" />
        <Button floated='center' color='blue' circular icon='mail' href="mailto:arthurmorbiz@gmail.com"/>
        </Grid.Row>
)
export default Social_buttons