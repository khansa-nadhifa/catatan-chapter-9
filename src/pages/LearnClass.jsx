import React from "react";

class LearnClass extends React.Component{
    constructor(props) {
        super(props);

        console.log('constructor')

        this.state = {
            name: 'John Doe'
        }
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillUpdate(){
        console.log('componentWIllUpdate')
    }

    changeName = () => {
        this.setState({
            name: 'Jane Doe'
        })
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWIllUnmount')
    }


    render() {
        return(
            <div>
                <h1>Learn Class</h1>

                <h2>{this.state.name}</h2>

                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default LearnClass