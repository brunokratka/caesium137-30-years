import styled from 'styled-components';
import { breakpoints }  from '../../resources/styles/breakpoints';

export const Container = styled.div`
  display: flex;
	justify-content: center;
	position: relative;
	overflow: hidden;
	padding: 45px 0;
	${props => props.color && `
		background-color: ${props.color};
	`};
	${props => props.height && `
		min-height: ${props.height};
		height: ${props.height};
	`};
	${props => props.img && `
	${props.img.overlay ? `
			background-image: linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.4) ), url(${props.img.url});
		`
		:
		`
			background-image: url(${props.img.url});
		`
	}
	`};
	${props => props.img && !props.img.repeat && `
		background-repeat: no-repeat;
		background-size: cover;
		background-position: ${props.img.position ?
			props.img.position
			:
			'center'
		};
	`};
	${props => props.hero && `
		@media screen and (max-width: ${breakpoints.mobileLandscape}) {
				min-height: calc(100vh - 110px);
				height: 100vh;
		}
	`}
	@media screen and (max-width: ${breakpoints.mobilePortrait}) {
			padding: 20px 0;
			background-position: ${props => props.bgMobilePosition};
	}
`

export const Video = styled.video`
	position: absolute;
	object-fit: cover;
	width: 100%;
	height: 100%;
	z-index: 1;
	top: 0;
	left: 0;
`