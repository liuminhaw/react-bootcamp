class Slot extends React.Component {
    render() {
        const props = this.props;
        if (props.s1 == props.s2 && props.s1 == props.s3) {
            var message = "You win!";
        } else {
            var message = "You lose!";
        }

        return (
            <div>
                <h3>{props.s1} {props.s2} {props.s3}</h3>
                <p>{message}</p>
            </div>
        )
    }
}