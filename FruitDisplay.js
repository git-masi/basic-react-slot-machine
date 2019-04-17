class FruitDisplay extends React.Component {
  render() {
    const fruitDisplayStyle = {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white',
      boxShadow: 'inset 0 0 0 .2rem #333',
      flexGrow: '1',
      flexShrink: '0',
      flexBasis: '33%'
    }

    return (
      <div style={fruitDisplayStyle}>
        {this.props.children}
      </div>
    )
  }
}