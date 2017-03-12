/**
 * Created by letqt on 12/3/17.
 */
import React, {Component} from "react";
import {ListView, Subtitle, Image, Row, Title, Divider} from "@shoutem/ui";
import {connect} from "react-redux";
import * as actions from "./actions";
import {View, ScrollView, StyleSheet} from "react-native";
import AppTitle from "./AppTitle";

class GirlList extends Component {
  componentDidMount() {
    this.props.fetchAll()
  }

  renderRow(girl, index) {
    return (
      <View>
        <Row>
          <Image
            styleName="medium rounded-corners"
            source={{ uri: girl.image }}
          />
          <View styleName="vertical stretch space-between">
            <Title>{girl.name}</Title>
            <Subtitle>{"Price: $" + girl.price}</Subtitle>
          </View>
        </Row>
        <Divider styleName="line"/>
      </View>
    )
  }

  render() {
    return (
      <View>
        <AppTitle>Girl List</AppTitle>
        <ListView
          data={this.props.girls}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row', padding: 8
  },
})

function mapStateToProps(state) {
  return {girls: state.girls}
}

export default connect(mapStateToProps, {
  fetchAll: actions.fetchAll,
  edit: actions.edit,
})(GirlList);