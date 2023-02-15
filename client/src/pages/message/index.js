import React from 'react'
import LeftSide from '../../components/message/LeftSide'

const Message = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-4 mx-3 border px-0">
                <LeftSide />
            </div>

            <div className="col-md-7 mx-3 px-0 right_mess border">
                <div className="d-flex justify-content-center 
                align-items-center flex-column h-100">

                    <i className="fab fa-facebook-messenger text-primary"
                    style={{fontSize: '5rem'}} />
                    <h4>Messenger</h4>

                </div>
            </div>
        </div>
    )
}

export default Message
