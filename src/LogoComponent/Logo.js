import React from 'react'
import appLogo from '../assets/90min_logo.svg'
import './Logo.css'

export function Logo(){
    return (
        <div className= 'TopComponent'>
        <img
           className='AppLogo'
           src={appLogo}
           alt={'App Logo'}
        />
        </div>
    )
}