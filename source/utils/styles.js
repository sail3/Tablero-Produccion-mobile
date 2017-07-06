import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
  },
  wrapper: {
    transform: [{rotate: '90deg'}]
  },
  mainLogo: {
    width: 50,
    height: 50,
  },
  boton: {
    height: 40,
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
  title: {
    color: '#F4F409',
    fontSize: 25
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
  },
  textDescription: {
    color: '#FF0801',
    fontSize: 20
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white'
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
    borderColor: 'gray',
    borderBottomWidth: 1
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  errorStyle: {
    color: '#FF0801',
    fontSize: 15
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F0F0F',
//     transform: [
//       {rotate: '90deg'}
//     ]
//   },
//   boton: {
//     height: 40,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//     borderRadius: 8,
//     borderWidth: 1
//   },
//   textoBoton: {
//     color: 'white',
//     fontSize: 30
//   },
//   title: {
//     fontSize: 25
//   },
// });

module.exports = styles;
