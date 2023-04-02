import React from 'react'
import { useState} from 'react'

const LeftSideBar = () => {

    const [like, setLike] = useState(false)
    const [follow, setFollow] = useState(true)
    const [post, setPost] = useState(true)
    
    const likeDisplay = like ? "none" : "block"
    const followDisplay = follow ? "none" : "block"
    const postDisplay = post ? "none" : "block"    
    return (
        <div className="mt-3 leftSideBar">
            {/* <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-success text-center"> Foydalanuchilar reytingi</h5>
            </div> */}
            <div className='sort'>
                <div className='sortItem border'>
                    <div className='leftHeader p-2 d-flex justify-content-between p-0 m-0 '>
                        <p className='m-0 p-0 '>Likelar soni bo'yicha</p>
                        <span className="material-icons m-0 p-0 " style={{cursor:"pointer"}} onClick={()=>{setLike(!like)}}>add</span>
                    </div>
                    <div style={{display: `${likeDisplay}`}} className="px-2 border-top">
                        <ol style={{listStyle: "none"}}>
                            <li>1 Lorem, ipsum.</li>
                            <li>2 Lorem, ipsum.</li>
                            <li>3 Lorem, ipsum.</li>
                            <li>4 Lorem, ipsum.</li>
                            <li>5 Lorem, ipsum.</li>
                            <li>6 Lorem, ipsum.</li>
                            <li>7 Lorem, ipsum.</li>
                            <li>8 Lorem, ipsum.</li>
                            <li>9 Lorem, ipsum.</li>
                            <li>10 Lorem, ipsum.</li>
                        </ol>
                    </div>
                </div>
                <div className='sortItem border'>
                    <div className='leftHeader p-2 d-flex justify-content-between p-0 m-0 '>
                        <p className='m-0 p-0 '>Eng ko'p Obunachi bo'yicha</p>
                        <span className="material-icons m-0 p-0 " style={{cursor:"pointer"}} onClick={()=>{setFollow(!follow)}}  >add</span>
                    </div>
                    <div  style={{display: `${followDisplay}`}} className="px-2 border-top">
                       2-  lorem
                    </div>
                </div>
                <div className='sortItem border'>
                    <div className='leftHeader p-2 d-flex justify-content-between p-0 m-0'>
                        <p className='m-0 p-0 '>Eng ko'p Post bo'yicha</p>
                        <span className="material-icons m-0 p-0 " style={{cursor:"pointer"}} onClick={()=>{setPost(!post)}}>add</span>
                    </div>
                    <div style={{display:`${postDisplay}`}} className="px-2 border-top">
                        3 - lorem
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar
