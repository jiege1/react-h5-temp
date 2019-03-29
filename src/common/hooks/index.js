import React from 'react';

export default class Hooks {
  
  /**
   * componentDidMount
   * @param effect
   */
  static useDidMount(effect = () => {}) {
    React.useEffect(effect, []);
  }
  
}