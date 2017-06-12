import React from 'react'
import PropTypes from 'prop-types'
import './Feed.css'

export function Feed(feedItems){
    return(
        <ul className='FeedGrid'>
            {feedItems.feedItems.map(function(feedItem, index){
               return(
                <li key = {index} className='ArticleHolder'>
                     <img
                       className='ArticleImage'
                       src={feedItem.article.image_url}
                       alt={'Article'}
                      />
                      <p className='ArticleTitle'>{feedItem.article.title}</p>
                </li>
               )
            })}
        </ul>
    )
}

Feed.propTypes = {
  feedItems: PropTypes.array.isRequired,
}