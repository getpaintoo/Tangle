import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-[645px] rounded-3xl overflow-hidden bg-clip-padding backdrop-filter relative'
		style={{backdropFilter: 'blur(10px)'}}>
			<Sidebar />
			<MessageContainer />
		</div>
		
	);
};
export default Home;
