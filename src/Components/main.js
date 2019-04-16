import React from 'react'
import Accueil from "./accueil";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact"
import {Route , Switch} from 'react-router-dom'


const Main = () => (


<Switch>
    <Route  path="/resume" component={Resume}/>
    <Route  path="/projects" component={Projects}/>
    <Route  path="/contact" component={Contact}/>
    <Route  path="/" component={Accueil}/>




</Switch>

)


export default Main;