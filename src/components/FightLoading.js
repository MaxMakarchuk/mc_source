import React, {useState, useEffect} from 'react'
import './FightLoading.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const FightLoading = (props) => {

  const[isQPressed, setQPressed] = useState(false)
  const[isWPressed, setWPressed] = useState(false)
  const[isEPressed, setEPressed] = useState(false)
  const[isRPressed, setRPressed] = useState(false)
  const[isTPressed, setTPressed] = useState(false)
  const[isYPressed, setYPressed] = useState(false)

  useEffect(() => {
    window.addEventListener('keydown', isButtonPressed)
  })

  const isButtonPressed = (e) => {
    console.log(e.code)
    switch(e.code) {
      case 'KeyQ':
        isQPressed ? setQPressed(false) : setQPressed(true)
        window.removeEventListener('keydown', isButtonPressed)
        break
      case 'KeyW':
        isWPressed ? setWPressed(false) : setWPressed(true)
        window.removeEventListener('keydown', isButtonPressed)
        break
      case 'KeyE':
        isEPressed ? setEPressed(false) : setEPressed(true)
        window.removeEventListener('keydown', isButtonPressed)
        break
      case 'KeyR':
        isRPressed ? setRPressed(false) : setRPressed(true)
        window.removeEventListener('keydown', isButtonPressed)
        break
      case 'KeyT':
        isTPressed ? setTPressed(false) : setTPressed(true)
        window.removeEventListener('keydown', isButtonPressed)
        break
      case 'KeyY':
        isYPressed ? setYPressed(false) : setYPressed(true)
        window.removeEventListener('keydown', isButtonPressed)
        break
      default:
        alert('Please, use Q-W-E-R-T-Y keys to choose abilities!')
    }
  }

  return(
    <div className = 'wrapper'>
      <div className='flexTop'><h1 className='mc_fight'>Fight!!!</h1><span></span></div>
      <div className='flexCenter playerTabs'>
            <div className='playerTab left'>
                <img src={require(`../assets/images/${props.state.playerOne.name}.jpg`)} alt={`${props.state.playerOne.name}`}></img>
            </div>
            <div className='vs'>VS</div>
            <div className='playerTab right'>
                <img src={require(`../assets/images/${props.state.playerTwo.name}.jpg`)} alt={`${props.state.playerTwo.name}`}></img>
            </div>
      </div>
      <div id = 'footer' className='flexFooter'>
          <div className='footerIcon'><img src={isQPressed ? require('../assets/images/torpedo.png') : require('../assets/images/mc.svg')} alt={`mc_sign}`}></img></div>
          <div className='footerIcon'><img src={isWPressed ? require('../assets/images/missile.png') : require(`../assets/images/mc.svg`)} alt={`mc_sign}`}></img></div>
          <div className='footerIcon'><img src={isEPressed ? require('../assets/images/nuclear.png') : require(`../assets/images/mc.svg`)} alt={`mc_sign}`}></img></div>
          <div className='footerIcon'><img src={isRPressed ? require('../assets/images/rpg.png') : require(`../assets/images/mc.svg`)} alt={`mc_sign}`}></img></div>
          <div className='footerIcon'><img src={isTPressed ? require('../assets/images/mine.png') : require(`../assets/images/mc.svg`)} alt={`mc_sign}`}></img></div>
          <div className='footerIcon'><img src={isYPressed ? require('../assets/images/sword.png') : require(`../assets/images/mc.svg`)} alt={`mc_sign}`}></img></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
      state
    }
  }

export default withRouter(connect(mapStateToProps)(FightLoading))