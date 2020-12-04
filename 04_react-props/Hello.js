class Hello extends React.Component {
    render() {
        const props = this.props;
        let bangs = "!".repeat(props.bangs);
        return (
            <div>
                <h1>Hello to {props.to} from {props.from}{bangs}</h1>
                <img src={props.img} />
            </div>
        )
    }
}