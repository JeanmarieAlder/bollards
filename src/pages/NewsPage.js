import React from "react";
import NewsArticle from "../components/news/NewsArticle";
import { useTranslation } from "react-i18next";
import './NewsPage.css';

const NewsPage = () => {
    const { t } = useTranslation();
    return(
        <div id='news-page'>
            <div id='news-page-title'><h1>{t('s_news')}</h1></div>
            <div id='news-page-content'>
                <NewsArticle></NewsArticle>
            </div>
        </div>
    )
}

export default NewsPage;