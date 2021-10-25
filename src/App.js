import "./App.css";

import React, { Component } from "react";
import Users from "./components/users.jsx";
import User from "./components/userDetails.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    rows: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=200&seed=abc")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          rows: data.results.map((res) => {
            return {
              id: res.login.uuid,
              email: res.email,
              gender: res.gender,
              fullName: {
                first: res.name.first,
                last: res.name.last,
              },
              image: {
                thumbnail: res.picture.thumbnail,
                large: res.picture.large,
              },
              address: res.location,
              age: res.dob.age,
            };
          }),
        })
      );
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <main className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Users rows={this.state.rows} />}
              />
              <Route
                exact
                path="/userDeatils/:fullName"
                render={(props) => {
                  const name = props.match.params.fullName;
                  const data = this.state.rows.find(
                    (item) => (item.fullName.first + item.fullName.last) === name
                  );
                  if(data)
                  {
                  return <User {...props} {...data} />;
                  }
                }}
              />
            </Switch>
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
