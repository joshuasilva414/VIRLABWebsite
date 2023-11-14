import React from 'react';

export default function Alumni(props) {
  return (
    <div class="card" style={{width: '18rem',marginRight: '5vw', marginBottom: '5vw'}}>
        <div style={{width: '100%', height: '250px', overflow:'hidden'}}>
            <img src={props.image} class="card-img-top" alt="..." style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
    />
        </div>
        
        <div class="card-body">
            <a href={props.personal} style={{textDecoration: 'none', }}><h4 class="card-title">{props.name}</h4></a>
            <p class="card-text">{props.education}</p>
            <p class="card-text">{props.job}</p>

        </div>
        
        
    </div>
  );
}
Alumni.defaultProps = {
    image: "/Portrait_Placeholder.png",
    personal: "/people"

}
// name, education, image, personal