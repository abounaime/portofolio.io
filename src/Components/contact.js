import React, { Component } from "react";
import {Cell, Grid, ListItemContent, ListItem, List} from "react-mdl";

class Contact extends Component{
    render() {
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Abdeljalil Bounaime</h2>
                    <img
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{height : '250px'}}
                    />
                    <p style={{width : '75%' , margin: 'auto' , paddingTop: '1em' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>
                        Contact me
                    </h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontFamily : 'Anton', fontSize : '25px'}}>
                                    <i className='fas fa-mobile' aria-hidden= "true"/>
                                    (0033) 659-75-88-56
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontFamily : 'Anton', fontSize : '25px'}}>
                                    <i className='fa fa-envelope' aria-hidden= "true"/>
                                    a.bounaime@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontFamily : 'Anton', fontSize : '25px'}}>
                                    <i className='fab fa-skype' aria-hidden= "true"/>
                                    a.bounaime
                                </ListItemContent>
                            </ListItem>

                        </List>
                    </div>

                </Cell>

            </Grid>
        </div>
        )
    }
}
export  default  Contact;