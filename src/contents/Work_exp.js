import React from 'react';
import {Grid, List, Label, Segment, Header} from 'semantic-ui-react';

const Work_exp = () => (
    <Grid padded centered>
        <Grid.Row centered >
            <Header verticalAlign='top' as='h1' style={{fontSize: '75px'}}  >
                <Header.Content>Work Experience</Header.Content>
            </Header>
        </Grid.Row>
        <Grid.Row unstackable>
            <Grid.Column style={{flex: 1}} textAlign='left' length='6' width='6' padded>
                <Segment raised>
                    <Label as='a' color='red' ribbon>
                        <List.Header as='h3'>
                            2019-2020 | Hardware Sales Associate
                        </List.Header>
                    </Label>
                    <List centered bulleted>
                        <Label as='a' color='blue'>
                            <List.Header as='h4'>
                                K.S.P | Beer Sheva
                            </List.Header>
                        </Label>
                        <List.Item>
                            Costumer front desk/phone IT costumer and computer software
                            hardware repairs.
                        </List.Item>
                        <List.Item>
                            Pitching company sales for monthly sale goals to
                            costumer, costumer preservation and adaptive
                            communicative
                        </List.Item>
                        <List.Item>
                            Communicating with customers about upcoming items in
                            sale, or a more suitable product that meet the customer
                            needs.
                        </List.Item>
                        <List.Item>
                            Describe merchandise and explain use, operation, and
                            care of merchandise to customers.
                        </List.Item>
                        <List.Item>
                            Estimate quantity and cost of merchandise required, such
                            upcoming computer part's/phones and listening to
                            costumer needs.
                        </List.Item>
                    </List>
                </Segment>
            </Grid.Column>
            <Grid.Column style={{flex: 1}} textAlign='left' length='6' width='6' padded>
                <Segment raised>
                    <Label as='a' color='dark' ribbon>
                        <List.Header as='h3'>
                            2018-2019 | CLEAN ROOM TECHNICIAN
                        </List.Header>
                    </Label>
                    <List centered bulleted>
                        <Label as='a' color='blue' floated='left'>
                            <List.Header as='h4'>
                                INTEL | Kiryat gat
                            </List.Header>
                        </Label>
                        <List.Item>
                            Preforming preventative procedures and preforming a
                            weekly check ups to factory machines, for ensuring quality
                            INTELS chip production.
                        </List.Item>
                        <List.Item>
                            Team management of personal for ensuring quality
                            workflow in a factory hazardous environment.
                        </List.Item>
                        <List.Item>
                            Machine construction and deconstruction with manual
                            directions.
                        </List.Item>
                        <List.Item>
                            Analyze test results in relation to design or rated
                            specifications and test objectives, and modify or adjust
                            equipment to meet specifications.
                        </List.Item>
                        <List.Item>
                            Set up and conduct tests of complete units and
                            components under operational conditions to investigate
                            proposals for improving equipment performance.
                        </List.Item>
                    </List>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>

)
export default Work_exp