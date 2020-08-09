import React from 'react';
import {Grid, Image, Container, Card} from 'semantic-ui-react';
import '../App.css';
import pic from "../img/Morgan_pic.png";

const Home = () => (

    <Grid color='black'>
        <Grid.Column>
            <Grid.Row>
        <Image unstackable spaced={true} className='My-pic' src={pic}  circular />
            </Grid.Row>
            <Grid.Row style={{flex: 1}}>
                <Card color='black' fluid>
                    <Card.Content color='black' fluid>
                        <Container color='black' text boarded>
                            Adaptable professional with 2+ years of experience and a proven knowledge of conflict
                            resolution, customer
                            communications, IT computer maintenance and customer retention. Aiming to leverage
                            my skills to successfully fill the Python Full stack Developer role
                            at your company.
                        </Container>
                    </Card.Content>
                </Card>
            </Grid.Row>
        </Grid.Column>
    </Grid>

)
export default Home


