import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';
export default class IceCreamBuilder extends Component {
  render() {
    return (
      <div className={['container', classes.container].join(' ')}>
        <IceCream/>
        <Builder/>
      </div>
    )
  }
}
