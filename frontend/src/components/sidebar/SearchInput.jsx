import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center bg-black opacity-60'
			style={{paddingLeft: "10px", paddingRight: "15px", gap: "9px", paddingTop: "6px", paddingBottom: "6px" }}>
				{/* px-4 py-4 */}
			<input
				type='text'
				placeholder='Search…'
				className='text-black rounded-xl border-white border-2 opacity-90'
				style={{padding: '2px', width: '200%'}}
				// input input-bordered rounded-full
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn-circle text-white'>
				<img src="/Search.svg" alt="Logo" className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;