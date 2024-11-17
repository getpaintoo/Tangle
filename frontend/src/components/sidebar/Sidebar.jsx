import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r flex flex-col' style={{borderColor: '#124D95', borderRightWidth: '7px'}}>
			<SearchInput />
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;