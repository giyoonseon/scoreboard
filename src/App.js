import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import {connect} from "react-redux";

// ctrl + alt + o : 미사용 import 없애줌

let maxId = 4;

//class컴포넌트로 변환
class App extends React.Component{
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.props.players}></Header>
        {
          this.props.players.map((player) => (
            <Player name={player.name} id={player.id} key={player.id}
                    score={player.score}
                    changeScore={this.handleChangeScore}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    )
  }

  handleRemovePlayer =(id)=> {
    const players = this.props.players.filter(player => player.id !== id)
    console.log(players)
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      // Immutable 함수 = 새로운 배열을 리턴 = shallow comparison
      // 키와 변수가 같을 경우 한쪽을 생략: shorthand property
      return {players}
    })
  }

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore : ',id,' : ', delta);
    this.setState(prevState => {
      //새로운 배열을 리턴
      const players = [...prevState.players];
      //새로운 배열을 만들었기때문에 해당 배열을 건드려도 된다.
      players.forEach(player =>{
        if(player.id === id){
          player.score += delta
        }
      })
      return {players}
    })

  }

  handleAddPlayer =(name) =>{
    console.log('handleAddPlayer',name)
    this.setState(prevState => {
      const players =[...prevState.players]; //기존있는 배열을 꺼내서 새로운 배열로 만듬
      players.push({id : ++maxId, name : name, score:0});
      return { players }
    })
  }
}


const mapStateToProps = (state) =>({
  //왼쪽의 props, 오른쪽이 store의 state
  players : state.playerReducer.players
});

export default connect(mapStateToProps)(App);
