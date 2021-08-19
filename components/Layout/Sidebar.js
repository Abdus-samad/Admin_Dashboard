import {useRouter} from 'next/dist/client/router';
import Link from 'next/link';
import {Sidedata} from './data';

const Sidebar = () => {
	const router = useRouter();
	return (
		<>
			<div
				style={{height: 'calc(100vh - 92px)'}}
				className='flex flex-col w-[270px] bg-white flex-shrink-0 h-auto'>
				<div className='py-[45px] px-0 flex items-end flex-col overflow-y-auto h-full w-full'>
					{Sidedata.map((item, index) => (
						<Link
						key={index}
						href={item.path}>
							<a
								className={`py-[20px] pr-[55px] pl-[30px] leading-6 font-bold text-[16px] #161f6a focus:outline-none flex items-center  ${
									router.asPath === item.path
										? 'text-[#00c58d] rounded-tl-[50px] rounded-bl-[50px] bg-[#f7f7f7]'
										: 'text-[#161f6a] hover:text-[#00c58d]'
								}`}
								style={{width: 'calc(100% - 30px)'}}>
								<span className='w-[16px] mr-[15px] flex items-center'>
									{item.icon}
								</span>
								{item.name}
							</a>
						</Link>
					))}
				</div>
				<button className='Logout'>Logout</button>
			</div>
		</>
	);
};

export default Sidebar;
{
	/** 
    
}
*/
}
