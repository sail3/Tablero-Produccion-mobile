'use strict';
import React, { Component } from 'react';
import {
  AsyncStorage,
  Dimensions,
  View,
  Text,
  Image,
  Alert,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
const styles = require('./../utils/styles');

class MainView extends Component {
  static navigationOptions = {
    title: "CONTROL PRODUCCION",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
    this.onLayout();
    this.loadData();
  }

  onLayout() {
    var {height, width} = Dimensions.get('window');
    let minWidth = Math.floor(width);
    let minHeight = Math.floor(height);
    let unitSize = Math.floor(minWidth / 12);
    this.setState({
      minWidth,
      minHeight,
      unitSize,
    });
    this.displayBoard(() => {});
    // this.loadData();
    // if (
    //   typeof this.state.lineNumber === 'undefined' || this.state.lineNumber === null ||
    //   typeof this.state.turn === 'undefined' || this.state.turn === null ||
    //   typeof this.state.rotationTime === 'undefined' || this.state.rotationTime === null ||
    //   typeof this.state.ipServer === 'undefined' || this.state.ipServer === null ||
    //   typeof this.state.portServer === 'undefined' || this.state.portServer === null ||
    //   typeof this.state.timeRefresh === 'undefined' || this.state.timeRefresh === null
    // ) {
    //   this.setState({error: "Configure los datos de la Aplicacion"});
    // } else {
    //   this.setState({error: ""});
    // }
  }

  displayBoard(navigate) {
    this.loadData();
    if (
      typeof this.state.lineNumber === 'undefined' || this.state.lineNumber === null ||
      typeof this.state.turn === 'undefined' || this.state.turn === null ||
      typeof this.state.rotationTime === 'undefined' || this.state.rotationTime === null ||
      typeof this.state.ipServer === 'undefined' || this.state.ipServer === null ||
      typeof this.state.portServer === 'undefined' || this.state.portServer === null ||
      typeof this.state.timeRefresh === 'undefined' || this.state.timeRefresh === null
    ) {
      this.setState({error: "Configurar Aplicacion"});
    } else {
      this.setState({error: ""});
      navigate('Board');
    }
  }

  loadData() {
    AsyncStorage.getItem("STN_lineNumber").then((value) => this.setState({"lineNumber": value}));
    AsyncStorage.getItem("STN_turn").then((value) => this.setState({"turn": value}));
    AsyncStorage.getItem("STN_rotationTime").then((value) => this.setState({"rotationTime": value}));
    AsyncStorage.getItem("STN_ipServer").then((value) => this.setState({"ipServer": value}));
    AsyncStorage.getItem("STN_portServer").then((value) => this.setState({"portServer": value}));
    AsyncStorage.getItem("STN_timeRefresh").then((value) => this.setState({"timeRefresh": value}));
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={[styles.container, {width: this.state.minWidth, height: this.state.minHeight}]} onLayout={ () => this.onLayout()}>
        <Image source={require('./../assets/logo.png')} />
        <TouchableHighlight style={[styles.boton, {width: this.state.unitSize * 10}]} onPress={() => this.displayBoard(navigate) }>
          <Text style={styles.textoBoton}>Tablero de Control</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.boton, {width: this.state.unitSize * 10}]} onPress={() => navigate('Settings') }>
          <Text style={styles.textoBoton}>Panel de Configuracion</Text>
        </TouchableHighlight>
        <Text style={ styles.errorStyle }>{ this.state.error }</Text>
      </View>
    );
  }
}

module.exports = MainView;
