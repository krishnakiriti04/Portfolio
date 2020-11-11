import React from 'react';
import './App.js'
import Skills from './skills'
import Experience from './workExperience'

const Details = ()=>{
	return (
		
		 <div>
		  <h2><i style={{fontSize:24+'px'}} className="fa">&#xf140;</i> Carrer Obective</h2>
		 <p>To pursue a challenging career and work for a esteemed organization where I can contribute my skills for both my personal and the organizational growth.</p>
		 <h2><i style={{fontSize:24+'px'}} className='fas'>&#xf5fc;</i> Technical Skills</h2>
		 <Skills />
		 <Experience />
		 </div>
            
		)
}

export default Details;
