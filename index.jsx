import React from 'react';
import ReactDOM from 'react-dom';

const Person = () => (
 	<div class="person">
  		<h1>Max</h1>
  		<p>your age: 28</p>
 	</div>
); 

// const Person = () => <div> Hello </div>;


ReactDOM.render(<Person />, document.getElementById('mydiv'));
