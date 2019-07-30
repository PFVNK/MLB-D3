import React, { Component } from 'react'
import '../App.css';

let teams = require('../teams/teams.json')

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleTeamChange = this.handleTeamChange.bind(this)
  }

  componentDidUpdate() {
    console.log('navbar did update')
  }

  handleTeamChange(e) {
    let teamID = e.target.selectedIndex
    let selectedTeam = e.target.value
    this.props.updateSelectedTeam(teamID, selectedTeam)
  }

  render() {
    return (
      <>
        <div className='team-navbar'>
          <div className='team-image'>
            <img src={teams[this.props.teamID].img_url} alt="" />
          </div>
          <div className='team-select'>
            <div className='team-text'>
              Pick a team:
            </div>
            <select value={this.props.selectedTeam} onChange={this.handleTeamChange}>
              <option value='Arizona Diamondbacks' id='1'>Arizona Diamondbacks</option>
              <option value='Atlanta Braves' id='2'>Atlanta Braves</option>
              <option value='Baltimore Orioles' id='3'>Baltimore Orioles</option>
              <option value='Boston Red Sox' id='4'>Boston Red Sox</option>
              <option value='Chicago Cubs' id='5'>Chicago Cubs</option>
              <option value='Chicago White Sox' id='6'>Chicago White Sox</option>
              <option value='Cincinnati Reds' id='7'>Cincinnati Reds</option>
              <option value='Cleveland Indians' id='8'>Cleveland Indians</option>
              <option value='Colorado Rockies' id='9'>Colorado Rockies</option>
              <option value='Detroit Tigers' id='10'>Detroit Tigers</option>
              <option value='Miami Marlins' id='11'>Miami Marlins</option>
              <option value='Houston Astros' id='12'>Houston Astros</option>
              <option value='Kansas City Royals' id='13'>Kansas City Royals</option>
              <option value='Los Angeles Angels of Anaheim' id='14'>Los Angeles Angels of Anaheim</option>
              <option value='Los Angeles Dodgers' id='15'> Los Angeles Dodgers</option>
              <option value='Milwaukee Brewers' id='16'>Milwaukee Brewers</option>
              <option value='Minnesota Twins' id='17'>Minnesota Twins</option>
              <option value='ew York Mets' id='18'>New York Mets</option>
              <option value='New York Yankees' id='19'>New York Yankees</option>
              <option value='Oakland Athletics' id='20'>Oakland Athletics</option>
              <option value='Philadelphia Phillies' id='21'>Philadelphia Phillies</option>
              <option value='Pittsburgh Pirates' id='22'>Pittsburgh Pirates</option>
              <option value='Saint (St.) Louis Cardinals' id='23'>Saint (St.) Louis Cardinals</option>
              <option value='San Diego Padres' id='24'>San Diego Padres</option>
              <option value='San Francisco Giants' id='25'>San Francisco Giants</option>
              <option value='Seattle Mariners' id='26'>Seattle Mariners</option>
              <option value='Tampa Bay Rays' id='27'>Tampa Bay Rays</option>
              <option value='Texas Rangers' id='28'>Texas Rangers</option>
              <option value='Toronto Blue Jays' id='29'>Toronto Blue Jays</option>
              <option value='Washington Nationals' id='30'>Washington Nationals</option>
            </select>
          </div>

        </div>
      </>
    );
  }
}

export default NavBar