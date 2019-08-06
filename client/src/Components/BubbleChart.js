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
    console.log(this.props.selectedStat)
  }

  render() {
    let teamColor = teams[this.props.teamID].color
    let selectedStat = this.props.selectedStat

    if (selectedStat === 'homeRun') {
      var operation = 30
    } else if (selectedStat === 'battingAVG') {
      operation = -250
    } else {
      operation = -30
    }

    const data = this.state.playerData.map(player => ({
      index: player.index,
      tooltip: `${player.name} 
BA: ${player.battingAVG} 
HR: ${player.homeRun} 
HITS: ${player.hits}`,
      color: teamColor,
      radius: +player[selectedStat].replace(/\./g, "") + +`${operation}`,
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
