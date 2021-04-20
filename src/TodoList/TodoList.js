import React, {Component} from 'react'
import TodoItem from '../TodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.addDeal = this.addDeal.bind(this);
        this.state = {
            newDeal: 'Новое дело',
            deals: [
                {
                    id: 1,
                    text: 'Играть с котиком'
                },
                {
                    id: 2,
                    text: 'Играть с собачкой'
                },

            ]
        }
    }

    addDeal() {
        this.setState((state) => {
            return {deals:[...this.state.deals,{id:Date.now(), text:this.textInput.current.value} ] }
        })
    }

    componentDidMount() {
        this.addDeal()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.textInput}/>
                <button onClick={this.addDeal}> Добавить дело</button>
                {this.state.deals.map((deal) => (
                    <TodoItem
                        key={deal.id}
                        text={deal.text}/>
                ))}
            </div>
        )
    }
}

export default TodoList
