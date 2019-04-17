class App extends React.Component {
  render() {
    return (
      // normally we wouldn't want to call the function passed in but in this case we want the value right away
      <div>
        <Machine/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));