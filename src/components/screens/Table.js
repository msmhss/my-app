import React, { Component } from "react";

class Table extends Component {
    state = {
        counter: 0,
    };

    static getDerivedStateFromProp(props, state){
        return { name: props.name }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ name: "Jane"});
        }, 5000)
    }

    render() {
        return (
            <>
                <h1 onClick={() => 
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
                <div>
                    {this.state.students.map((student) => (
                        <>
                        <h1 className="two">Name : {student.name}</h1>
                        <p>Class : {student.class}</p>
                        </>
                    ))};
                </div>
                <div>
                    <button className ="a"onDoubleClick={this.handleClick.bind(this)}>
                        Add 10 counter:{this.state.counter}
                    </button>
                    <button className="b"onDoubleClick={this.handleClicks.bind(this)}>
                         Less 7 counter:{this.state.counter}
                    </button>
                    <button className="c"onDoubleClick={this.handleClicka.bind(this)}>
                         Add 6 counter:{this.state.counter}
                    </button>
                    <button className="d"onDoubleClick={this.handleClickc.bind(this)}>
                         Less 3 counter:{this.state.counter}
                    </button>
                </div>
                <div>
                    <button className ="a"onDoubleClick={this.handleClick.bind(this)}>
                        Add 10 counter:{this.state.counter}
                    </button>
                    <button className="b"onDoubleClick={this.handleClicks.bind(this)}>
                         Less 7 counter:{this.state.counter}
                    </button>
                    <button className="c"onDoubleClick={this.handleClicka.bind(this)}>
                         Add 6 counter:{this.state.counter}
                    </button>
                    <button className="d"onDoubleClick={this.handleClickc.bind(this)}>
                         Less 3 counter:{this.state.counter}
                    </button>
                </div>
                <h1>My Name is {this.state.name}</h1>
            </>
        )
    }
}

export default Table;