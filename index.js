import React from 'react';
import ReactDOM from 'react-dom';

const Person = () => {
  return(
  	<div class="person">
  		<h1>Max</h1>
  		<p>your age: 28</p>
   </div>
   );  
}

ReactDOM.render(<Person/>, document.querySelector('#p1'));
