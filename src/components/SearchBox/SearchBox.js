import React from "react"
import './SearchBox.css'
import { database } from '../../database'

class SearchBox extends React.Component {
    render() {
        const types = [...new Set(database.map(data => {
            return data.type;
        }))];
        const {searchChange, typeChange, changeOrder} = this.props;
        return (
            <div className="SearchBox">
                <input type="search" placeholder="Search marvel characters" onChange={searchChange}/>
                <select onChange={typeChange}>
                    <option value="">All</option>
                    {types.map((item, index) => (
                        <option key={item + index} value={item.charAt(0).toUpperCase() + item.slice(1)}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
                    ))}
                </select>
                <div className="SearchBox-radio" onChange={changeOrder}>
                    <p><input type="radio" id="a-z" name="changeOrder" value="a-z" defaultChecked/><label htmlFor="a-z">A - Z</label></p>
                    <p><input type="radio" id="z-a" name="changeOrder" value="z-a"/><label htmlFor="z-a">Z - A</label></p>
                </div>
            </div>
        )
    }
}

export default SearchBox;