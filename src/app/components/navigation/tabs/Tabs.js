import React, { Component } from 'react';
import './tabs.css';

// import children
import ExampleTabOne from './ExampleTabOne';
import ExampleTabTwo from './ExampleTabTwo';
import ExampleTabThree from './ExampleTabThree';

const TABS = [
  {
    'name': 'Tab One',
    'component': <ExampleTabOne />
  },
  {
    'name': 'Tab two',
    'component': <ExampleTabTwo />
  },
  {
    'name': 'Tab three',
    'component': <ExampleTabThree />
  }
];

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
    }
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(event) {
    this.setState({ activeTab: event.target.id })
  }

  render() {

    let tabNavs = TABS.map( (tab, index) => {
      console.log(index)
      console.log(this.state.activeTab)
      let active = index == this.state.activeTab; // eslint-disable-line
      console.log(active)
      return (
        <li 
          key={index} 
          id={index} 
          onClick={this.changeTab}
          className={"tab-li " + (active ? 'tab-selected' : "") }
        >
          {tab.name}
        </li>
      )
    })

    return (
      <div className="Tabs">
        <nav className="tab-navigation">
          {tabNavs}
        </nav>
        <div className="tab-content">
          {TABS[this.state.activeTab].component}
        </div>
      </div>
    )
  }
}
