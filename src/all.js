import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import SimpleCard from './card.js';
import axios from 'axios';
import _ from 'lodash';


class Allgrid extends Component {
  constructor(props){
      super(props);
      this.state = {
         companies: []
  
        }
  }
  async componentDidMount() {
    const res = await axios('http://localhost:5000/data') ;
    let companies =res.data;
    this.setState({companies:companies});
  }


    render() {
        var companies = _.get(this.state, 'companies');
        console.log(companies)
        if(this.props.type==="all"){
        return (
    <section id="sec">
               <ul>
          {companies.map((company)=>
                      <SimpleCard description={company.description} requirement={company.requirement} title={company.name} type={company.type} stipend={company.stipend} location={company.location} duration={company.duration} link={company.link} id={company.id}></SimpleCard>

                )}
            </ul>
   </section>
       
          );
        }
        else if(this.props.type==="technical"){
            return (
                <section id="sec">
                <ul>
                {companies.map((company)=> company.type === "techincal" ? (            
                      <SimpleCard title={company.name} type={company.type} stipend={company.stipend} location={company.location} duration={company.duration} link={company.link} id={company.id}></SimpleCard>
                    ) :(null)
                    
                )}
                  </ul>
          </section>
        );}
        else if(this.props.type==="management"){
            return (
                <section id="sec">
                <ul>
                {companies.map((company)=> company.type === "management" ? (
                      <SimpleCard title={company.name} type={company.type} stipend={company.stipend} location={company.location} duration={company.duration} link={company.link} id={company.id}></SimpleCard>
                    ) :(null)
                    
                )}
                  </ul>
          </section>
);}
    }
  }
  
  export default Allgrid;