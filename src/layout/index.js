import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';
import Hooks from 'common/hooks';

function Layout() {
  
  Hooks.useDidMount(() => {
    console.log('componentDidMount!');
  });
  
  return (
    <div className={css.layout}>
      react-h5-temp
    </div>
  );
}

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
