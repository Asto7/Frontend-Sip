import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SimpleModal from './modal.js'
import {Grid} from '@material-ui/core';

const style = {
    card: { padding:20, margin:"10px 10px 0px 10px", border:"1px solid black"}
}

class SimpleCard extends Component{
    handlechange(event){
        var id=event.target.parentElement.id
        console.log(id)
        window.location="/read?id="+id;

    }
    delete(event){
      var id=this.props.id
      console.log(id)
      window.location="http://localhost:5000/delete/?id="+id

  }
  edit(event){
    var id=this.props.id
    console.log(id)
    window.location="http://localhost:3000/admin/edit/?id="+id

}
  gotoPage(event){
    if(this.props.link.includes("https://")===false)
    window.location.href="http://"+this.props.link
    else
    window.location.href=this.props.link
    
  }
    render(){
      console.log(this.props)
    

      return (

                  <li>
                    <span id="wrap" className="fa fa-code"></span>
                    <h3 id="heading" key={this.props.id}>{this.props.title}</h3>
                    <p><span id="field">Stipend: </span>{this.props.stipend}</p>
                    <p><span id="field">Location: </span>{this.props.location}</p>
                    <p><span id="field">Duration: </span>{this.props.duration}</p>
                    {
                      (window.location=="http://localhost:3000/home/admin")?
                        <div>
                        <Button onClick={this.delete.bind(this)}><DeleteIcon/></Button>
                        <Button onClick={this.edit.bind(this)}><EditIcon/></Button>
                        </div>
                      :null
                    }
                    <SimpleModal content={this.props}></SimpleModal>       
                    <button onClick={this.gotoPage.bind(this)} id="buttons">Apply</button>
                  </li>
          );
    }
}

export default SimpleCard;