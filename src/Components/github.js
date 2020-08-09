import React, {Component} from 'react';
import {Grid, Card, Header} from 'semantic-ui-react';

class GitHubButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        const {Octokit} = require("@octokit/rest");
        const octokit = new Octokit();

        octokit.repos.listForUser({
            username: "XDforLOL",
        })
            .then(({data}) => {
                console.log(data)
                data.forEach((element) => {
                    const project = {
                        name: element.name,
                        description: element.description,
                        url: element.html_url,
                        last_updated: element.updated_at
                    };
                    this.setState(
                        {projects: this.state.projects.concat(project)}
                    )
                });
            });
    }

    render() {
        return (
        <Grid padded  >
            <Grid.Row centered >
                <Header verticalAlign='top' as='h1' style={{fontSize: '75px'}}  >
                    <Header.Content>Projects</Header.Content>
                </Header>
            </Grid.Row>
            <Grid.Row verticalAlign='top' >
                {this.state.projects.map((project) => (
                    <Grid.Column verticalAlign='top' style={{flex: 1}} textAlign='left' length='6' width='6' key={project}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{project.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>updated at {project.last_updated}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {project.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content as='a' href={project.url} target="_blank" extra>
                                Github link to {project.name}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
        );
    }
}

export default GitHubButtons;
