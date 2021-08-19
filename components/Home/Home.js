import Head from 'next/head';
import Area from '../dashboard/Area';
import Radial from '../dashboard/Radial';
import Line from '../dashboard/line';
import Middle from '../dashboard/Middle';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import Donut from '../dashboard/Donut';
import BarChart from '../dashboard/BarChart';

const Home = () => {
	return (
		<div>
			<Head>
				<title>PickBazar</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<div
				style={{height: 'calc(100vh - 92px)'}}
				className='flex items-center w-full'>
				<Sidebar />
				<div
					style={{width: 'calc(100% - 270px)'}}
					className='h-full flex bg-[#f7f7f7]'>
					<div className='py-[45px] px-[30px] overflow-y-auto overflow-hidden h-auto w-full'>
						<div className='px-[16px] py-0'>
							<div className='box-border flex flex-initial flex-row flex-wrap mx-[-8px] mb-[30px]'>
								<Radial />
								<Line />
							</div>
							<div className='box-border flex flex-initial flex-row flex-wrap mx-[-8px] mb-[30px]'>
								<Middle />
							</div>
							<div className='box-border flex flex-initial flex-row flex-wrap mx-[-8px] mb-[30px]'>
								<Area />
								<Donut />
							</div>
							<div className='box-border flex flex-initial flex-row flex-wrap mx-[-8px] mb-[30px]'>
								{/* <BarChart /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;