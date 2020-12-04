class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Andy" 
                    from="Bob" 
                    bangs={4} 
                    img="https://media.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.gif"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));