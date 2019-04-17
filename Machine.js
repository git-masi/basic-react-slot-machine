class Machine extends React.Component {
  state = {
    data: []
  }
  
  giveMeFruit = () => {
    const fruitArr = ["🍒", "🍌", "🍏", "🥝", "🍓", "🍋", "🍑", "🍈", "🍍", "🍇", "🍎"];
    return fruitArr[Math.floor(Math.random() * fruitArr.length)];
  }

  fruitData = () => {
    let fruitArr = []
    for (let i = 0; i < 9; i++) {
      fruitArr.push(this.giveMeFruit());
    }
    return fruitArr;
  }

  playButtonHandler = () => {
    // const oldData = this.state.data;
    const newData = this.fruitData();
    this.setState({data: newData})
  }

  render() {
    return (
      <div>
        <Reel data={this.state.data}/>
        <button onClick={this.playButtonHandler}>Play</button>
      </div>
    )
  }
}