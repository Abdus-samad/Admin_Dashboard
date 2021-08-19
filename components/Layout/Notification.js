import NotificationIcon from '../Icons/NotificationIcon';
import Alert from '../Icons/Alert';
import React, {useContext, useState} from 'react';

const Notification = () => {
	const [show, setShow] = useState(false);
	const dropDown = () => {
		setShow(!show);
	};

	return (
		<>
			<div
				onClick={dropDown}
				className='my-0 mx-[45px] cursor-pointer relative flex'>
				<NotificationIcon />
				<div className='right-[-2px] top-[-4px] absolute flex text-[#00d4b5]'>
					<Alert />
				</div>
			</div>
			{show && (
				<div className='NotificationPop'>
					<div className='text-[#000] rounded-bl-none rounded-br-none rounded-tr-none rounded-tl-none relative bg-white'>
						<div className='border-b border-[#e6e6e6] py-[15px] px-[30px] items-center justify-between flex'>
							<span className='text-[18px] leading-6 font-bold text-[#161f6a]'>
								Notification
							</span>
							<button className='focus:outline-none text-[#fc5c63] bg-transparent leading-6 font-bold text-[14px] cursor-pointer p-0'>
								Clear all
							</button>
						</div>
						<div className='px-[30px] py-0 flex flex-col'>
							<div className='last:border-b-none py-[20px] px-0 flex flex-col'>
								<div className='mb-[5px] flex justify-start items-center'>
									<span className='leading-6 font-bold text-[#161f6a] text-[14px]'>
										Delivery Successful
									</span>
									<span className='my-0 mx-[10px] bg-[#e6e6e6] rounded-[2px] w-[4px] flex h-[4px]'></span>
									<span className='font-normal text-[#666d92] leading-6 text-[14px]'>
										5m
									</span>
								</div>
								<p className='font-normal text-[#666d92] m-0 text-[14px]'>
									Order #34567 had been placed
								</p>
							</div>
						</div>
						<div className='border-t border-[#e6e6e6] py-[15px] px-[30px] flex items-center justify-center'>
							<button className='focus:outline-none border-none p-0 leading-6 font-bold text-[14px] cursor-pointer font-serif text-[#00c58d]'>
								More Feeds
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Notification;

{
	/*
	
	 */
}
