import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

/*
Descrição: Crie uma interface que simule um post de rede social com nome do usuário, imagem e descrição.

Instruções:

Coloque o nome do usuário no topo, usando um Text com uma fonte levemente maior e em negrito.
Adicione uma imagem central com o componente Image.
Insira uma descrição abaixo da imagem e aplique um estilo de fundo cinza claro, com espaçamento entre cada elemento.
*/

export default function Interface(){
  return(
    <View style={styles.corpo}>
      <Text style={styles.nome}>
        Vitor Cutrin
      </Text>
      <Image 
      source={{ uri: 'https://via.placeholder.com/300x200' }}
      style={styles.foto}
      />
      <Text style={styles.descricao}>Esse é um exemplo de imagem e descrição</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  corpo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  foto: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
  },

});