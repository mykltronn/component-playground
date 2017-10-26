import React, { Component } from 'react';

export default class Tabs extends Component {
   constructor(props) {
     super(props)

     this.state = {
       activeTab: 0,
     }
   }

/**
 * Conditionally render each tab.
 * So an activeTab STATE needs to listen for which tab is active.
 * Ideally, the list of tabs comes in an array.
 * Maybe an array of React Components [ <Tab1 />, <Tab2 /> ]
 * So that when tab1 is clicked, state.activeTab is set to 0 and 
 * How to get each component into an array...
 * there are obvious easy ways, but what's the best pattern?
 */



  render() {
    let navs;
    let tabs;

    return (
      <div className="Tabs">
        <nav className="tab-navigation">

        </nav>
        <div className="tab-content">
        {tabs[this.state.activeTab]}
        </div>
      </div>
    )
  }
}
