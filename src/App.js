import React, {Component} from 'react';
import './App.css';
import {Grid, List, Container, Button} from 'semantic-ui-react';
import Home from './contents/Home'
import GitHubButtons from './Components/github'
import Social_buttons from "./Components/Social_button";
import Skills from "./contents/Skills";
import Work_exp from "./contents/Work_exp";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
        };

    };

    // handles header buttons
    handleClick = (event) => {
        switch (event.target.textContent) {
            case 'Home':
                this.setState({page: 'Home'})
                break;
            case 'Projects':
                this.setState({page: 'Projects_page'})
                break;
            case 'Skills':
                this.setState({page: 'Skills'})
                break;
            case 'Work Experience':
                this.setState({page: 'Work_exp'})
                break;
            default:
            //pass
        }
        ;
    };
    // checks state of page, changes rendered contents
    page_by_state = () => {
        switch (this.state.page) {
            case 'Home':
                return (<Home/>);
            case 'Projects_page':
                return (<GitHubButtons/>);
            case 'Skills':
                return (<Skills/>);
            case 'Work_exp':
                return (<Work_exp/>);
            // default state for home page ?
            default:
            //pass
        }
        ;
    };


    render() {
        return (
            // Main Container
            <Grid unstackable padded style={{flex: 1, height: '100vh'}} fluid={true} className='main-container'>
                {/*Header*/}
                <Grid.Row style={{height: '8vh'}} color="black" attached='top'>
                    {/*Header buttons */}
                    <Container style={{position: 'absolute', left: '25px'}}>
                        <Button style={{height: '5vh'}} content='Home' onClick={this.handleClick} primary></Button>
                        <Button style={{height: '5vh'}} content='Projects' onClick={this.handleClick} primary></Button>
                        <Button style={{height: '5vh'}} content='Work Experience' onClick={this.handleClick} primary></Button>
                        <Button style={{height: '5vh'}} content='Skills' onClick={this.handleClick} primary></Button>
                    </Container>
                    <Grid.Row padded style={{position: 'absolute', right: '25px'}}>
                        <Social_buttons/>
                    </Grid.Row>
                </Grid.Row>
                {/*Main Page*/}
                <Grid.Row centered>
                    {this.page_by_state()}
                </Grid.Row>

                <div className='Footer'>
                    <List verticalAlign='bottom' floated='right' horizontal>
                        <List.Item color='white'>
                            © Cool-website, Inc.
                        </List.Item>
                        <List.Item as='a'>Terms</List.Item>
                        <List.Item as='a' content='Work Experience' onClick={this.handleClick}></List.Item>
                        <List.Item content='Contacts' as='a' onClick={this.handleClick}></List.Item>
                    </List>

                    <List horizontal>
                        <List.Item content='Projects' onClick={this.handleClick} as='a'></List.Item>
                        <List.Item content='Skills' onClick={this.handleClick} as='a'></List.Item>
                    </List>
                </div>
            </Grid>
        );
    }
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default App;
