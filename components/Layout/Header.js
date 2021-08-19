import Link from 'next/link';
import Notification from './Notification';
import User from './User';

const Header = () => {
	return (
		<>
			<div className='py-[20px] px-[45px] shadow-sm bg-white flex justify-between relative items-center w-full'>
				<div className='mr-auto cursor-pointer'>
                    <Link href='/'>
                        <a href="">
                            <img src="/PickBazar.png" alt="" className='max-w-[150px] block'/>
                        </a>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <button className='AddProduct'>Add Products</button>
                    <Notification />
                    <User />
                </div>
			</div>
		</>
	);
};

export default Header;
