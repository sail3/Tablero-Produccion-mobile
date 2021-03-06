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

class SettingsView extends Component {
  static navigationOptions = {
    title: "Configuracion de Aplicacion",
    header: null,
  };
  constructor(props) {
    super(props);
    const {width, height} = Dimensions.get("window");
    let minWidth = Math.floor(width);
    let minHeight = Math.floor(height);
    let unitSize = Math.floor(minWidth / 12);
    this.state = {
      minHeight,
      minWidth,
      unitSize,
    };
    AsyncStorage.getItem("STN_lineNumber").then((value) => this.setState({"lineNumber": value}));
    AsyncStorage.getItem("STN_turn").then((value) => this.setState({"turn": value}));
    AsyncStorage.getItem("STN_rotationTime").then((value) => this.setState({"rotationTime": value}));
    AsyncStorage.getItem("STN_ipServer").then((value) => this.setState({"ipServer": value}));
    AsyncStorage.getItem("STN_portServer").then((value) => this.setState({"portServer": value}));
    AsyncStorage.getItem("STN_timeRefresh").then((value) => this.setState({"timeRefresh": value}));
  }

  async saveData(navigate) {
    try {
      if (
        0 === this.state.lineNumber.lenght ||
        0 === this.state.turn.lenght ||
        0 === this.state.rotationTime.lenght ||
        0 === this.state.ipServer.lenght ||
        0 === this.state.portServer.lenght ||
        0 === this.state.timeRefresh.lenght
      ) {
        Alert.alert(
          "Error",
          "Complete todos los campos"
        );
      } else {
        AsyncStorage.setItem("STN_lineNumber", this.state.lineNumber);
        AsyncStorage.setItem("STN_turn", this.state.turn);
        AsyncStorage.setItem("STN_rotationTime", this.state.rotationTime);
        AsyncStorage.setItem("STN_ipServer", this.state.ipServer);
        AsyncStorage.setItem("STN_portServer", this.state.portServer);
        AsyncStorage.setItem("STN_timeRefresh", this.state.timeRefresh);
        navigate('Home')
      }
    } catch (e) {
      console.log("eror en el guardado de datos", e);
    }
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
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container} onLayout={ () => this.onLayout()}>
        {/* <View style={[ styles.wapper, {width: this.state.minWidth, height: this.state.minHeight} ]} > */}
        <View>
          <Text style={styles.textDescription}>Numero de Linea</Text>
          <TextInput
            style={[styles.textInput, {width: this.state.unitSize * 10}]}
            onChangeText={(value) => { this.setState({lineNumber: value.trim()}) }}
            value={ this.state.lineNumber}
          />
          <Text style={styles.textDescription}>Turno</Text>
          <TextInput
            style={[styles.textInput, {width: this.state.unitSize * 10}]}
            onChangeText={(value) => {this.setState({turn: value.trim()})}}
            value={ this.state.turn}
          />
          <Text style={styles.textDescription}>Tiempo de rotacion</Text>
          <TextInput
            style={[styles.textInput, {width: this.state.unitSize * 10}]}
            onChangeText={(value) => {this.setState({rotationTime: value.trim()})}}
            value={ this.state.rotationTime}
          />
          <Text style={styles.textDescription}>IP server</Text>
          <TextInput
            style={[styles.textInput, {width: this.state.unitSize * 10}]}
            onChangeText={(value) => {this.setState({ipServer: value.trim()})}}
            value={ this.state.ipServer}
          />
          <Text style={styles.textDescription}>Port</Text>
          <TextInput
            style={[styles.textInput, {width: this.state.unitSize * 10}]}
            onChangeText={(text) => this.setState({portServer: text.trim()})}
            value={ this.state.portServer}
          />
          <Text style={styles.textDescription}>Time refresh</Text>
          <TextInput
            style={[styles.textInput, {width: this.state.unitSize * 10}]}
            onChangeText={(text) => this.setState({timeRefresh: text.trim()})}
            value={ this.state.timeRefresh}
          />
          <TouchableHighlight style={[styles.boton, { width: this.state.unitSize * 10 }]} onPress={() => this.saveData(navigate)}>
            <Text style={styles.textoBoton}>Guardar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = SettingsView;
