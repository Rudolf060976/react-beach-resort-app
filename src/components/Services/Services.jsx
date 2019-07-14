import React, { Component } from 'react';
/* eslint-disable-next-line */
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../Title/Title';
import './Services.scss';


export default class Services extends Component {

	constructor(props) {
		super(props);

		this.state = {

			services: [
				{
					icon: <FaCocktail />,
					title: 'free cocktails',
					info: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with '
				},
				{
					icon: <FaHiking />,
					title: 'Endless Hiking',
					info: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with '
				},
				{
					icon: <FaShuttleVan />,
					title: 'Free shuttle',
					info: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with '
				},
				{
					icon: <FaBeer />,
					title: 'Strongest Beer',
					info: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with '
				}
			]			
		};
	}

	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((item) => {
						return (
							<article key={item.title} className="service">
								<div>{item.icon}</div>
								<h5>{item.title}</h5>
								<p>{item.info}</p>
							</article>
						);					
					})}
				</div>

			</section>
		);
	}
}
