import React, {useState} from 'react'
import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faComment, faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {IArticle} from '../../../constants'

const Article: React.FC<IArticle> = ({title, name, image, content, time}) => {
  const [numberLove, setNumberLove] = useState(0)
  const [numberComment, setNumberComment] = useState(0)
  const [visibleInput, setVisibleInput] = useState(false)

  const loveArticle = () => {
    setNumberLove(currentLove => currentLove + 1)
  }

  const submitCommentHandler = () => {
    setVisibleInput(false)
    setNumberComment(prevNumComment => prevNumComment + 1)
  }

  const commenting = () => {
    setVisibleInput(true)
  }

  const renderInputComment = () => {
    if (!visibleInput) return null
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#ccc',
          marginTop: 10
        }}>
        <TextInput
          onSubmitEditing={submitCommentHandler}
          placeholder="Please comment..."
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.infor}>
        <Image style={styles.avatar} source={image} />
        <View>
          <Text style={styles.titleInfo}>{title}</Text>
          <View style={styles.textInfo}>
            <Text>{name}</Text>
            <Text>{time}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.txtDescription}>{content}</Text>
      <View style={styles.actions}>
        <Pressable style={styles.actions} onPress={loveArticle}>
          <FontAwesomeIcon icon={faHeartCirclePlus} size={24} color="#98002E" />
          <Text style={styles.number}>{numberLove}</Text>
        </Pressable>

        <Pressable
          onPress={commenting}
          style={[styles.actions, styles.control]}>
          <FontAwesomeIcon icon={faComment} color="black" size={24} />
          <Text style={styles.number}>{numberComment}</Text>
        </Pressable>
      </View>
      {renderInputComment()}
    </View>
  )
}

export default Article

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  infor: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  titleInfo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  },
  textInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 8
  },
  txtDescription: {
    color: 'black',
    fontSize: 16
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  control: {
    marginLeft: 16
  },
  number: {
    marginLeft: 4,
    fontWeight: '500',
    fontSize: 16,
    color: 'black'
  }
})
