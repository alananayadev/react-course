import React from 'react';
import styles from '../css/news_list.module.css'

const NewsItem = ({item}) => {

    return (
        <div className={styles.news_item}>
            <h3 className={styles.item_header}>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div> 
    )
}

export default NewsItem

