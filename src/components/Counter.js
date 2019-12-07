import React from 'react';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";


export class Counter extends React.Component {
	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"
								onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment"
								onClick={() => this.props.changeScore(this.props.id, 1)}> +</button>
			</div>
		)
	}
}

const mapActionToProps = (dispatch) => ({
	// 왼쪽이 props, 오른쪽 (액션을 디스패치하는)펑션
	changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

// 문법: 커링, 개념: HoC: 입력파라메터에 컴포넌트를 넣어서 새로운 기능의 컴포넌트를 리턴하는 펑션
export default connect(null, mapActionToProps)(Counter);