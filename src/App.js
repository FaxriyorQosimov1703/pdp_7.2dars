import React, { Component } from "react";
import Users from "./Users";
import Users1 from "./Users1";

export default class App extends Component {
  state = {
    Newusers: [],

    actives: true,

    users: [
      {
        name: "sad",
      },
      {
        name: "ssdfasad",
      },
      {
        name: "saadfasd",
      },
    ],
  };

  toActiveTransfer = () => {
    this.setState({
      actives: false,
    });
  };

  tousersTransfer = () => {
    this.setState({
      actives: true,
    });
  };
  render() {
    const { actives, users, Newusers } = this.state;
    return (
      <div>
        <div className="border">
          <div className="row">
            <div className="col-6 border border-right m-3">
            <div className="border m-3">
                    <h1>Users</h1>
                </div>

            {
                actives?<Users touserscard={this.toActiveTransfer}/>: ''
            }


            </div>



            <div className="col-4 m-4">
              <div className="border">
                <h1>Activites</h1>
              </div>

            {
                !actives?<Users1 toactivecard={this.tousersTransfer} />: ''
            }

            </div>
          </div>
        </div>
      </div>
    );
  }
}
