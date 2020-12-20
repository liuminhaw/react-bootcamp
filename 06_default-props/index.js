class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Andy" 
                    from="Bob" 
                    bangs={4} 
                />
                <Hello 
                    to="Cindy" 
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));