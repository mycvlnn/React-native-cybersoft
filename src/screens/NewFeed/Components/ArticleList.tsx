import React from 'react'

import {ScrollView} from 'react-native'
import {dataFeeds} from '../../../models'
import Article from './Article'

const ArticleList = () => {
  const renderArticleList = () => {
    return dataFeeds.map(data => {
      return <Article key={data.id} {...data} />
    })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderArticleList()}
    </ScrollView>
  )
}

export default ArticleList
