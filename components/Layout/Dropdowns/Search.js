const Search = () => {
	return (
		<div className='grid col-start-3 box-border px-[8px]'>
			<div className='box-border font-normal text-[16px] leading-6 relative w-full'>
				<div className='hidden  lg:flex flex-grow px-6 py-[10px] border border-gray-200 bg-gray-200  max-w-lg items-center'>
					<input
						type='text'
						className=' flex-grow w-full bg-gray-200 focus:outline-none'
						type='text'
						placeholder='Search your products from here'
						placeholder='Search By Name'
					/>
				</div>
			</div>
		</div>
	);
};

export default Search
