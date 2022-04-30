import Button from 'components/Base/Button/Button'
import Icon from 'components/Base/Icons/Icon'
import Text from 'components/Base/Text'
import {Icons} from 'constants/Icons'
import React from 'react'
import {StyleSheet, View} from 'react-native'

interface IProps {
  total: number
  onOrder?: () => void
}

const Cart: React.FC<IProps> = ({total, onOrder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.total}>
        <Text style={styles.textTotal}>4 Items in Cart</Text>
        <Text style={styles.textTotal}>${total}</Text>
      </View>
      <View style={styles.orderInfo}>
        <View style={styles.infoPayment}>
          <View style={styles.itemPayment}>
            <Icon src={Icons.location} style={styles.iconItemPayment} />
            <Text>745 LincoIn PI</Text>
          </View>
          <View style={styles.itemPayment}>
            <Icon src={Icons.mastercard} style={styles.iconItemPayment} />
            <Text>•••5491</Text>
          </View>
        </View>
        <Button
          textColor="#fff"
          style={styles.btnOrder}
          fontWeight="700"
          fontSize={18}
          onPress={onOrder}>
          Order
        </Button>
      </View>
    </View>
  )
}
export default React.memo(Cart)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  textTotal: {
    fontWeight: 'bold',
    fontSize: 18
  },
  orderInfo: {
    padding: 20
  },
  infoPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemPayment: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconItemPayment: {
    marginRight: 8
  },
  btnOrder: {
    marginVertical: 18
  }
})
