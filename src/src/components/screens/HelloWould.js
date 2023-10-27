import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";
import React, { Component } from "react";

class HelloWould extends Component {
    state = {
        counter: 0,
        students : [
            {
                name : "John",
                class : 10,
            },
            {
                name : "Jane",
                class : 10,
            },
            {
                name : "Joe",
                class : 10,
            },
        ],
    };

    handleClick() {
        this.setState({ counter: this.state.counter + 10});
    };
    handleClicks() {
        this.setState({ counter: this.state.counter - 7});
    };
    handleClicka() {
        this.setState({ counter: this.state.counter + 6});
    };
    handleClickc() {
        this.setState({ counter: this.state.counter - 3});
    };

    static getDerivedStateFromProp(props, state){
        return { name: props.name }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ name: "Jane"});
        }, 27000)
    }

    render() {
        return (
            <>
                <h1 className="one" onClick={() => 
                    this.setState({ counter:this.state.counter = 0})
                    } >{this.state.counter}</h1>
                    <p className="one">Click Counter to Reset</p>
                <button className="one"
                onMouseOver={() => 
                    this.setState({ counter:this.state.counter += 3})
                    }
                    onClick={() => 
                        this.setState({ counter:this.state.counter += 1})
                        }
                >
                    +1
                </button>
                <button className="on"
                onClick={() => 
                    this.setState({ counter:this.state.counter += 2})
                    }
                    onMouseOver={() => 
                        this.setState({ counter:this.state.counter += 4})
                        }
                >
                    +2
                </button>
                <button className="on"
                onClick={() => 
                    this.setState({ counter:this.state.counter += 5})
                    }
                    onMouseOver={() => 
                        this.setState({ counter:this.state.counter += 6})
                        }
                >
                    +5
                </button>
                <button className="on"
                onClick={() => 
                    this.setState({ counter:this.state.counter -= 4})
                    }
                >
                    -4
                </button>
                <button className="on"
                onClick={() => 
                    this.setState({ counter:this.state.counter -= 6})
                    }
                >
                    -6
                </button>
                <button className="on"
                onClick={() => 
                    this.setState({ counter:this.state.counter -= 3})
                    }
                >
                    -3
                </button>
                <h1>My Name is {this.state.name}</h1>
            </>
        )
    }
}

export default HelloWould;