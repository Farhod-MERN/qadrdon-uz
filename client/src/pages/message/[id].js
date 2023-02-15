import React from 'react'
import LeftSide from '../../components/message/LeftSide'
import RightSide from '../../components/message/RightSide'

const Conversation = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-4 border-right px-0 left_mess mx-3 border">
                <LeftSide />
            </div>

            <div className="col-md-7 px-0 mx-3 border">
                <RightSide />
            </div>
        </div>
    )
}

export default Conversation
