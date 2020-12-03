import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from "react-router-dom"

// const Menu = () => {
//   const padding = {
//     paddingRight: 5
//   }
//   return (
//     <Router>
//       <div>
//       <link style={padding} to="/">anecdotes</link>
//       <link style={padding} to="/create">create new</link>
//       <link style={padding} to="/about">about</link>
//     </div>
//     <Switch>
//       <Route path="/">
//         <AnecdoteList anecdotes={anecdotes} />
//       </Route>
//       <Route path="/create">
//         <CreateNew addNew={addNew} />
//       </Route>
//       <Route path="/about">
//         <About />
//       </Route>
//     </Switch>
//     </Router>
    
//   )
// }

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <li key={anecdote.id} >
        <Link to={`/${anecdote.id}`}>{anecdote.content}</Link>
      </li>)}
    </ul>
  </div>
)
const Anecdote = ({anecdotes}) =>{
  const id = useParams().id;
  const anecdote = anecdotes.find(n => n.id==Number(id))
  console.log(anecdote)
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>has {anecdote.votes} vote</p>
      <p>for more info see {anecdote.info}</p>
      <p>author : {anecdote.author}</p>
    </div>
  )
}
  


const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)



const CreateNew = (props) => {
  const [content, setContent] = useState('')
  


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content,
      
    })
    
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
       
        <button>create</button>
        
      </form>
    </div>
  )

}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  
  const padding = {
    paddingRight: 5
  }
  return (
    <Router>
    
     
      
      <CreateNew addNew={addNew} />

      <AnecdoteList anecdotes={anecdotes} />
      
    
    
    </Router>
    
  )

  // return (
  //   <div>
  //     <h1>Software anecdotes</h1>
  //     <Menu />
  //     <AnecdoteList anecdotes={anecdotes} />
  //     <About />
  //     <CreateNew addNew={addNew} />
  //     <Footer />
  //   </div>
  // )
}

export default App;
