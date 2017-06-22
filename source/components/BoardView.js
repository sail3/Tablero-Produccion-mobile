'use strict';
import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
const RowTable = require('./RowTable');
class BoardView extends Component {
  static navigationOptions = {
    title: "BOARD CONTROL",
    header: null,
  };

  mixins = [TimerMixin];

  constructor(props) {
    super(props);
    const {width, height} = Dimensions.get("window");
    let minWidth = Math.floor(height);
    let minHeight = Math.floor(width);
    let unitSize = Math.floor(minWidth / 12);
    this.state = {
      styleName: "DUMMY",
      workers: 100,
      rateBase: "DUMMY",
      contador: 0,
      minWidth,
      // minHeight,
      unitSize,
      response: {
        "fecha": "",
        "linea": "",
        "turno": "",
        "tipo": "",
        "estilo": "",
        "tsd": "",
        "operarios": "",
        "cuotaCompleta": "",
        "cuotaEficiencia": "",
        "data": []
      }
    };
    this.loadData();
  }

  componentDidMount(){
    // AsyncStorage.getItem("STN_timeRefresh").then((value) => this.setState({"timeRefresh": 10}));
    AsyncStorage.getItem("STN_timeRefresh").then((value) => this.setState({"timeRefresh": value}));
    let TIME_REFRESH = 1000 * this.state.timeRefresh;
    // if (typeof this.state.ipServer === 'undefined' || typeof this.state.portServer === 'undefined') {
    //   return null;
    // }
    this.interval = setInterval(() => {
      try {
        this.loadData();
        let wsUrl = `http://${this.state.ipServer}:${this.state.portServer}/WsTvBoxJSON.asmx/ListadoInfoLinea`;

        let today = new Date();
        let result = fetch(wsUrl,{
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: JSON.stringify({
            par_FchTbl: `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`,
            par_CodLinea: this.state.lineNumber,
            par_CodTurno: this.state.turn,
            par_Tipo: this.state.tipo,
            par_t_tipooper: 20
          })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              response: responseJson,
            });
            return responseJson;
          })
          .catch((error) => {
            this.setState({response: {
              "fecha": "",
              "linea": "",
              "turno": "",
              "tipo": "",
              "estilo": "",
              "tsd": "",
              "operarios": "",
              "cuotaCompleta": "",
              "cuotaEficiencia": "",
              "data": []
            }});
          });
        TIME_REFRESH = 1000 * this.state.timeRefresh;
      } catch (e) { }
    }, TIME_REFRESH);
  }

  onLayout() {
    var {height, width} = Dimensions.get('window');
    let minWidth = Math.floor(height);
    let minHeight = Math.floor(width);
    let unitSize = Math.floor(minWidth / 12);
    this.setState({
      minWidth,
      // minHeight,
      unitSize,
    });
    this.loadData();
  }

  loadData(){
    AsyncStorage.getItem("STN_lineNumber").then((value) => this.setState({"lineNumber": value}));
    AsyncStorage.getItem("STN_turn").then((value) => this.setState({"turn": value}));
    AsyncStorage.getItem("STN_rotationTime").then((value) => this.setState({"rotationTime": value}));
    AsyncStorage.getItem("STN_ipServer").then((value) => this.setState({"ipServer": value}));
    AsyncStorage.getItem("STN_portServer").then((value) => this.setState({"portServer": value}));
    AsyncStorage.getItem("STN_timeRefresh").then((value) => this.setState({"timeRefresh": value}));
  }

  render() {
    const { navigate } = this.props.navigation;
    let rows = [];
    this.state.response.data.forEach((value) => {
      let rowValue = {
        startHour: value[0],
        endHour: value[0],
        produccionAcumulada: value[1],
        produccionProyectada: value[2],
        eficiendiaProyectada: value[3],
        asertividadProyectada: value[4],
      };
      rows.push(
        <RowTable rowValue={rowValue} unitSize={this.state.unitSize} height={40} />
      );
    });
    return(
      <View style={[styles.container, {width: this.state.minWidth}]} onLayout={ () => this.onLayout()}>
        <View style={[styles.header, { width: this.state.minWidth }]}>
          <View style={styles.row}>
            <Text style={[styles.title, { width: this.state.unitSize * 4, height: 60}]}>Peru{"\n"}SNT</Text>
            <Text style={[styles.title, { width: this.state.unitSize * 3, height: 60, fontSize: 50}]}>{this.state.lineNumber}</Text>
            <Text style={[styles.title, { width: this.state.unitSize * 4, height: 60}]}>Turno:{"\n"}{this.state.turn}</Text>
            <TouchableHighlight style={styles.boton} onPress={() => navigate('Settings') }>
              <Image style={{width: this.state.unitSize, height: this.state.unitSize}} source={ require('./../assets/settings.png') } />
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <Text style={[styles.title, { width: this.state.unitSize * 4, height: 60}]}>Estilo:{"\n"}{this.state.styleName}</Text>
            <Text style={[styles.title, { width: this.state.unitSize * 4, height: 60}]}>Operarios:{"\n"}{this.state.workers}</Text>
            <Text style={[styles.title, { width: this.state.unitSize * 4, height: 60}]}>Base:{"\n"}{this.state.rateBase}</Text>
          </View>
        </View>
        <View style={[styles.table, { width: this.state.minWidth }]}>
          <View style={styles.tableHeader}>
            <View style={styles.row}>
              <View style={{width: this.state.unitSize * 2, height: 40}} ><Text>HORA</Text></View>
              <View style={{width: this.state.unitSize * 3, height: 40}} ><Text>PRODUCCION{"\n"}ACUMULADA</Text></View>
              <View style={{width: this.state.unitSize * 3, height: 40}} ><Text>PRODUCCION{"\n"}PROYECTADA</Text></View>
              <View style={{width: this.state.unitSize * 2, height: 40}} ><Text>EFICIENCIA{"\n"}PROYECTADA</Text></View>
              <View style={{width: this.state.unitSize * 2, height: 40}} ><Text>ASERTIVIDAD{"\n"}PROYECTADA</Text></View>
            </View>
          </View>
          <View style={styles.tableBody}>
            {rows}
          </View>
        </View>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  boton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  textoBoton: {
    color: 'white'
  },
  header: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 25
  },
  table: {
    backgroundColor: "yellow"
  },
  tableHeader: {
    color: "green"
  },
  tableBody: {
    color: "green"
  },
  row: {
    color: 'blue',
    justifyContent: 'center',
    flexDirection: "row",
    borderBottomWidth: 1
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  }
});

module.exports = BoardView;
