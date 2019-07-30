import React, { Component } from 'react'
import '../App.css';
import ReactBubbleChart from 'react-d3-bubble'

let teams = require('../teams/teams.json')


class BubbleChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerData: this.props.filteredPlayerData
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.filteredPlayerData)
    this.setState({
      playerData: nextProps.filteredPlayerData
    })
  }

  componentDidUpdate() {
    console.log('bubblechart updated')

  }

  render() {
    const data = this.state.playerData.map(player => ({
      index: player.index,
      tooltip: `${player.name}`,
      color: "#E3D4AD",
      radius: +player.radius + 40,
      width: 800,
      height: 450
    }))
    console.log(data)
    if (this.props.playersLoaded) {
      return (
        <div className='bubble-chart'>
          <ReactBubbleChart width={1000} height={800} center={{ x: 650, y: 275 }} data={data} />
        </div>
      )
    } else { return null }
  }
}

export default BubbleChart
