import React from 'react'
import './App.css'
import ChoosePlayer from './components/ChoosePlayer'
import FightLoading from './components/FightLoading'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className='App'>
        <Route exact path = '/' component = 
          {() => !(props.state.playerOne && props.state.playerTwo) ? <ChoosePlayer/> : <FightLoading/>}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    state
  }
}
export default withRouter(connect (mapStateToProps)(App))
