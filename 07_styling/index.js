function randomPick() {
    const candidates = ["🥐", "🍞", "🥨"];

    return candidates[Math.floor(Math.random() * candidates.length)];
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Slot 
                    s1 = {randomPick()}
                    s2 = {randomPick()}
                    s3 = {randomPick()}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('content'));