import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                
                <span className="text-muted" style={{marginLeft: '20px'}} >Developer - Rachit Sharma</span>
                </div>
                <span className="text-muted"> 2023 GoFood </span> 
                <br />
                <span className="text-muted" style={{marginRight: '20px'}} >email - rachitsharma2803@gmail.com</span>
                
        </footer>
    </div>
  )
}
