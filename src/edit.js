import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {Grid} from '@material-ui/core';

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            companies: [],
            name:'',
            type:'',
            stipend:'',
            location:'',
            duration:'',
            requirement:'',
            description:''

        }
    }
    async componentDidMount() {
        var url_string = window.location.href
        var url = new URL(url_string);
        var id = url.searchParams.get("id");

        const res = await axios('http://localhost:5000/id?id='+id) ;
        let companies =res.data[0];
        this.setState({companies:companies});
        var company = _.get(this.state, 'companies')
        this.setState({type:company.type});
        this.setState({name:company.name});
        this.setState({name:company.stipend});
        this.setState({name:company.location});
        this.setState({name:company.duration});
        this.setState({name:company.requirement});
        this.setState({name:company.description});

    }
    update(event){
        var param = event.target.name
        this.setState({[param]: event.target.value});
    }
    render(){
        var company = _.get(this.state, 'companies')
        const inputProps1 = {
            name: "name",
            value: this.state.name
        }
        const inputProps2 = {
            name: "type",
            value: this.state.type
        }
        const inputProps3 = {
            name: "stipend",
            value: this.state.stipend
        }
        const inputProps4 = {
            name: "location",
            value: this.state.location
        }
        const inputProps5 = {
            name: "duration",
            value: this.state.duration
        }
        const inputProps6 = {
            name: "requirement",
            value: this.state.requirement
        }
        const inputProps7 = {
            name: "description",
            value: this.state.description
        }
        return(
    //         <Grid
    //         container
    //         direction="row"
    //         justify="center"
    //         alignItems="center"
    //         >
    //         <Container>
    //         <form  action ="http://localhost:5000/edit" method="POST">
    //             <input type="text" name="id" value={company.id} hidden/>
    //             <TextField style={{marginRight:10+'px'}} label="Name"inputProps = {inputProps1} id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
    //             <TextField  label="Type" inputProps = {inputProps2}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
    //             <TextField  label="Stipend"inputProps = {inputProps3} id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
    //             <TextField  label="Location" inputProps = {inputProps4}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
    //             <TextField  label="Duration" inputProps = {inputProps5}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>              
    //             <TextField  label="Requirements" inputProps = {inputProps6} id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
    //             <TextField  label="Description" inputProps = {inputProps7}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
    //             <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
    //         </form>
    //         </Container>
    // </Grid>
<Container>
 <form  action ="http://localhost:5000/edit" method="POST">
             <input type="text" name="id" value={company.id} hidden/>

    <Grid  spacing={1}>
            <Grid container item xs={12} spacing={3}>
                 <Grid item xs={12} sm={3}></Grid>

                <Grid item xs={12} sm={4}>
                         <TextField style={{marginRight:10+'px'}} label="Name"inputProps = {inputProps1} id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/>
                 </Grid>

                 <Grid item xs={12} sm={4}>
                    <TextField  label="Type" inputProps = {inputProps2}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
                 </Grid>
                 
                 <Grid item xs={12} sm={1}></Grid>
            </Grid>

        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} sm={2}></Grid>

                 <Grid item xs={12} sm={3}>
                              <TextField  label="Stipend"inputProps = {inputProps3} id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
                 </Grid>

                <Grid item xs={12} sm={3}>
                            <TextField  label="Location" inputProps = {inputProps4}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
                 </Grid>

                 <Grid item xs={12} sm={3}>
                     <TextField  label="Duration" inputProps = {inputProps5}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>                    
                 </Grid>

            </Grid>



            <Grid container item xs={12} spacing={3}>
                 <Grid item xs={12} sm={5}></Grid>

                 <Grid item xs={12} sm={6}>
                     <TextField  label="Requirements" inputProps = {inputProps6} id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
                 </Grid>

                 <Grid item xs={12} sm={1}></Grid>
            </Grid>


            <Grid container item xs={12} spacing={3}>
                 <Grid item xs={12} sm={5}></Grid>

                 <Grid item xs={12} sm={6}>
                     <TextField  label="Description" inputProps = {inputProps7}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
                 </Grid>

                 <Grid item xs={12} sm={1}></Grid>
            </Grid>


            <Grid container item xs={12} spacing={3}>
                 <Grid item xs={12} sm={6}></Grid>


                 <Grid item xs={12} sm={5}>
                    <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
                 </Grid>


                 <Grid item xs={12} sm={1}></Grid>
            </Grid>


  </Grid>
</form>
  </Container>        
        )
    }
}
  
  export default Edit;