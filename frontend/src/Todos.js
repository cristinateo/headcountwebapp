import React, { Component } from 'react'
import './Todo.css';
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, fetchTodos } from './actions/todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

function isNan(n) {
  return /^\d+$/.test(n)
}

const axios = require('axios')

configureAnchors({ offset: -60, scrollDuration: 200 })

class Todos extends Component {

  constructor(props) {
    super(props)
    this.namex = "Gorgica"
    this.state = {
      coolData: null,
      reallycoolData: null,
      Inputs: {
        input1: {
          ColumnNames: ["Year", "Month", "Cases", "IR", "Region"],
          Values: [["2019", "January", "243", "0.9523", "EMEA"]]
        }
      }, "Global Variables": {}
    }

  }

  componentDidMount() {
    
  }


  handleSubmit = event => {
    event.preventDefault();

    var yr = document.getElementById('year');
    var currentYear = yr.options[yr.selectedIndex].value;

    var mn = document.getElementById('month');
    var currentMonth = mn.options[mn.selectedIndex].value;

    var currentCases = document.getElementById('cases').value;

    var currentIR = document.getElementById('IR').value;

    var reg = document.getElementById('region');
    var currentRegion = reg.options[reg.selectedIndex].value;

    this.setState({
      Inputs: {
        input1: {
          ColumnNames: ["Year", "Month", "Cases", "IR", "Region"],
          Values: [[currentYear, currentMonth, currentCases, currentIR, currentRegion]]}}, "Global Variables": {}
    })

    const siteurl = process.env.NODE_ENV==="production"?"/getml":"http://localhost:4000/getml";

    var dat = {
      Inputs: {
        input1:
        {
          ColumnNames: ["Year", "Month", "Cases", "IR", "Region"],
          Values: [["2019", "April", "300", "0.97", "EMEA"]]
        },
      },
      GlobalParameters: {}
    }

    dat = this.state

    if (currentIR < 0.30 || currentIR > 0.99) {
      this.setState({reallycoolData: "please insert a realistic IR"})
      this.setState({coolData: null})

    }else if(!(isNan(currentCases)) || currentCases < 200 || currentCases > 1000) {
      this.setState({reallycoolData: "please insert a valid case number"})
      this.setState({coolData: null})
    } else {

    axios.post(siteurl, dat)
      .then((response)=>{
        console.log(response.data)
        var mlDat = response.data.Results.output1.value.Values[0][5]
        this.setState({coolData:mlDat})
        var s = mlDat.substring(0, mlDat.indexOf('.'));
        this.setState({reallycoolData: s})
      })
      .catch(error => {
        throw error;
      });
    }
  }

  render() {

    return (
      <body>
        <section className="main-container">
          <ScrollableAnchor id={'start'}>
            <div className="banner-container">
              <img src="https://storagehea.blob.core.windows.net/headcountbanner/headcount_banner.jpg" className="img-fluid" alt="Snow">
              </img>
              <div className="top-right">
                <div id="nav">
                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <a href="#motivation" className="grow">MOTIVATION</a>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <a href="#histdata" className="grow">HISTORICAL DATA</a>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <a href="#prediction" className="grow">PREDICTION</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollableAnchor>

          <section className="content">

            <div className="row-space"></div>
            <ScrollableAnchor id={'motivation'}>
              <div>
                <h1><span>Our Mission</span></h1>
                <p class="b">The future belongs to those who prepare for it today!</p>
                  <p align="justify"> In today's rapidly evolving world, a business needs to anticipate the number of employees that are required to efficiently handle its workload.
                  Imagine having a tool that helps your organization do just that, by predicting how many new hires will be required in the future.
                  Our app is built on cutting edge Microsoft and cloud-based technologies and it incorporates the analysis of historical data about your company, 
                  which will then be used to predict your hiring need in years to come.
                  Prepare your business to do good in the future, because doing good is just good business.
                </p>
                <div className="row">
                  <div className="col-sm-11"></div>
                  <div className="col-sm-1">
                    <a href="#start"><i className="arrow up"></i></a>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>

            <div className="row-space"></div>
            <ScrollableAnchor id={'histdata'}>
              <div>
                <h1><span>Collected data insights</span></h1>
                <p align="justify">
                Through this dashboard you can visualize the hiring need for the next 10 years in comparison with the historical data from past 10 years.
                The user can easily interact with the reports in the dashboard by selecting specific data from various slicers, in order to filter the visualizations.  
                  </p>
                <div class="randcontainer">
                  <iframe width="700" height="400" src="https://msit.powerbi.com/view?r=eyJrIjoiNDgxZTA0MWEtY2I4Yy00YmUzLThkNDktMDNjZGRiMGI1Mjc0IiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9" frameborder="0" allowFullScreen="true"></iframe> 
                </div>
                
                <div className="row">
                  <div className="col-sm-11"></div>
                  <div className="col-sm-1">
                    <a href="#start"><i className="arrow up"></i></a>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>

            <div className="row-space"></div>
            <ScrollableAnchor id={'prediction'}>
              <div>
                <h1><span>Machine Learning enhanced prediction</span></h1>
                <div className="row-space2"></div>


                <div className="prediction-container">
                  <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                      <div className="row">
                        <div className="styled-select">
                          <select id = "year">
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="styled-select">
                          <select id="month">
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div>
                          <input type="cases" className="form-control" id="cases" placeholder="300">
                          </input>
                        </div>
                      </div>

                      <div className="row">
                        <div>
                          <input type="IR" className="form-control" id="IR" placeholder="0.97">
                          </input>
                        </div>
                      </div>

                      <div className="row">
                        <div className="styled-select">
                          <select id="region">
                            <option value="EMEA">EMEA</option>
                            <option value="US">US</option>
                            <option value="APAC">APAC</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="control">
                          <form onSubmit={this.handleSubmit}>
                              <input type="submit" value="Submit" class="buttoncl"></input>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                      <div className="row"></div>
                      <p align="justify">Please complete the form and press the submit button to verify the necessary number of engineers for the
                      custom workload and chosen parameters.</p>

                      <h3>Estimated need: {this.state.reallycoolData}</h3>
                      <p class="b">To be precise: {this.state.coolData}</p>

                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-11"></div>
                    <div className="col-sm-1">
                      <a href="#start"><i className="arrow up"></i></a>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollableAnchor>
          </section>
        </section>

      </body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items,
    isLoading: state.todos.loading,
    isSaving: state.todos.saving,
    error: state.todos.error
  }
}

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
  fetchTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
