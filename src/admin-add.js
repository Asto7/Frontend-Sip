import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Fab from '@material-ui/core/Fab';
import Form from './form.js';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 0
        };
      }
    handlechange(){
        if(this.state.value===1){
            this.setState({value:0})
            console.log(this.state.value)
        }
        else{
            this.setState({value:1})
            console.log(this.state.value)
        }
    }
    render(){
        if(this.state.value===0){
            return (
                <div>
                  <br/>
                  <Fab color="primary" aria-label="add" onClick={this.handlechange.bind(this)} >
                    <AddIcon />
                  </Fab>
                </div>
              );
        }
        else{
        return (
            <div>
                <Form></Form>
                <br/>
                <div>
                    <Fab color="primary" aria-label="add" onClick={this.handlechange.bind(this)} >
                        <ExpandLess />
                    </Fab>
                </div>
            </div>
          );}
    }
}

export default Add;

