import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});
import {colors} from './data';

const Area = () => {
	const options = {
		options: {
			chart: {
				zoom: {
					enabled: false,
				},
				toolbar: {
					show: false,
				},
			},
			colors: colors,
			dataLabels: {
				enabled: false,
			},
			fill: {
				type: 'solid',
			},
			stroke: {
				show: false,
				curve: 'smooth',
			},
			legend: {
				show: true,
			},
			xaxis: {
				type: 'datetime',
				categories: [
					'1/11/2000',
					'2/11/2000',
					'3/11/2000',
					'4/11/2000',
					'5/11/2000',
					'6/11/2000',
					'7/11/2000',
					'8/11/2000',
					'9/11/2000',
					'10/11/2000',
					'11/11/2000',
					'12/11/2000',
					'1/11/2001',
					'2/11/2001',
					'3/11/2001',
					'4/11/2001',
					'5/11/2001',
					'6/11/2001',
				],
				labels: {
					formatter: function (value, timestamp, opts) {
						return opts.dateFormatter(
							new Date(timestamp),
							'dd MMM'
						);
					},
					show: true,
					offsetX: -25,
					style: {
						colors: '#161F6A',
						fontSize: '14px',
						fontFamily: "'Lato', sans-serif",
					},
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				crosshairs: {
					show: true,
					width: 1,
					tickWidth: 0,
					position: 'back',
					opacity: 1,
					stroke: {
						color: 'transparent',
						width: 0,
						dashArray: 0,
					},
					fill: {
						type: 'solid',
						color: '#F2F3FC',
					},
				},
				tooltip: {
					enabled: false,
				},
			},
			yaxis: {
				show: true,
				labels: {
					show: true,
					style: {
						color: '#161F6A',
						fontSize: '14px',
						fontFamily: "'Lato', sans-serif",
					},
				},
			},
			grid: {
				borderColor: '#F7F7F7',
				xaxis: {
					lines: {
						show: true,
					},
				},
			},
			markers: {
				size: 0,
				opacity: 1,
				colors: colors,
				strokeColor: '#fff',
				strokeWidth: 4,
				hover: {
					size: 8,
				},
			},
		},
		series: [
			{
				name: '',
				data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250],
			},
		],
	};

	return (
		<div className='col-4 box-border px-[8px]'>
			<div className='shadow-lg rounded-[3px] flex flex-col bg-white h-full w-full overflow-hidden'>
				<div className='p-[30px] flex items-start'>
					<h3 className='m-0 leading-5 text-[16px] font-bold text-[#161f6a]'>
						Sales From Social Media
					</h3>
				</div>
				<div
					className='flex flex-wrap w-full '
					style={{
						display: 'block',
						position: 'relative',
						width: '100%',
					}}>
					<Chart
						options={options.options}
						series={options.series}
							height='350'
						width='200%'
						type='area'
					/>
				</div>
			</div>
		</div>
	);
};

export default Area;
