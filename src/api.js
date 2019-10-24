import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import {Grid} from '@material-ui/core';
import SimpleCard from './card.js';

class Api extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        companies: []
      }
}

  async componentDidMount() {
    var url_string = window.location.href
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    const res = await axios('http://localhost:5000/id/?id='+id) ;
    let companies =res.data[0];
    this.setState({companies:companies});
  }

  render() {
    var company = _.get(this.state, 'companies');
    return (
        <Grid container sm={12}>
            <Grid item sm={4}>
            <SimpleCard title={company.name} id={company.id}></SimpleCard>
            </Grid>
        </Grid>
    )
  }
}

export default Api;