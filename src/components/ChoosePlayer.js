import React, {useEffect} from 'react'
import './ChoosePlayer.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setPlayerOne, setPlayerTwo} from '../redux/store'


const ChoosePlayer = (props) => {

  useEffect(() => {
    const mainBlock = document.querySelector('.flexMain')
    mainBlock.firstChild.focus()
    handleControls()
  })

  const playerFilter = (id) => {
    return(
      props.state.data.find(item => item.id === +id)
    )
  }

  const controlsInUse = (e) => {
    if (e.code === "ArrowRight" && document.activeElement) {
      const currentElement = document.activeElement
      currentElement.blur()
      if (currentElement.nextElementSibling != null) {
        currentElement.nextElementSibling.focus()
      } else {
        currentElement.parentElement.firstChild.focus()
      }
    } else if (e.code === "ArrowLeft" && document.activeElement) {
      const currentElement = document.activeElement
      currentElement.blur()
      if (currentElement.previousElementSibling != null) {
        currentElement.previousElementSibling.focus()
      } else {
        currentElement.parentElement.lastChild.focus()
      }
    } else if (e.keyCode === 13) {
      const mainBlock = document.querySelector('.flexMain')
      if (!props.state.playerOne) {
        const id = e.target.id
        props.setPlayerOne(playerFilter(id))
        mainBlock.removeEventListener('keydown', controlsInUse)
      } else {
        const id = e.target.id
        props.setPlayerTwo(playerFilter(id))
      }
    }
  }

  const handleControls = () => {
    const mainBlock = document.querySelector('.flexMain')
    mainBlock.addEventListener('keydown', controlsInUse);
  }

  return (
    <>
      <div className='top'><h1>MORTAL KOMBAT</h1><span className='choosePlayer'>Choose player {props.state.playerOne ? '2' : '1'}</span></div>
      <div className='flexMain' tabIndex='0'>
        {props.state.data.map(item => (<div id={item.id} key={item.id} className='flexItem'
          tabIndex='1'><img src={require(`../assets/images/${item.name}.jpg`)} alt={`${item.name}`}></img></div>))}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    state
  }
}

export default withRouter(connect(mapStateToProps, {setPlayerOne, setPlayerTwo})(ChoosePlayer))