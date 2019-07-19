import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props =>{
    return ReactDOM.createPortal(
        //by default, if you ever trigger an event on some child element, that child element doesn't handle the event. The event is going to bubble up parent element 
        <div onClick={() => {props.onDismiss()}}className="ui dimmer modals visible active">
            <div onClick={(e) => {e.stopPropagation()}}className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;