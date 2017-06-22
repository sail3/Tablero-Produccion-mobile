'use strict';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
const styles = require('./../utils/styles');

class RowTable extends Component {
  render() {
    return(
      <View style={styles.row}>
        <View style={{width: this.props.unitSize * 2, height: this.props.height}} >
          <Text >{this.props.rowValue.startHour}</Text>
          <Text >{this.props.rowValue.endHour}</Text>
        </View>
        <View style={{width: this.props.unitSize * 3, height: this.props.height}} ><Text style={styles.cell}>{this.props.rowValue.produccionAcumulada}</Text></View>
        <View style={{width: this.props.unitSize * 3, height: this.props.height}} ><Text style={styles.cell}>{this.props.rowValue.produccionProyectada}</Text></View>
        <View style={{width: this.props.unitSize * 2, height: this.props.height}} ><Text style={styles.cell}>{this.props.rowValue.eficiendiaProyectada}</Text></View>
        <View style={{width: this.props.unitSize * 2, height: this.props.height}} ><Text style={styles.cell}>{this.props.rowValue.asertividadProyectada}</Text></View>
      </View>
    );
  }
}

module.exports = RowTable;
