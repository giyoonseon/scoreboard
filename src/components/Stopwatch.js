import React from 'react';

export class Stopwatch extends React.Component {
	tickRef;
	state ={
		isRunning : false,
		timer : 0
	}

	handleStopWatch(){
		this.setState(prevState => ({isRunning: !prevState.isRunning}))
	}

	render() {
		return (
		<div className="stopwatch">
			<h1 className="h1">StopWatch</h1>
			<span className="stopwatch-time">{this.state.timer}</span>
			<button onClick={this.handleStopWatch.bind(this)}> {this.state.isRunning ? 'Stop' : 'Start'}</button>
			<button onClick={()=> this.setState({timer:0, isRunning:false})}>Reset</button>
		</div>
		);
	}

	tick = () =>{
		if(this.state.isRunning){
			this.setState(prevState => ({timer : prevState.timer + 1}))
		}
	}
	//네트워크로 데이터 fetch, 3rd 라이브러리 초기화
	componentDidMount() {
		console.log('componentDidMount');
		//정수값을 받음
		this.tickRef =  setInterval(this.tick, 1000);
	}
	//컴포넌트가 detroy 되기 전에 호출됨
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}


}