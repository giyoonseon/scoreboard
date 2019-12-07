import React from 'react';
import _ from 'lodash';


export const Stats = (props) => {
	const totalPlayers = props.players.length;
	let totalPoints = _.sumBy(props.players,'score');

	//const를 해주면 더할 수 없으므로 let으로 변수 선언
	/*props.players.forEach(item => {
		totalPoints += item.score;
	})
*/


	/*for(let i=0;i<totalPlayers;i++){
		 명령형 스타일로 들어갈 경우 소스보기 불편 및 복잡해져서 잘 안씀.
		}*/

	return (

		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalPoints}</td>
			</tr>
			</tbody>
		</table>


	);
}