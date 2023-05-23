import { Component } from "react";

export default class Factorial extends Component {
    constructor(props) {
        super(props)
        this.a = props.num1
    }
    calcFact() {
        let fact = 1
        //for(var i=1;i<=this.a;i++)
        for (var i = 1; i <= this.props.num100; i++) {
            fact = fact * i
        }
    
    }
    render() {
        return <div>
            <p>Factorial of {this.props.num1} is {this.calcFact()}</p>
        </div>
    }

}   