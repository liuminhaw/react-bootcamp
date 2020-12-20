class Hello extends React.Component {
    static defaultProps = {
        from: "Anonymous",
        bangs: 1
    }

    render() {
        const props = this.props;
        let bangs = "!".repeat(props.bangs);
        return (
            <div>
                <h1>Hello to {props.to} from {props.from}{bangs}</h1>
            </div>
        )
    }
}