import React, { Fragment } from "react"
import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox/SearchBox'
import Scroll from '../components/Scroll/Scroll'
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry"
import { database } from '../database'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            database: [],
            searchField: '',
            searchType: '',
            changeOrder: 'a-z',
            visible: 10,
            count: 10,
        }
        //this.loadMore = this.loadMore.bind(this);  // * Pre-binding
    }

    componentDidMount() {
        // * Fetch data
        // let test = fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => console.log(users))
        this.setState({ database: database })
    }

    loadMore = () => {  // * ES6 No binding
        this.setState((prev) => {
          return {visible: prev.visible + 10};
        });
        this.setState({count: this.state.count + this.state.count})
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    onTypeChange = (event) => {
        this.setState({ searchType: event.target.value });
    }
    onChangeOrder = (event) => {
        this.setState( { changeOrder: event.target.value })
    }

    render() {
        const { database, searchType, searchField } = this.state;
        database.sort((a, b) => a.name.localeCompare(b.name));
        if (this.state.changeOrder === 'z-a') {
            database.reverse((a, b) => a.name.localeCompare(b.name));
        }
        const filteredDatabase = database.filter(data => {
            if (searchType !== '') {
                return data.type === searchType.toLowerCase() && data.name.toLowerCase().includes(searchField.toLowerCase());
            }
            return data.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <Fragment>
                <h1 style={{textAlign: 'center', color: '#D00000'}}>Marvel Sorting</h1>
                <SearchBox searchChange={this.onSearchChange} typeChange={this.onTypeChange} changeOrder={this.onChangeOrder} />
                <Scroll>
                    <ErrorBoundry>
                    <CardList database={filteredDatabase} visible={this.state.visible} />

                        {
                            this.state.count < filteredDatabase.length ? <div style={{display: "flex", justifyContent: "center"}}><button style={{padding: "5px 20px", margin: "30px 0", fontSize: "18px", background: "#FFF", border: "none", cursor: "pointer"}} onClick={this.loadMore} type="button">Load more</button></div> : ''
                        }
                        
                    </ErrorBoundry>
                </Scroll>
            </Fragment>
        )
    }
}

export default App;