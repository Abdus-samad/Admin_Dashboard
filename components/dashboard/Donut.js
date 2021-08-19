import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});
import {labels, colors, series, Icon} from './data';

const Donut = () => {
	const options = {
		options: {
			chart: {
				type: 'donut',
			},
			colors: colors,
			dataLabels: {
				enabled: false,
			},
			labels: labels,
			legend: {
				show: false,
			},
			stroke: {
				show: false,
			},
			states: {
				hover: {
					filter: {
						type: 'darken',
						value: 0.8,
					},
				},
			},
			plotOptions: {
				pie: {
					donut: {},
					expandOnClick: false,
				},
			},
		},
		series: series,
	};

	const numberWithCommas = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};
	return (
		<div className=' col-5 box-border px-[8px]'>
			<div className='shadow-lg rounded-[3px] flex flex-col bg-white h-full w-full overflow-hidden'>
				<div className='p-[30px] flex items-start'>
					<div className='flex justify-start items-center w-full'>
						<span className='h-[56px] w-[56px] mr-[15px] flex'>
							{Icon[0]}
						</span>
						<div className='flex flex-col'>
							<span
								className=' text-[21px] leading-5 font-bold'
								style={{color: colors[0]}}>
								{' '}
								{numberWithCommas(series[0])}
							</span>
							<span className='mt-[10px] text-[#666d92] leading-5 font-normal text-[13px]'>
								{labels[0]}
							</span>
						</div>
					</div>
				</div>
				<div
					className='flex-wrap w-full '
					style={{display: 'block', position: 'relative'}}>
					<Chart
						options={options.options}
						series={options.series}
						type='pie'
						width='100%'
					/>
				</div>
				<div className='p-[30px] flex items-start'>
					<div
						className='flex justify-start items-center w-full'
						style={{flexDirection: 'row-reverse'}}>
						<span
							className='h-[56px] w-[56px]  flex'
							style={{marginRight: '0', marginLeft: '15px'}}>
							{Icon[1]}
						</span>
						<div
							className='flex flex-col'
							style={{alignItems: 'flex-end'}}>
							<span
								className='text-[21px] leading-5 font-bold'
								style={{color: colors[1]}}>
								{' '}
								{numberWithCommas(series[1])}
							</span>
							<span className='mt-[10px] text-[#666d92] leading-5 font-normal text-[13px]'>
								{labels[1]}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Donut;
