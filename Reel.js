class Reel extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((el, index) => {
          return <FruitDisplay key={index + (Math.random() * 1000)}>{el}</FruitDisplay>
        })}
      </div>
    )
  }
}