import React from "react";
import {Cell, Grid} from "react-mdl";

class Accueil extends React.Component{


            render() {
            return(
                <div style={{width : '100%' , margin : 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img
                                src="http://static8.viadeo-static.com/U28JbPfFgrqJkWe0kfkejYjgPIg=/300x300/member/00226tpsxx4e2qq9%3Fts%3D1467709182000"
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