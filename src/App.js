import React, { Component } from 'react';
import Cat from 'cat-names';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: '',
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  makeCats = () => {
    let cats = [];

    for (let i = 0; i <= 30; i++) {
      cats.push({ name: Cat.random(), id: i + 1 });
    }

    this.setState({ cats: cats });
  };

  componentDidMount() {
    this.makeCats();
  }

  render() {
    const { cats, searchField } = this.state;
    const filteredList = cats.filter(cat =>
      cat.name
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Cats Rolodex</h1>

        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />

        <CardList cats={filteredList} />
      </div>
    );
  }
}

export default App;
