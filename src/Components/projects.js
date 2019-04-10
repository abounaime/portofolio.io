import React, { Component } from "react";
import {Tabs, Tab} from 'react-mdl';
class Projects extends Component{
    constructor(){
        super();
        this.state = {
            activeTab : 0
        }
    }
    toogleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div>
                    <h1> this is react</h1>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div>
                    <h1> this is angular</h1>
                </div>
            )
        } else if (this.state.activeTab === 2){
            return(
                <div>
                    <h1> this is Java</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <h1> this is JEE</h1>
                </div>
            )
        }
    }
    render() {

        return(
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
                <Tab> React </Tab>
                <Tab> Angular </Tab>
                <Tab> Java </Tab>
                <Tab> JEE </Tab>
            </Tabs>
            <section className="Projects-grid">
                {this.toogleCategories()}
            </section>
        </div>
        )
    }
}
export  default  Projects;