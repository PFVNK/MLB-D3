import React, { Component } from 'react'
import './App.css';

import NavBar from './Components/NavBar'
import BubbleChart from './Components/BubbleChart'

let teams = require('./teams/teams.json')

const API_URL = 'http://localhost:3001/graph'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playersLoaded: false,
      playerData: [],
      filteredPlayerData: [],
      selectedTeam: 'Arizona Diamondbacks',
      selectedStat: 'homeRun',
      teamID: 0
    }
  }

  componentDidMount() {
    this.fetchPlayerData()
  }

  updateSelectedStat = (selectedStat) => {
    this.setState({
      selectedStat,
    },
      () => this.fetchPlayerData()
    )
  }

  updateSelectedTeam = (teamID, selectedTeam) => {
    console.log('updateSelectedTeam')
    this.setState({
      selectedTeam,
      teamID
    },
      () => this.fetchPlayerData()
    )
  }

  filterPlayerData = () => {
    console.log('filterPlayerData')
    let filteredPlayerData = this.state.playerData.filter(p => p.name).slice(0, this.state.playerData.length / 2)
    this.setState({
      filteredPlayerData,
      playersLoaded: true
    })
  }

  fetchPlayerData = () => {
    console.log('fetchPlayerData')
    const playerData = `${API_URL}/${teams[this.state.teamID].location}`

    fetch(playerData)
      .then(response => response.json())
      .then(json => this.setState({
        playerData: json.data || [],
        playersLoaded: false
      }))
      .then(this.filterPlayerData)
  }

  render() {
    return (
      <>
        <NavBar
          teamID={this.state.teamID}
          selectedTeam={this.state.selectedTeam}
          updateSelectedTeam={this.updateSelectedTeam}
          updateSelectedStat={this.updateSelectedStat}
        />
        <BubbleChart
          teamID={this.state.teamID}
          playerData={this.state.playerData}
          selectedStat={this.state.selectedStat}
          filteredPlayerData={this.state.filteredPlayerData}
          playersLoaded={this.state.playersLoaded}
        />
      </>
    )
  }
}

export default App;
