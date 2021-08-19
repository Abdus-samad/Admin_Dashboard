import Slide from 'react-reveal/Slide';

const ProductOption = ({images, name, piece, price, priceCut}) => {
	return (
		<Slide bottom>
			<div className='flex flex-col flex-grow rounded-md border border-gray-100 bg-white cursor-pointer hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200'>
				<div className='relative flex items-center justify-center overflow-hidden flex-grow'>
					<img
						src={images}
						className='max-w-full max-h-full h-auto'
					/>
				</div>
				<div className='py-[20px] px-[25px] pb-[30px]'>
					<h3 className='min-h-[48px] mt-0 mx-0 mb-[7px] text-[16px] font-bold text-[#161f6a]'>
						{name}
					</h3>
					<span className='text-[#666d92] font-normal leading-6 '>
						{piece}
					</span>
					<div className='mt-[15px] flex items-center justify-between'>
						<div className='flex items-center relative'>
							<span className='text-[#00c58d] leading-6 font-bold text-[14px]'>
								${price}
							</span>
							<span className='fw my-0 mx-[10px] p-0 px-[5px] text-[11px] text-[#666d92] font-normal relative'>
								${priceCut}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
};

export default ProductOption;

{
	/*

}
    

    


*/
}
