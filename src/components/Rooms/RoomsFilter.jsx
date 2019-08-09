import React, { Component } from 'react';
import Title from '../Title/Title';
import './RoomsFilter.scss';

export default class RoomsFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filter: {
				roomType: '',
				guests: 0,
				maxPrice: 0,
				minSize: 0,
				maxSize: 0,
				pets: false,
				breakfast: false		
			}
		};

		this.handleChange = this.handleChange.bind(this);

	}

	componentDidMount() {
		this.setState({ filter: this.props.filter }, () => {

			this.props.handleFilter(this.state.filter);

		});

	}

	
	handleChange(e) {

		const {
			name,
			value,
			type,
			checked
		} = e.target;
						
		this.setState(state => {
			return {
				filter: {
					...state.filter,
					[name]: (type !== 'checkbox') ? value : checked
				}
			};
		}, () => {

			setTimeout(() => {
				
				this.props.handleFilter(this.state.filter);

			}, 500);			

		});		
		
	}
		
	render() {
		
		return (
			<section className="rooms-filter">
				<Title title="Search Rooms" />
				<div className="rooms-filter-center">
					<form onSubmit={null}>
						<ul className="form-controls">
							<li>
								<label htmlFor="roomType">Room Type	</label><br />				
								<select name="roomType" id="roomType" className="control round" onChange={this.handleChange} value={this.state.filter.roomType}>
									<option value="all">all</option>
									<option value="single">single</option>
									<option value="double">double</option>
									<option value="family">family</option>
									<option value="presidential">presidential</option>
								</select>
							</li>
							<li>
								<label htmlFor="guests">Guests</label><br />					
								<input type="number" className="control round center" name="guests" id="guests" min="1" max="10" step="1" value={this.state.filter.guests} onChange={this.handleChange} />								
							</li>
							<li>
								<label htmlFor="maxPrice">{`Room max Price $${this.state.filter.maxPrice}`}</label><br />
								<input type="range" className="control" name="maxPrice" id="maxPrice" min="0" max="1000" step="50" value={this.state.filter.maxPrice} onChange={this.handleChange} />
							</li>
							<li>
								<label htmlFor="minSize">Room Size</label><br />
								<div className="control">
									<input type="number" className="round center hsep" name="minSize" id="minSize" min="0" max="3000" step="100" value={this.state.filter.minSize} onChange={this.handleChange} />
									<input type="number" className="round center" name="maxSize" id="maxSize" min="0" max="3000" step="100" value={this.state.filter.maxSize} onChange={this.handleChange} />
								</div>
							</li>
							<li>
								<div className="checks">
									<input type="checkbox" className="vsep" name="breakfast" id="breakfast" checked={this.state.filter.breakfast} onChange={this.handleChange} /><label htmlFor="breakfast">Breakfast</label><br />
									<input type="checkbox" className="vsep" name="pets" id="pets" checked={this.state.filter.pets} onChange={this.handleChange} /><label htmlFor="pets">Pets</label><br />
								</div>
							</li>

						</ul>				
						
					</form>
				</div>
			</section>
		);
	}
}
