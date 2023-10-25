import React, { Component } from "react";
import Head from "../NodalOffComponents/Head";
import "./style/curhear.css";
import DeptHead from "./DeptHead";
import url from "../../backend_url";
class DeptCurHearing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var curhear = this.props.location.state.curwitness;
    var dat = this.props.location.state.curdate;
    var nex = this.props.location.state.next;
    var count = 0;
    return (
      <div>
        <DeptHead name="Hearing Report" />
        <div className="cch0">
          <h2 className="cch2">
            Hearing Report :{" "}
            {dat.replace(/T.*/, "").split("-").reverse().join("-")}
          </h2>
          <div className="cch3">
            <span className="cch4">Judge :</span>
            <span className="cch5">{this.props.location.state.curjudge}</span>
          </div>
          <div className="cch6">
            <span className="cch7">Lawyer :</span>
            <span className="cch8">{this.props.location.state.curlawyer}</span>
          </div>

          <div className="cch9">
            <h6 className="cch10">Details :</h6>
            <p className="cch11">{this.props.location.state.curfact}</p>
          </div>
          <div className="cch12">
            <span className="cch13">Interim Order :</span>
            <span className="cch14">
              {this.props.location.state.curverdict}
            </span>
          </div>
          <div className="cch12">
            <span className="cch13">Next Hearing Date :</span>
            <span className="cch14">
              {nex.replace(/T.*/, "").split("-").reverse().join("-")}
            </span>
          </div>
          <p className="cch13">Invoice Details:</p>
          <div className="cch12">
            <span className="cch13">Hearing ID:</span>
            <span className="cch14">{this.props.location.state.curinvid}</span>
          </div>
          <div className="cch12">
            <span className="cch13">Charge:</span>
            <span className="cch14">
              {this.props.location.state.curinvcharge}
            </span>
          </div>
          <div className="cch12">
            <span className="cch13">Status:</span>
            <span className="cch14">
              {this.props.location.state.curinvstatus}
            </span>
          </div>
          <span className="cch13">Documents:</span>
          {this.props.location.state.curdoc.map((c) => {
            console.log(c);
            return (
              <div className="cch12">
                <span className="cch13"></span>
                <span className="cch14">
                  <a
                    target="_blank"
                    href={url + "/image/" + c}
                    download
                  >
                    {c}
                  </a>
                </span>
              </div>
            );
          })}
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-stripped tttable">
                  <thead className="thead-light">
                    <tr>
                      <th className="heading">No.</th>
                      <th className="heading">Name</th>
                      <th className="heading">Age</th>
                      <th className="heading">Comments</th>
                      <th className="heading">Phone</th>
                      <th className="heading">District</th>
                      <th className="heading">State</th>
                      <th className="heading">Pincode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {curhear.map((id) => {
                      return (
                        <tr>
                          <td>{(count += 1)}</td>
                          <td className="caps">{id.name}</td>
                          <td>{id.age}</td>
                          <td className="comments">{id.comments}</td>
                          <td>{id.phone}</td>
                          <td className="caps">{id.district}</td>
                          <td className="caps">{id.state}</td>
                          <td>{id.pincode}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeptCurHearing;
