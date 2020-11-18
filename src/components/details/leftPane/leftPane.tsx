import React from 'react';
import { MyPaper } from '../commons/myPaper';
import BasicInformations from './basic/basicInformation';
interface props {
	user: any;
}
const LeftPane = ({ user }: props) => {
	return (
		<MyPaper
			title="Informations principales"
			children={<BasicInformations user={user} />}
		/>
	);
};

export default LeftPane;
