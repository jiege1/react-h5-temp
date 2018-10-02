import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';

export default class Layout extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={css.layout}>
        react-h5-temp
      </div>
    );
  }
}