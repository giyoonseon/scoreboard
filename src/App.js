import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import {CustomPlayer} from "./components/CustomPlayer";
import {connect} from "react-redux";
import _ from 'lodash'

// ctrl + alt + o : 미사용 import 없애줌

let maxId = 4;

//class컴포넌트로 변환
class App extends React.Component{
  getHighScore() {
    const maxObj = _.maxBy(this.props.players, 'score');
    return maxObj.score;
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.props.players}></Header>
        {
          this.props.players.map((player) => (
            <CustomPlayer name={player.name} id={player.id} key={player.id}
                    score={player.score} isHighScore ={this.getHighScore() === player.score}
            />
          ))
        }
        <AddPlayerForm></AddPlayerForm>
      </div>
    )
  }
}


const mapStateToProps = (state) =>({
  //왼쪽의 props, 오른쪽이 store의 state
  players : state.playerReducer.players
});

export default connect(mapStateToProps)(App);
