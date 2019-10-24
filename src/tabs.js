import React, { Component } from 'react';
import {Paper, Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Allgrid from './all';

const groups = [
  'Technical', 'Management'
]

const style={
  tabs: {marginTop:5}
}

class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handlechange(value,event){
    this.setState({value:value})
    console.log(value)
  }
  view(){
    if(this.state.value===0){
      return <Allgrid type="all"></Allgrid>
    }
    else if(this.state.value===1){
      return <Allgrid type="technical"></Allgrid>
    }
    else if(this.state.value===2){
      return <Allgrid type="management"></Allgrid>
    }
  }
    render() {
      return (
            <Paper>
                <Tabs
                    value={this.state.value}
                    centered
                    style={style.tabs}  
                >
                  <Tab label="All" onClick={this.handlechange.bind(this,0)}></Tab>
                  {groups.map((sub, index)=>
                    <Tab label={sub} onClick={this.handlechange.bind(this,index+1)}></Tab>
                  )}
                </Tabs>
                {this.view()}
            </Paper>
      );
    }
  }
  
  export default Tabbar;