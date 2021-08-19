import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});
import {colors} from './data';

const line = () => {
	const options = {
		options: {
			chart: {
				type: 'line',
				dropShadow: {
					enabled: true,
					color: colors,
					top: 18,
					left: 0,
					blur: 3.5,
					opacity: 0.15,
				},
				toolbar: {
					show: false,
				},
			},
			stroke: {
				width: 8,
				curve: 'smooth',
			},
			xaxis: {
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
				labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				crosshairs: {
					show: true,
					width: 5,
					tickWidth: 0,
					position: 'back',
					opacity: 1,
					stroke: {
						color: '#b6b6b6',
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
			},
			colors: colors,
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
				name: 'Unique Vistors',
				data: [100, 200, 300, 400, 500, 600, 700],
			},
		],
	};

	return (
		<div className='col-4 box-border px-[8px]'>
			<div className='shadow-lg rounded-[3px] flex flex-col bg-white h-full w-full overflow-hidden'>
				<div className='p-[30px] flex items-start'>
					<h3 className='m-0 leading-5 text-[16px] font-bold text-[#161f6a]'>
						User Hit Rate
					</h3>
				</div>
				<div
					className='flex flex-wrap w-full '
					style={{display: 'block', position: 'relative'}}>
					<Chart
						options={options.options}
						series={options.series}
						height='350'
						width='240%'
					/>
				</div>
			</div>
		</div>
	);
};

export default line;
