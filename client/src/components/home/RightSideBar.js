import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3 myRightSide">
            <div className=' rounded'>
            <UserCard user={auth.user}/>
            </div>

            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-success">Siz uchun mahsus !</h5>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }

            <div style={{opacity: 0.5}} className="my-2" >
                <a href="https://farhod.vercel.app/" target="_blank" rel="noreferrer"
                style={{wordBreak: 'break-all'}} >
                    Biz haqimizda
                </a>
                <p>
                    <a href='#!' style={{wordBreak: 'break-all'}} onClick={() => window.open("mailto:mrfarhod58@gmail.com")}>Do'stona taklif uchun</a>
                </p>
                <small className="d-block">
                Biz bilan qoling ❤️ QADRDON
                </small>

                <small>
                   &copy;<span> {new Date().getFullYear()}</span>  QADRDONLAR UCHUN 
                </small>
            </div>

        </div>
    )
}

export default RightSideBar
