import React from 'react';

function Project(props) {
    return(
        <>

        <div class="card" style={{width: '80rem', height: 'auto', maxHeight: '40vh', marginBottom: '50px', overflowY: 'auto'}}>
                
            <div class="card-body" >
                <a href={props.projectLink} style={{marginBottom: '0px', textDecoration: 'none'}}><h4 class="card-title">{props.title}</h4></a>
                <p style={{marginBottom: '0px'}}><b>Agency: </b> {props.agency}</p>
                <p style={{marginBottom: '0px'}}><b>Award: </b> {props.amount}</p>
                <p style={{marginBottom: '0px'}}><b>Investigators: </b> {props.investigators}</p>
                <p style={{marginBottom: '0px'}}> {props.abstract}</p>
            </div>
        </div>
        </>
    );
}
export default Project;
// title, agencyLink, agency, amount, investigators, abstract
