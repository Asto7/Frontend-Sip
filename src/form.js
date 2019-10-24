import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import {Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
            
        };
                const style = {
                    
                    margin: 1000,
                  };
        }

    render(){
        const inputProps1 = {
            name: "name"
        }
        const inputProps2 = {
            name: "type"
        }
        const inputProps3 = {
            name: "stipend",
        }
        const inputProps4 = {
            name: "location",
        }
        const inputProps5 = {
            name: "duration",
        }
        const inputProps6 = {
            name: "requirement",
        }
        const inputProps7 = {
            name: "description",
        }
        return(
            // <form action ="http://localhost:5000/add" method="POST">
            //     <TextField className="inputForm" inputProps = {inputProps1} id="outlined-search" label="Name" type="search" margin="normal" variant="outlined"/><br/>
            //     <TextField className="inputForm"inputProps = {inputProps2}  id="outlined-search" label="Type" type="search" margin="normal" variant="outlined"/><br/>
            //     <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>       
            // </form>

<Container>
 <form action ="http://localhost:5000/add" method="POST">
    <Grid  spacing={1}>
            <Grid container item xs={12} spacing={3}>
                 <Grid item xs={12} sm={3}></Grid>

                <Grid item xs={12} sm={4}>
                         <TextField style={{marginRight:10+'px'}} label="Name"inputProps = {inputProps1} id="outlined-search" type="search" margin="normal" variant="outlined" />
                 </Grid>

                 <Grid item xs={12} sm={4}>
                    <TextField  label="Type" inputProps = {inputProps2}  id="outlined-search" type="search" margin="normal" variant="outlined" /><br/>
                 </Grid>
                 
                 <Grid item xs={12} sm={1}></Grid>
            </Grid>

        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} sm={2}></Grid>

                 <Grid item xs={12} sm={3}>
                              <TextField  label="Stipend"inputProps = {inputProps3} id="outlined-search" type="search" margin="normal" variant="outlined" /><br/>
                 </Grid>

                <Grid item xs={12} sm={3}>
                            <TextField  label="Location" inputProps = {inputProps4}  id="outlined-search" type="search" margin="normal" variant="outlined" /><br/>
                 </Grid>

                 <Grid item xs={12} sm={3}>
                     <TextField  label="Duration" inputProps = {inputProps5}  id="outlined-search" type="search" margin="normal" variant="outlined" /><br/>                    
                 </Grid>

            </Grid>



            <Grid container item xs={12} spacing={3}>
                 <Grid item xs={12} sm={5}></Grid>

                 <Grid item xs={12} sm={6}>
                     <TextField  label="Requirements" inputProps = {inputProps6} id="outlined-search" type="search" margin="normal" variant="outlined" /><br/>
                 </Grid>

                 <Grid item xs={12} sm={1}></Grid>
            </Grid>



            <Grid container item xs={12} spacing={3}>
                 <Grid item xs={12} sm={5}></Grid>

                 <Grid item xs={12} sm={6}>
                     <TextField  label="Description" inputProps = {inputProps7}  id="outlined-search" type="search" margin="normal" variant="outlined" /><br/>
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

export default Form;