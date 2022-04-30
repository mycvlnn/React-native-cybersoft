import React from 'react'
import Icon from 'components/Base/Icons/Icon'
import Text from 'components/Base/Text'
import {Colors} from 'constants/Colors'
import {Icons} from 'constants/Icons'
import {Pressable, StyleSheet, View} from 'react-native'

interface IProps {
  active: boolean
  icon: any
  name: string
  onPress: () => void
}

const CategoryItem: React.FC<IProps> = ({
  active = false,
  icon = Icons.hamburger,
  name = 'default',
  onPress
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, active && styles.activeContainer]}>
      <View style={[styles.icon, active && styles.iconActive]}>
        <Icon size={24} src={icon} />
      </View>
      <Text style={[styles.text, active && styles.activeText]}>{name}</Text>
    </Pressable>
  )
}

export default React.memo(CategoryItem)

const styles = StyleSheet.create({
  activeContainer: {
    backgroundColor: Colors.primary
  },
  container: {
    width: 70,
    height: 110,
    alignItems: 'center',
    backgroundColor: Colors.categoryColor,
    padding: 8,
    borderRadius: 35,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 4,
    marginHorizontal: 10
  },
  iconActive: {
    backgroundColor: Colors.categoryColor
  },
  icon: {
    borderRadius: 36,
    padding: 16,
    backgroundColor: Colors.backgroundButton
  },
  activeText: {
    color: Colors.categoryColor
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 8,
    color: Colors.categoryName
  }
})
