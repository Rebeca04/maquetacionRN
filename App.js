import React from 'react';
import { StyleSheet, Modal } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Tabs,
  Tab,
  View,
  Button
} from "native-base";
import Home from "./screens/Home"

export default function App() {
  return (
    <Home/>
    // <View style={styles.container}>
    //   <Container>
    //     <Header style={styles.header}>
    //       <Left>
    //       </Left>
    //       <Body>
    //         <Title>History</Title>
    //       </Body>
    //       <Right>
    //         <Button transparent>
    //           <Icon name="calendar" />
    //         </Button>
    //       </Right>
    //     </Header>
    //     <Tabs>
    //       <Tab heading="Alerts"></Tab>
    //       <Tab heading="Log"></Tab>
    //       <Tab heading="Messages"></Tab>
    //       <Tab heading="Locations"></Tab>
    //     </Tabs>
    //   </Container>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
