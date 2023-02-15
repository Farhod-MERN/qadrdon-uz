import React, { useEffect } from 'react'

import Status from '../components/home/Status'
import Posts from '../components/home/Posts'
import RightSideBar from '../components/home/RightSideBar'

import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'
import LeftSideBar from '../components/home/LeftSideBar'


let scroll = 0;

const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])

    return (
        <div className="home row mx-0">
            <div className='leftSidebar col-md-0 col-lg-3 border-right'>
                <LeftSideBar />
            </div>
            <div className="col-md-8 col-lg-6 px-lg-5">
                <Status />
                {
                    homePosts.loading 
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                    : (homePosts.result === 0 && homePosts.posts.length === 0)
                        ? <h5 className="text-center">Ayni paytda postlar mavjud emas</h5>
                        : <Posts />
                }
                
            </div>
            
            <div className="col-md-4 col-lg-3 border-left">
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home
