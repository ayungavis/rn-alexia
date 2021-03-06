import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Alert } from 'react-native';
import axios from 'axios';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { connect } from 'react-redux';

import { getCart, deleteCart } from 'library/redux/actions/orders';

import server from 'res/server';

const success = false;

class AppleStyleSwipeableRow extends Component {
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };
  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = (id, carts) => () => {
      /*var { cartItem } = carts*/
      this.deleteItem(id)
      this.close()
      var cartIndex = carts.findIndex(i => i.id === id)
      carts.splice(cartIndex, 1);
      this.props.navigation.navigate('Cart', {
        onBack: () => this.refresh()
      })
    };
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler(this.props.id, this.props.carts)}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };
  renderRightActions = progress => (
    <View style={{ width: 80, flexDirection: 'row' }}>
      {this.renderRightAction('Delete', '#dd2c00', 80, progress)}
      {/*this.renderRightAction('Flag', '#ffab00', 128, progress)*/}
      {/*this.renderRightAction('More', '#dd2c00', 64, progress)*/}
    </View>
  );
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };

  deleteItem = (id) => {
    this.props.dispatch(deleteCart(id));
  }

  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={0}
        rightThreshold={40}
        /*renderLeftActions={this.renderLeftActions}*/
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps)(AppleStyleSwipeableRow)

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});