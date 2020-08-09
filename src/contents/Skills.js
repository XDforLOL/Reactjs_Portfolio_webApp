import React from 'react';
import {Icon, Grid, Header, List, Image, Card} from 'semantic-ui-react';
import softSkillI from "../img/Softskills_2.png";
import digiMediaI from "../img/Digital_med_i.png";
import frontEndI from "../img/Frontend_icon.png";
import backEndI from "../img/Backend_icon.png";


let backend = ['Python', 'APIs', 'Ardiuno and raspberry pi' ]
let frontend = ['HTML', 'CSS', 'JavaScript', 'React']
let softSkills = [('Fluent in Russain, Hebrew '+ '\xa0\xa0\xa0' +'and English.'), 'Sales', 'Customer Management']
let digitalMedia = ['Photoshop', 'Procreate', 'Color Science']
let categoryNames = ['Backend', 'Frontend', 'Soft Skills', 'Digital Media']

const cardFun = (categoryName) => {
    let categoryList = [];
    let icon = [];
    switch (categoryName){
        case 'Backend':
            categoryList = backend;
            icon = backEndI;
            break;
        case 'Frontend':
            categoryList = frontend;
            icon =  frontEndI;
            break;
        case 'Soft Skills':
            categoryList = softSkills;
            icon = softSkillI;
            break;
        case 'Digital Media':
            categoryList = digitalMedia;
            icon = digiMediaI;
            break;
        default:
            //pass
    };

    return (
        <Grid.Column verticalAlign='top' style={{flex: 1}} textAlign='left' length='6' width='6' padded>
            <Card fluid>
                <Card.Header textAlign='center' as='h2'>
                    <img src={icon} className="ui avatar image"/>
                    {categoryName}
                </Card.Header>
                <Card.Content>
                <List>
                {categoryList.map((skill) =>{
                    return(
                    <List.Item as='h4'><Icon name='check' size='small' />{skill}</List.Item>
                    );
                })}
                </List>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}
const Skills = () => (
    <Grid style={{margin: 'auto'}}  >
        <Grid.Row centered >
        <Header verticalAlign='top' as='h1' style={{fontSize: '75px'}}  >
            <Header.Content>Skills</Header.Content>
        </Header>
        </Grid.Row>
        <Grid.Row verticalAlign='top' >
        {categoryNames.map(cardFun)}
        </Grid.Row>
    </Grid>
)

export default Skills;

