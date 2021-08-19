import {useState} from 'react';
import {Arrow} from '../../Icons/Arrow';
import { status } from '../data';

const Status = () => {
	const [open, setOpen] = useState();
	const [selection, setSelection] = useState('Status');

	const toggle = () => setOpen(!open);
	return (
		<div className='grid col-start-2 box-border px-[8px]'>
			<div className='box-border font-normal text-[16px] leading-6 relative w-full'>
				<div
					tabIndex={0}
					role='button'
					onClick={() => toggle(!open)}
					className='category focus:outline-[#00c58d]'>
					<div className='pr-[0px] pl-[10px] py-[10px] flex-nowrap  flex-grow flex-shrink  box-border overflow-hidden relative flex items-center'>
						<div className='hid'></div>
						<div className='whitespace-nowrap text-[#161f6a] text-[14px] overflow-ellipsis max-w-full leading-6 font-bold'>
							{selection}
						</div>
					</div>
					<div className='pr-[12px] ml-[80px]  self-stretch box-border flex-shrink-0 relative items-center flex'>
						<Arrow onClick={() => toggle(!open)} />
					</div>
				</div>
			</div>
			{open && (
				<div className='status'>
					<div className='bg-[#eeeeee] relative text-[#000] rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-none'>
						<div className='w-[160px]'>
							<ul className='max-h-[900px] py-[8px] bg-white m-0 relative shadow rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-none'>
								{status.map((item) => (
									<li className='value hover:bg-[#f6f6f6]'>
										<div
											onClick={() => {
												setSelection(item);
												setOpen(false);
											}}
											className='text-[#666d92] leading-6 font-bold text-[14px] cursor-pointer'>
											{item}
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Status;
