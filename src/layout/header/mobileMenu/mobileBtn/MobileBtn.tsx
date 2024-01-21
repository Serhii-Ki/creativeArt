import styled, { css } from 'styled-components';

type BtnType = {
	isOpen: boolean;
	handelModal: React.MouseEventHandler<HTMLDivElement>;
};

function MobileBtn(props: BtnType) {
	return (
		<BtnWrap isOpen={props.isOpen} onClick={props.handelModal}>
			<span></span>
			<span></span>
			<span></span>
		</BtnWrap>
	);
}

const BtnWrap = styled.div<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: 32px;
	height: 36px;
	cursor: pointer;
	position: relative;
	z-index: 10;

	span {
		width: 100%;
		height: 2px;
		background-color: #ccc;
		transition: transform 0.3s ease-in-out;

		&:nth-child(1) {
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(45deg) translateY(14px);
				`}
		}

		&:nth-child(2) {
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: scaleX(0);
				`}
		}

		&:nth-child(3) {
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(-45deg) translateY(-14px);
				`}
		}
	}
`;

export default MobileBtn;
