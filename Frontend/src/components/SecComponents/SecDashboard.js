import React, { Component } from "react";

import { CanvasJSChart } from "canvasjs-react-charts";
import SecSideBar from "./SecSidebar";
import "./style/land.css";
import axios from "axios";
import { Input } from "reactstrap";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import url from "../../backend_url";
var uni = [];
class SecDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      highact: "0",
      highclose: "0",
      hightotal: "0",
      supremeact: "0",
      supremeclose: "0",
      supremetotal: "0",
      districtact: "0",
      districtclose: "0",
      districttotal: "0",
      execact: "0",
      execclose: "0",
      exectotal: "0",
      vilact: "0",
      vilclose: "0",
      viltotal: "0",
      panact: "0",
      panclose: "0",
      pantotal: "0",
      ruract: "0",
      rurclose: "0",
      rurtotal: "0",
      judact: "0",
      judclose: "0",
      judtotal: "0",
      year: "",
      casecount: [],
      acase: [],
      curcaseid: null,
      value: "",
      dept: "All Dept",
      actid: null,
      civ: null,
      cri: null,
      lhighcourt: {},
    };
    this.handleSelect = this.handleSelect.bind(this);

    this.Dept = this.Dept.bind(this);
    this.Year = this.Year.bind(this);
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  Year = (e) => {
    this.setState({
      year: e.target.value,
    });
  };

  Dept = (e) => {
    this.setState({
      dept: e.target.value,
    });
  };

  handleSelect(event) {
    event.preventDefault();
    this.setState(
      {
        dept: this.dept.value,
      },
      () => {
        if (this.state.dept == "All Dept") {
          console.log("true");
          axios.get(url + "/secretary/alltotalCounts")
            .then((res) => {
              this.setState({
                highact: res.data.highCount.active,
                highclose: res.data.highCount.closed,
                hightotal: res.data.highCount.total,
                supremeact: res.data.supremeCount.active,
                supremeclose: res.data.supremeCount.closed,
                supremetotal: res.data.supremeCount.total,
                districtact: res.data.districtCount.active,
                districtclose: res.data.districtCount.closed,
                districttotal: res.data.districtCount.total,
                execact: res.data.executiveCount.active,
                execclose: res.data.executiveCount.closed,
                exectotal: res.data.executiveCount.total,
                vilact: res.data.villageCount.active,
                vilclose: res.data.villageCount.closed,
                viltotal: res.data.villageCount.total,
                panact: res.data.panchayatCount.active,
                panclose: res.data.panchayatCount.closed,
                pantotal: res.data.panchayatCount.total,
                ruract: res.data.ruralCount.active,
                rurclose: res.data.ruralCount.closed,
                rurtotal: res.data.ruralCount.total,
                judact: res.data.judicialCount.active,
                judclose: res.data.judicialCount.closed,
                judtotal: res.data.judicialCount.total,
              });
            });

        } else {
          axios
            .get(url + "/secretary/typecount/" + this.dept.value + "/Civil")
            .then((res) => {
              this.setState({
                civ: res.data,
              });
            });

          axios
            .get(url + "/secretary/typecount/" + this.dept.value + "/Criminal")
            .then((res) => {
              this.setState({
                cri: res.data,
              });
            });

          axios
            .get(url + "/secretary/counts/" + this.dept.value)
            .then((res) => {
              this.setState(
                {
                  casecount: res.data,
                },
                () => {
                  this.setState({
                    highact: this.state.casecount.highCount.active,
                    highclose: this.state.casecount.highCount.closed,
                    hightotal: this.state.casecount.highCount.total,
                    supremeact: this.state.casecount.supremeCount.active,
                    supremeclose: this.state.casecount.supremeCount.closed,
                    supremetotal: this.state.casecount.supremeCount.total,
                    districtact: this.state.casecount.districtCount.active,
                    districtclose: this.state.casecount.districtCount.closed,
                    districttotal: this.state.casecount.districtCount.total,
                    execact: this.state.casecount.executiveCount.active,
                    execclose: this.state.casecount.executiveCount.closed,
                    exectotal: this.state.casecount.executiveCount.total,
                    vilact: this.state.casecount.villageCount.active,
                    vilclose: this.state.casecount.villageCount.closed,
                    viltotal: this.state.casecount.villageCount.total,
                    panact: this.state.casecount.panchayatCount.active,
                    panclose: this.state.casecount.panchayatCount.closed,
                    pantotal: this.state.casecount.panchayatCount.total,
                    ruract: this.state.casecount.ruralCount.active,
                    rurclose: this.state.casecount.ruralCount.closed,
                    rurtotal: this.state.casecount.ruralCount.total,
                    judact: this.state.casecount.judicialCount.active,
                    judclose: this.state.casecount.judicialCount.closed,
                    judtotal: this.state.casecount.judicialCount.total,
                  });
                }
              );
            });
        }
      }
    );
  }

  componentDidMount() {
    this.setState({
      lhighcourt: localStorage.getItem("highCount"),
    });

    if (this.state.dept == "All Dept") {
      console.log("true");
      axios.get(url + "/secretary/alltotalCounts")
        .then((res) => {
          this.setState({
            highact: res.data.highCount.active,
            highclose: res.data.highCount.closed,
            hightotal: res.data.highCount.total,
            supremeact: res.data.supremeCount.active,
            supremeclose: res.data.supremeCount.closed,
            supremetotal: res.data.supremeCount.total,
            districtact: res.data.districtCount.active,
            districtclose: res.data.districtCount.closed,
            districttotal: res.data.districtCount.total,
            execact: res.data.executiveCount.active,
            execclose: res.data.executiveCount.closed,
            exectotal: res.data.executiveCount.total,
            vilact: res.data.villageCount.active,
            vilclose: res.data.villageCount.closed,
            viltotal: res.data.villageCount.total,
            panact: res.data.panchayatCount.active,
            panclose: res.data.panchayatCount.closed,
            pantotal: res.data.panchayatCount.total,
            ruract: res.data.ruralCount.active,
            rurclose: res.data.ruralCount.closed,
            rurtotal: res.data.ruralCount.total,
            judact: res.data.judicialCount.active,
            judclose: res.data.judicialCount.closed,
            judtotal: res.data.judicialCount.total,
          });
        });

    }

    axios
      .get(url + "/secretary/cases/filter/" + this.state.dept)
      .then((res) => {
        this.setState({
          cases: res.data,
        });
      });

    axios
      .get(url + "/secretary/cases")
      .then((res) => {
        this.setState({
          acase: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    uni.map((u) => {
      axios.get();
    });
  }

  render() {
    // console.log(this.props.location.state.dis);
    // console.log(this.state.cri);
    // console.log(this.state.civ);
    var options = {
      animationEnabled: true,

      title: {
        text: this.state.dept,
      },
      axisX: {
        title: "Type",
      },
      axisY: {
        title: "Count",
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { y: this.state.cri, label: "Criminal" },
            { y: this.state.civ, label: "Civil" },
          ],
        },
      ],
    };

    var closeca = localStorage.getItem("cloCounts");
    var activeca = localStorage.getItem("actCounts");
    var total = localStorage.getItem("total");
    var cl = (closeca / total) * 100;
    var ac = (activeca / total) * 100;
    var n = [];
    var filter = [];
    this.state.acase.map((c) => {
      if (c.department != undefined) {
        n.push(c.department);
      }
    });

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    uni = n.filter(onlyUnique);

    var unique = n.filter(onlyUnique);

    unique.sort();
    console.log(this.state.casecount);
    console.log(localStorage.getItem("highCount"));
    var n = this.state.date.getDate();
    var n1 = this.state.date.getMonth() + 1;
    var n2 = this.state.date.getFullYear();
    return (
      <div>
        <SecSideBar history={this.props.history} />
        <div className="lpadm1">
          <h3 className="ad">
            <span>&nbsp;&nbsp;</span>Welcome Secretary
          </h3>
          <div className="adda12">
            <div className="newdash22">
              <CircularProgressbarWithChildren
                value={100}
                className="newdash66"
                styles={buildStyles({
                  pathColor: "#fc061e",
                })}
              >
                <div className="newdash33">
                  <CircularProgressbarWithChildren
                    value={ac}
                    className="newdash66 "
                    styles={buildStyles({
                      pathColor: "#220dfc",
                    })}
                  >
                    <div className="newdash55">
                      <CircularProgressbarWithChildren
                        value={cl}
                        className="newdash66"
                        styles={buildStyles({
                          pathColor: "#00ff00",
                        })}
                      >
                        <h3 className="newdash77">Cases</h3>
                      </CircularProgressbarWithChildren>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className="addash99">
            <div className="legendd">
              <div style={{ marginTop: "3vh" }} className="row">
                <div class="color-boxx"></div>
                <span className="legg1">Total Cases {total}</span>
              </div>
              <div className="row">
                <div class="color-boxx1"></div>
                <span className="legg2">Active Cases {activeca}</span>
              </div>
              <div className="row">
                <div class="color-boxx2"></div>
                <span className="legg4">Closed Cases {closeca}</span>
              </div>
            </div>
          </div>
          <div className="addadate">
            <div className="card newdash8">
              <h2 className="card-title newdash9">Today</h2>
              <div className="newdash14">
                <hr className="newdash13" />
              </div>
              <div className="card-body newdash10">
                <h3 className="newdash11">
                  {n} : {n1} : {n2}
                </h3>
                <p className="newdash11">
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                </p>
              </div>
            </div>
            <div className="secselec">
              <Input
                name="dept"
                id="dept"
                type="select"
                className="sec"
                onChange={this.handleSelect}
                value={this.state.dept}
                innerRef={(input) => (this.dept = input)}
              >
                <option>Select the dept</option>
                <option>All Dept</option>
                {unique.map((u) => {
                  return <option>{u}</option>;
                })}
              </Input>
            </div>

            <div className="sectable11">
              <div className="table-responsive">
                <table class="table">
                  <thead className="table-dark">
                    <tr>
                      <th>S.No</th>
                      <th>Courts</th>
                      <th>Active Cases</th>
                      <th>Closed Cases</th>
                      <th>Total Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-primary">
                      <td>1</td>
                      <td>Supreme Court</td>
                      <td>{this.state.supremeact}</td>
                      <td>{this.state.supremeclose}</td>
                      <td>{this.state.supremetotal}</td>
                    </tr>
                    <tr className="table-danger">
                      <td>2</td>
                      <td>High Court</td>

                      <td>{this.state.highact}</td>
                      <td>{this.state.highclose}</td>
                      <td>{this.state.hightotal}</td>
                    </tr>
                    <tr className="table-primary">
                      <td>3</td>
                      <td>District Court</td>
                      <td>{this.state.districtact}</td>
                      <td>{this.state.districtclose}</td>
                      <td>{this.state.districttotal}</td>
                    </tr>
                    <tr className="table-danger">
                      <td>4</td>
                      <td>Executive Court</td>
                      <td>{this.state.execact}</td>
                      <td>{this.state.execclose}</td>
                      <td>{this.state.exectotal}</td>
                    </tr>
                    <tr className="table-primary">
                      <td>5</td>
                      <td>Village Court</td>
                      <td>{this.state.vilact}</td>
                      <td>{this.state.vilclose}</td>
                      <td>{this.state.viltotal}</td>
                    </tr>
                    <tr className="table-danger">
                      <td>6</td>
                      <td>Panchayat Court</td>
                      <td>{this.state.panact}</td>
                      <td>{this.state.panclose}</td>
                      <td>{this.state.pantotal}</td>
                    </tr>
                    <tr className="table-primary">
                      <td>7</td>
                      <td>Rural Court</td>
                      <td>{this.state.ruract}</td>
                      <td>{this.state.rurclose}</td>
                      <td>{this.state.rurtotal}</td>
                    </tr>
                    <tr className="table-danger">
                      <td>8</td>
                      <td>Judicial Court</td>
                      <td>{this.state.judact}</td>
                      <td>{this.state.judclose}</td>
                      <td>{this.state.judtotal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="secchar">
              <h3 className="ddhead3">Bar Chart ( Department - Wise )</h3>
              <CanvasJSChart
                options={options}
              /* onRef={ref => this.chart = ref} */
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecDashboard;
