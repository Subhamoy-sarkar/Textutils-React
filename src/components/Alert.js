import React from 'react'

export default function Alert(props) {
    const Capitalise=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
     props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}  role="alert">
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
        <strong>{Capitalise(props.alert.type)} </strong>: {props.alert.msg}
        {/* <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button> */}
        </div>
    </div>
  )
}
