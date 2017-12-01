import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(data) {
		const name = data.city.name;
		const temps = data.list.map(weather => weather.main.temp);
		const pressures = data.list.map(weather => weather.main.pressure);
		const humidity = data.list.map(weather => weather.main.humidity);
		console.log(temps);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color='orange' units='K'/></td>
				<td><Chart data={pressures} color='green' units='hPa'/></td>
				<td><Chart data={humidity} color='blue' units='%'/></td>
			</tr>
		)
	}

	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			)
	}
}

function mapStateToProps(state) {
	return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);

/*
function mapStateToProps({weather}) {
	return { weather };
}
*/
