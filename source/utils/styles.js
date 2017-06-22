import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    transform: [
      {rotate: '90deg'}
    ]
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
//   errorStyle: {
//     color: '#FF0801',
//     fontSize: 35
//   }
// });

module.exports = styles;
