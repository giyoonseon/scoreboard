import React from 'react';
import Counter from './Counter';
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";


//PureComponent를 상속받으면 변경이 된 부분만 렌더링이 일어난다.

export class Player extends React.Component{

	render() {
		console.log(this.props.name,' rendered');
		const {removePlayer, id, name, score} = this.props
		return(
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}> X </button>
					 {this.props.children}
					 {name}
				</span>
				<Counter id={id} score={score}/>
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

const mapActionToProps = (dispatch) => ({
	// 왼쪽이 props, 오른쪽 (액션을 디스패치하는)펑션
	removePlayer: (id) => dispatch(removePlayer(id))
})

// 문법: 커링, 개념: HoC: 입력파라메터에 컴포넌트를 넣어서 새로운 기능의 컴포넌트를 리턴하는 펑션
export default connect(null, mapActionToProps)(Player);