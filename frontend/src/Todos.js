import React, { Component } from 'react'
import './Todo.css';
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, fetchTodos } from './actions/todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import 'bulma/css/bulma.css'
 
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -60, scrollDuration: 200})

const Todo = ({ todo, id, onDelete, onToggle }) => (
  <div className="box todo-item level is-mobile">
    <div className="level-left">
      <label className={`level-item todo-description ${todo.done && 'completed'}`}>
        <input className="checkbox" type="checkbox" checked={todo.done} onChange={onToggle}/>
        <span>{todo.description}</span>
      </label>
    </div>
    <div className="level-right">
      <a className="delete level-item" onClick={onDelete}>Delete</a>
    </div>
  </div>
)

class Todos extends Component {
  // state = { newTodo: '' }

  // componentDidMount() {
  //   this.props.fetchTodos()
  // }

  // addTodo (event) {
  //   event.preventDefault() // Prevent form from reloading page
  //   const { newTodo } = this.state

  //   if(newTodo) {
  //     const todo = { description: newTodo, done: false }
  //     this.props.addTodo(todo)
  //     this.setState({ newTodo: '' })
  //   }
  // }

  render() {
    // let { newTodo } = this.state
    // const { todos, isLoading, isSaving, error, deleteTodo, toggleTodo } = this.props

    // const total = todos.length
    // const complete = todos.filter((todo) => todo.done).length
    // const incomplete = todos.filter((todo) => !todo.done).length

    return (
      <body>
        <section class="main-container">
          <div class="banner-container">
            <img src="https://preview.ibb.co/hxpmuz/banner.jpg" class="img-fluid" alt="Snow">
            </img>
            <div class="top-right">
            <div id="nav">
              <div class="row">
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <a href="#headline1" class="grow">MOTIVATION</a>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <a href="#headline4" class="grow">HISTORICAL DATA</a>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <a href="#headline5" class="grow">PREDICTION</a>
                </div>
              </div>
            </div>
            </div>
          </div> 

          <section class="content">

            <ScrollableAnchor id={'headline1'}>
              <div>
                <h1>Headline One</h1>
                <p>This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                </p>
              </div>
            </ScrollableAnchor>
            
            <ScrollableAnchor id={'headline2'}>
              <div>
                <h1>Headline 2</h1>
                <p>This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                </p>
              </div>
            </ScrollableAnchor>
            
            <ScrollableAnchor id={'headline3'}>
              <div>
                <h1>Headline 3</h1>
                <p>This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                </p>
              </div>
            </ScrollableAnchor>
            
            <ScrollableAnchor id={'headline4'}>
              <div>
                <h1>Headline 4</h1>
                <div class="prediction-container">
                  <div class="row">
                    <div class="left-container">
                    <div class="row">
                        <div class="select is-danger">
                          <select id="year">
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

                    <div class="row">
                      <div class="select is-danger">
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

                    <div class="row">
                      <div>
                        <input type="cases" class="form-control" id="cases" placeholder="300">
                        </input>
                      </div>
                    </div>

                    <div class="row">
                      <div>
                        <input type="SLA" class="form-control" id="SLA" placeholder="0.97">
                        </input>
                      </div>
                    </div>

                    <div class="row">
                      <div class="select is-danger">
                        <select id="region">
                            <option value="EMEA">EMEA</option>
                            <option value="US">US</option>
                            <option value="APAC">APAC</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="control">
                        <button class="button is-danger">Submit</button>
                      </div>
                    </div>
                  </div>
                    
                    <div class="right-container">
                      <p>This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                      This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>

            <ScrollableAnchor id={'headline5'}>
              <div>
                <h1>Headline 5</h1>
                <p>This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually the reader will realize that they're just looking at plain text rather than the vivid form of storytelling by imagery that comic books are famed for. TL;DR indeed.
                This afflicts all written media, but it is particularly infamous for its effect on Comic Books.
                </p>
              </div>        
            </ScrollableAnchor>
          </section> 

        </section>

      </body>

        // <nav class="navbar is-danger">
        //     <div class="navbar-brand">
        //         <a class="navbar-item" href="#">
        //             <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        //             </img>
        //         </a>
        //         <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </div>
        //     </div>
        // </nav>

        // <section class="hero is-danger">
        //     <div class="hero-body">
        //         <div class="container">
        //             <h1 class="title">
                    
        //             </h1>
        //             <h2 class="subtitle">
                    
        //             </h2>
        //         </div>
        //     </div>
        //     <div class="tabs is-centered main-menu" id="nav">
        //         <ul>
        //             <li data-target="pane-1" id="1" class="is-active">
        //                 <a>
        //                     <span class="icon is-small"><i class="fa fa-image"></i></span>
        //                     <span>Purpose</span>
        //                 </a>
        //             </li>
        //             <li data-target="pane-2" id="2">
        //                 <a>
        //                     <span class="icon is-small"><i class="fab fa-empire"></i></span>
        //                     <span>Article</span>
        //                 </a>
        //             </li>
        //             <li data-target="pane-3" id="3">
        //                 <a>
        //                     <span class="icon is-small"><i class="fab fa-superpowers"></i></span>
        //                     <span>Team</span>
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        //   </section>

        //   <section class="container">
        //     <div class="col-sm-8">
        //       hi
        //     </div>
        //     <div class="col-sm-2">
        //       hi
        //     </div>
        //   </section>

        //   <section>
        //     <form className="form" onSubmit={this.addTodo.bind(this)}>
        //       <div className="field has-addons" style={{ justifyContent: 'center' }}>
        //         <div className="control">
        //           <input className="input"
        //                 value={newTodo}
        //                 placeholder="New todo"
        //                 onChange={(e) => this.setState({ newTodo: e.target.value })}/>
        //         </div>

        //         <div className="control">
        //           <button className={`button is-success ${(isLoading || isSaving) && "is-loading"}`}
        //                   disabled={isLoading || isSaving}>Add</button>
        //         </div>
        //       </div>
        //     </form>

        //     <div className="container todo-list">
        //       {todos.map((todo) => <Todo key={todo._id}
        //                                 id={todo._id}
        //                                 todo={todo}
        //                                 onDelete={() => deleteTodo(todo._id)}
        //                                 onToggle={() => toggleTodo(todo._id)}/> )}
        //       <div className="white">
        //         Total: {total}  , Complete: {complete} , Incomplete: {incomplete}
        //       </div>
        //     </div>
        //   </section>
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
