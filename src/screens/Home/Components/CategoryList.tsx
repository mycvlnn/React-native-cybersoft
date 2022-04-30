import React from 'react'
import {FlatList, ListRenderItem, View} from 'react-native'
import Category from 'models/Category'
import {categories} from 'data/categories'
import CategoryItem from './CategoryItem'

interface IProps {
  idCategory: string
  onPress: (id: string) => void
}

const CategoryList: React.FC<IProps> = ({idCategory, onPress}) => {
  const renderItem: ListRenderItem<Category> = ({item}) => {
    return (
      <CategoryItem
        active={item.id === idCategory}
        onPress={() => onPress(item.id)}
        name={item.name}
        icon={item.icon}
      />
    )
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  )
}
export default React.memo(CategoryList)
