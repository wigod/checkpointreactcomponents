import React from 'react';
import './style.css';

function ProfilePhoto(){
    return(
        <>
            <h4>PHOTO DE PROFIL</h4>
            <div className='boxPhoto'>                
                <img src='pat.jpg' alt=''className='photoProfile'/>
            </div>
            
        </>
    )
}

export default ProfilePhoto;