import React from "react";
import { Link } from "react-router-dom";

import articleImageDefault from "../../assets/img/news-image-default.jpg"
import './NewsArticle.css'

const NewsArticle = () => {
    return(
        <div className='news-article'>
            <div className='news-article-title'><h2>Welcome to bollards.ch news!</h2></div>
            <div className='news-article-infos'>Posted on: November 18, 2021 by Wakxy13</div>
            <div className='news-article-image-div'><img className='news-article-image' alt={""} src={articleImageDefault}></img></div>
            <div className='news-article-abstract'><b>This page will cover what's hapenning around this website. Get to know useful insiders and tips to visit the swiss border and its border bollards.</b></div>
            <div className='news-article-content'>Dear visitor, this page will soon be available. Make sure to check out the other pages in the meantime! Go to <Link to={'/list'}>the list of all bollards</Link> or to <Link to='/map'>the interactive map</Link>.</div>
        </div>
    )
}

export default NewsArticle;