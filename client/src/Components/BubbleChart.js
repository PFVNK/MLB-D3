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
    this.setState({
      playerData: nextProps.filteredPlayerData
    })
  }

  render() {
    let { playerData } = this.state
    let { teamID, selectedStat, playersLoaded } = this.props
    let teamColor = teams[teamID].color

    if (selectedStat === 'homeRun') {
      var operation = 30
    } else if (selectedStat === 'battingAVG') {
      operation = -250
    } else {
      operation = -30
    }

    const data = playerData.map(player => ({
      index: player.index,
      tooltip: `${player.name} 
BA: ${player.battingAVG} 
HR: ${player.homeRun} 
HITS: ${player.hits}`,
      color: teamColor,
      radius: +player[selectedStat].replace(/\./g, "") + +`${operation}`,
    }))

    if (playersLoaded) {
      return (
        <div className='bubble-chart'>
          <ReactBubbleChart width={1000} height={800} center={{ x: 650, y: 275 }} data={data} />
        </div>
      )
    } else { return null }
  }
}

export default BubbleChart
