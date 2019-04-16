import React from "react";
import {Cell, Grid} from "react-mdl";

class Accueil extends React.Component{


            render() {
            return(
                <div style={{width : '100%' , margin : 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img
                                src="https://cdn.juleswebb.com/pgs/creativica_sitting-avatar.svg"
                                alt="avatar"
                             className="avatar-img"
                            />
                            <div className="banner-text">
                                <h1> Full Stack Web Developper</h1>
                                <hr/>
                                <p> Java | JEE | JavaScript | React | NodeJS | Oracle </p>
                                <div className="social-links">
                                    {/* Linkedin */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-linkedin-in"  aria-hidden="true"  />
                                    </a>
                                    {/* Gitlab */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-gitlab"  aria-hidden="true"  />
                                    </a>

                                    {/* Free code camp */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-free-code-camp"  aria-hidden="true"  />
                                    </a>

                                </div>
                            </div>
                        </Cell>

                    </Grid>

                </div>

            )
        }
}
export  default Accueil