class FontChooser extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			boldHidden: true,
			decreaseButtonHidden: true,
			fontSizeSpanHidden: true,
			increaseButtonHidden: true,
			toggleForm: true,


			toggleBold: false,


		};
	}

	toggleForm = () => {
		if (this.state.toggleForm == true) {
			this.setState({ toggleForm: false })

			this.setState({ boldHidden: true })
			this.setState({ decreaseButtonHidden: true })
			this.setState({ fontSizeSpanHidden: true })
			this.setState({ increaseButtonHidden: true })

		} else {
			this.setState({ toggleForm: true })

			this.setState({ boldHidden: false })
			this.setState({ decreaseButtonHidden: false })
			this.setState({ fontSizeSpanHidden: false })
			this.setState({ increaseButtonHidden: false })
		}
	}


	toggleBold = () => {
		if (this.state.toggleBold == true) {
			this.setState({ toggleBold: false })
		} else {
			this.setState({ toggleBold: true })
		}
	}

	render() {
		return (
			<div>
				<input type="checkbox" id="boldCheckbox" onChange={this.toggleBold}
					style={this.state.toggleBold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}
					hidden={this.state.boldHidden} />
				<button id="decreaseButton" hidden={this.state.decreaseButtonHidden}>-</button>
				<span id="fontSizeSpan" hidden={this.state.fontSizeSpanHidden}>{this.props.size}</span>
				<button id="increaseButton" hidden={this.state.increaseButtonHidden}>+</button>
				<span id="textSpan" onClick={this.toggleForm}>{this.props.text}</span>
			</div>
		);
	}
}

