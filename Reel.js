class Reel extends React.Component {
  render() {
    const reelStyle = {
      height: '400px',
      width: '400px',
      display: 'flex',
      flexWrap: 'wrap',
      background: 'pink'
    }

    const [s1,s2,s3,s4,s5,s6,s7,s8,s9] = this.props.data;
    let outcome = null;
    if (s1 === undefined) {
      outcome = null;
    } else if (s1 === s2 && s1 === s3) {
      outcome = 'You win!' ;
    } else if (s1 === s5 && s1 === s9) {
      outcome = 'You win!';
    } else if (s1 === s4 && s1 === s7) {
      outcome = 'You win!';
    } else if (s2 === s5 && s2 === s8) {
      outcome = 'You win!';
    } else if (s3 === s6 && s3 === s9) {
      outcome = 'You win!';
    } else if (s3 === s5 && s3 === s7) {
      outcome = 'You win!';
    } else {
      outcome = 'You Lose!';
    }

    return (
      <div style={reelStyle}>
        {this.props.data.map((el, index) => {
          return <FruitDisplay key={index + (Math.random() * 1000)}>{el}</FruitDisplay>
        })}
        <p>{outcome}</p>
      </div>
    )
  }
}