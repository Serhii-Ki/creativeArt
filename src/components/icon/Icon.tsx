import React from 'react';
import { styled } from 'styled-components';

type IconPropsType = {
	icon: React.ReactNode;
};

function Icon(props: IconPropsType) {
	return (
		<StyledIcon>
			<a href='#/'>{props.icon}</a>
		</StyledIcon>
	);
}

const StyledIcon = styled.div``;

export default Icon;
