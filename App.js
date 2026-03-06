import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {

  const mensagens = [
    {
      nome: "Claudia Alves",
      mensagem: "Do more of what you love.",
      tempo: "3m ago",
      notificacao: 3,
      foto: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      nome: "Dani Martinez",
      mensagem: "Do your own thing.",
      tempo: "5m ago",
      notificacao: 1,
      foto: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      nome: "Kimberly Nguyen",
      mensagem: "Kindness is beautiful.",
      tempo: "1h ago",
      notificacao: 2,
      foto: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      nome: "Mariana Napolitani",
      mensagem: "Live your purpose.",
      tempo: "2h ago",
      notificacao: 1,
      foto: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      nome: "Olivia Wilson",
      mensagem: "You got this.",
      tempo: "5h ago",
      notificacao: 0,
      foto: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
      nome: "Rachelle Beaudry",
      mensagem: "You're wonderful.",
      tempo: "Yesterday",
      notificacao: 0,
      foto: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      nome: "Soo Jin Ae",
      mensagem: "Keep it simple.",
      tempo: "Yesterday",
      notificacao: 0,
      foto: "https://randomuser.me/api/portraits/women/7.jpg"
    }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Messages & Chat</Text>

      <View style={styles.topo}>
        <Text>Mark all read</Text>
        <Text>Sort by time</Text>
      </View>

      <ScrollView>

        {mensagens.map((item, index) => (
          <View key={index} style={styles.card}>

            <Image source={{ uri: item.foto }} style={styles.foto} />

            <View style={styles.textos}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.mensagem}>{item.mensagem}</Text>
            </View>

            <View style={styles.direita}>
              <Text style={styles.tempo}>{item.tempo}</Text>

              {item.notificacao > 0 && (
                <View style={styles.bolha}>
                  <Text style={styles.numero}>{item.notificacao}</Text>
                </View>
              )}

            </View>

          </View>
        ))}

      </ScrollView>

      <View style={styles.menu}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Chat</Text>
        <Text style={styles.menuItem}>Mail</Text>
        <Text style={styles.menuItem}>Profile</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 40
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },

  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 15
  },

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    alignItems: "center"
  },

  foto: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  textos: {
    flex: 1,
    marginLeft: 12
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold"
  },

  mensagem: {
    color: "gray"
  },

  direita: {
    alignItems: "flex-end"
  },

  tempo: {
    fontSize: 12,
    color: "gray"
  },

  bolha: {
    backgroundColor: "#3b5998",
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },

  numero: {
    color: "white",
    fontSize: 12
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ddd"
  },

  menuItem: {
    color: "#3b5998",
    fontWeight: "bold"
  }

});