import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alert extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error("姓名：" + error.msg.name);
      }
      if (error.msg.email) {
        alert.error("邮箱：" + error.msg.email);
      }
      if (error.msg.message) {
        alert.error("信息：" + error.msg.message);
      }
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors.join());
      }
      if (error.msg.username) {
        alert.error(error.msg.username.join());
      }
    }

    if (message !== prevProps.message) {
      if (message.leadDeleted) {
        alert.success(message.leadDeleted);
      }
      if (message.leadAdded) {
        alert.success(message.leadAdded);
      }
      if (message.passwordNotMatch) {
        alert.error(message.passwordNotMatch);
      }
    }
  }

  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alert));
