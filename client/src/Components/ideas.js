handleTeamChange(e) {
  let selectedTeam = e.target.value
  this.props.updateSelectedTeam(selectedTeam)
}

updateSelectedTeam = (selectedTeam) => {
  this.setState({
    selectedTeam
  }
  )
}

const data = [
  {
    index: 0,
    tooltip: "Carlos Correa",
    color: "#F4911E",
    radius: 56
  },
  {
    index: 1,
    tooltip: "B",
    color: "#002D62",
    radius: 34
  },
  {
    index: 2,
    tooltip: "C",
    color: "#EB6E1F",
    radius: 32
  },
  {
    index: 3,
    tooltip: "D",
    color: "#F4911E",
    radius: 32
  },
]


getPlayerBubbleData = () => {
  const data = this.props.filteredPlayerData.map(player => ({ index: player.id, tooltip: `${player.name}`, color: '#F4911E', radius: +player.homeruns + 12 }))
  return data
}

const data = this.getPlayerBubbleData()
console.log(data)


const data = this.props.filteredPlayerData.map(player => {
  const container = {}

  container.index = player.id
  container.tooltip = player.name
  container.color = "#002D62"
  container.radius = +player.homeruns

  return container
})