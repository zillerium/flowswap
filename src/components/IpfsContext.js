import React from 'react';

export const IpfsContext = React.createContext({
	ipfsHash: null,
	setIpfsHash: () => {},
});
