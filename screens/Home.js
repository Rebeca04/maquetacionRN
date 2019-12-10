import React from "react";
import { StyleSheet, Modal } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Text,
  List,
  ListItem,
  Tabs,
  Tab,
  View,
  Button,
  Badge,
  Icon,
  Row,
  Col,
  Grid
} from "native-base";
// import APIConstants from "../lib/APIConstants";
// import Alert from "../lib/model/Alert";
// import Log from "../lib/model/Log";
// import Diffusion from "../lib/model/Diffusion";
// import User from "../lib/model/User";
// import DateRangePicker from "../components/DateRangePicker";
// import Loader from "../components/Loader";
// import DateUtils from "../../localis-app/lib/DateUtils";


export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      ready: false,
      alerts: null,
      logs: null,
      diffusions: null,
      locations: null,
      modalVisible: false
    };
  }

  openRangePicker() {
    this.setState({
      modalVisible: true
    });
  }

  alertsTab() {
    return (
      <Content>
        <List>
          {/* <ListItem key='1' style={styles.infoHistory}> */}
          <ListItem key='1'>
            <Grid>
              <Col >
                <Badge style={styles.bagdePurple} />
              </Col>
              <Col>
                <Body>
                  <Text style={styles.colorPurple}>Urgente</Text>
                  <Text note numberOfLines={1}>
                    Code: 4242424
                    </Text>
                  <Text note numberOfLines={1}>
                    Date: 10/10/2019
                    </Text>
                </Body>
              </Col>
              <Col>
                <Icon name="ios-arrow-forward" />
              </Col>
            </Grid>
          </ListItem>
        </List>
      </Content>
    );
  }

  logsTab() {
    if (this.state.ready) {
      return (
        <Content>
          <List>
            {this.state.logs.map(log => {
              return (
                <ListItem key={log.id}>
                  <Body>
                    <Text>Type: {log.eventType}</Text>
                    <Text note numberOfLines={1}>
                      {log.action}
                    </Text>
                  </Body>
                </ListItem>
              );
            })}
          </List>
        </Content>
      );
    }
  }

  messagesTab() {
    return (
      <Content>
        <List>
          <ListItem>
            <Body>
              <Text>From: ANONIMO</Text>
              <Text note> Lorem inpsu</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    );
  }

  locationsTab() {
    if (this.state.ready) {
      return <View />;
    }
  }

  loadHistoryInfo(dateRange) {
    let formdata = new FormData();
    formdata.append("id", global.bracelet.id);
    formdata.append("datestart", this.state.dateRange[0]);
    formdata.append("dateend", this.state.dateRange[1]);

    console.log("Loading date range for: " + this.state.dateRange);
  }

  render() {
    if (!this.state.ready) {
      //   this.loadHistoryInfo(this.state.dateRange);
    }
    return (
      <Container>
        <Header hasTabs style={styles.header}>
          <Left>
            <Text note></Text>
            <Text note></Text>
          </Left>
          <Body>
            <Title>History</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.openRangePicker()}>
            </Button>
          </Right>
        </Header>
        <Tabs tabContainerStyle={{ backgroundColor: '#fff', height: 60 }} tabBarUnderlineStyle={{ backgroundColor: 'rgb(148, 0, 211)' }}>
          <Tab heading="Alerts" tabStyle={styles.tabs} textStyle={styles.colorPurple} activeTabStyle={styles.activeTabs} activeTextStyle={styles.colorPurple}>{this.alertsTab()}</Tab>
          <Tab heading="Log" tabStyle={styles.tabs} textStyle={styles.colorPurple} activeTabStyle={styles.activeTabs} activeTextStyle={styles.colorPurple}>{this.logsTab()}</Tab>
          <Tab heading="Messages" tabStyle={styles.tabs} textStyle={styles.colorPurple} activeTabStyle={styles.activeTabs} activeTextStyle={styles.colorPurple}>{this.messagesTab()}</Tab>
          <Tab heading="Locations" tabStyle={styles.tabs} textStyle={styles.colorPurple} activeTabStyle={styles.activeTabs} activeTextStyle={styles.colorPurple}>{this.locationsTab()}</Tab>
        </Tabs>
        <Modal
          transparent={true}
          animationType="fade"
          visible={this.state.modalVisible}
        >
          <View style={styles.datePickerModal}>
            <View style={styles.datePicker}>
              <Button
                block
                transparent
              >
                <Text>Show this date</Text>
              </Button>
              <Button
                block
                transparent
              >
                <Text>Cancel</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(148, 0, 211)"
  },
  tabs: {
    backgroundColor: "rgb(255, 255, 255)"
  },
  activeTabs: {
    backgroundColor: "rgb(255, 255, 255)",
    borderBottomColor: 'rgb(148, 0, 211)'
  },
  colorPurple: {
    color: 'rgb(148, 0, 211)'
  },
  bagdePurple: {
    backgroundColor: 'rgb(148, 0, 211)',
    height: 12,
    marginTop: 5
  },
  infoHistory: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  datePickerModal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgb(153, 50, 204)"
  },
  datePicker: {
    backgroundColor: "white",
    margin: 10,
    padding: 5,
    borderRadius: 10
  }
});
