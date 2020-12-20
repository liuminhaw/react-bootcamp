class Slot extends React.Component {
    render() {
        const props = this.props;
        const win = props.s1 === props.s2 && props.s2 === props.s3;
        if (win) {
            var message = "You win!";
        } else {
            var message = "You lose!";
        }

        return (
            <div className="Machine">
                <p style={{fontSize: "50px"}}>{props.s1} {props.s2} {props.s3}</p>
                <p className={win ? "winner" : "loser"}>{message}</p>
            </div>
        )
    }
}