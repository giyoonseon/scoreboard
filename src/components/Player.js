import React from 'react';
import {Counter} from './Counter';


//PureComponent를 상속받으면 변경이 된 부분만 렌더링이 일어난다.

export class Player extends React.Component{

	render() {
		console.log(this.props.name,' rendered');
		const {removePlayer, id, name, score, changeScore} = this.props
		return(
			<div className="player">
			<span className="player-name">
			<button className="remove-player" onClick={() => removePlayer(id)}> X </button>
				{name}
			</span>
				<Counter id={id} score={score} changeScore={changeScore}/>
			</div>
		)
	}

//PureComponent를 상속받으면 변경이 된 부분만 렌더링이 일어나지만,
//해당 함수를 안쓸 경우 shouldComponentUpdate를 사용해주어야한다.
//shouldComponentUpdate는 boolean 값으로 리턴해주어야한다.
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log(nextProps);

		if(nextProps.score !== this.props.score){
			return true;
		}else{
			return false;
		}

	}
}
