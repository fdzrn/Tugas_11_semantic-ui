import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Segment, Dimmer, Image, Loader} from 'semantic-ui-react';

class Second extends Component {
	render(){
		return(
			<div>
				<Segment>
		      <Dimmer active>
		        <Loader>Loading</Loader>
		      </Dimmer>
		      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
		    </Segment>
		    <br />
			</div>
		);
	}
}

export default Second;