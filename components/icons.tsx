import React from 'react';

function AtmMachineCreditCard(props: any) {
	const title = props.title || "atm machine credit card";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title>{title}</title>
	<g fill="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10">
		<path d="M19 8L23 8L23 1L1 0.999999L1 8L5 8" fill="none" stroke="currentColor" strokeWidth="2"/>
		<path d="M15 5L15 20" fill="none" stroke="currentColor" strokeWidth="2"/>
		<path d="M19 5L5 5L5 18C5 19.1046 5.89543 20 7 20L17 20C18.1046 20 19 19.1046 19 18L19 5Z" fill="none" stroke="currentColor" strokeWidth="2"/>
		<path d="M9 5L9 8" fill="none" stroke="currentColor" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default AtmMachineCreditCard;