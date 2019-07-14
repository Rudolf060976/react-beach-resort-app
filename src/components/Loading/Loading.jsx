import React from 'react';
import loadingGIF from '../../assets/images/gif/loading-arrow.gif';
import './Loading.scss';

function Loading() {
	return (
		<div className="loading">
			<h4>rooms data loading...</h4>
			<img src={loadingGIF} alt="loading" />	
		</div>
	);
}

export default Loading;
