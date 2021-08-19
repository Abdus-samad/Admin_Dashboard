import React, {useState} from 'react';
import {Navdata} from './data';
const User = () => {
	const [show, setShow] = useState(false);
	const dropDown = () => {
		setShow(!show);
	};

	return (
		<>
			<div
				onClick={dropDown}
				className='flex-shrink-0 overflow-hidden border border-white h-[40px] w-[40px] rounded-[50%] flex'>
				<img
					src='/user.jpg'
					alt=''
					className='h-full w-full cursor-pointer'
				/>
			</div>

			{show && (
				<div className=' users'>
					<div className='text-[#000] rounded-bl-none rounded-br-none rounded-tr-none rounded-tl-none relative bg-white'>
						<div className='flex flex-col'>
							{Navdata.map((item, index) => (
								<>
									<a
										key={index}
										href={item.path}
										className='border-[#f7f7f7] border-b hover:text-[#00c58d] text-[#666d92] py-[16px] px-[20px] transition-all ease-in-out duration-100 font-bold flex items-center'>
										<span>{item.name}</span>
									</a>
								</>
							))}
							<button className='hover:text-[#00c58d] transition-all ease-in-out text-[16px] font-bold focus:outline-none cursor-pointer flex items-center border-none duration-100 py-[16px] px-[20px] m-0 leading-5 text-[#666d92]'>
								Logout
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default User;
{
	/**


    font-weight: 700;

    text-decoration: none;

    cursor: pointer;

    outline: 0px;

    border: 0px;

    align-items: center;

    display: flex;



*/
}
