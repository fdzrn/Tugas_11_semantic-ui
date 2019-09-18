import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Segment, Grid, Button, Divider, Header, Icon, Search} from "semantic-ui-react";
class First extends Component {
	render(){
		return(
			 <Segment placeholder>
		    <Grid columns={2} stackable textAlign='center'>
		      <Divider vertical>Or</Divider>
		      <Grid.Row verticalAlign='middle'>
		        <Grid.Column>
		          <Header icon>
		            <Icon name='search' />
		            Cari Dokumen
		          </Header>
		          <Search placeholder='Search Document...' />
		        </Grid.Column>

		        <Grid.Column>
		          <Header icon>
		            <Icon name='file pdf outline' />
		            Tambah Dokumen Baru
			          </Header>
			          <Button primary>Create Document</Button>
		        </Grid.Column>
			    </Grid.Row>
			  </Grid>
		  </Segment>
		);
	}
}

export default First;