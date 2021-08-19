import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});
import {label, colors, helperText} from './data';
const Radial = () => {
	const options = {
		options: {
			colors: colors,
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: '20%',
						background: 'transparent',
					},

					track: {
						show: true,
						background: '#F2F3FC',
						strokeWidth: '100%',
						opacity: 1,
						margin: 15,
						dropShadow: {
							enabled: false,
							top: 0,
							left: 0,
							blur: 3,
							opacity: 0.5,
						},
					},

					dataLabels: {
						show: false,
					},
				},
			},
			states: {
				hover: {
					filter: {
						type: 'darken',
						value: 0.8,
					},
				},
			},
			stroke: {
				lineCap: 'round',
			},
			labels: label,
		},
		series: [50, 83],
	};

	return (
		<div className=' col-5 box-border px-[8px]'>
			<div className='shadow-lg rounded-[3px] flex flex-col bg-white h-full w-full overflow-hidden'>
				<div className='p-[30px] flex items-center'>
					<h3 className='m-0 leading-5 text-[16px] font-bold text-[#161f6a]'>
						Target
					</h3>
				</div>
				<div
					className='flex flex-wrap w-full '
					style={{display: 'block', position: 'relative'}}>
					<Chart
						options={options.options}
						series={options.series}
						type='radialBar'
						width='100%'
					/>
				</div>
				<div className='w-full pt-[15px] px-[10px] pb-[30px] flex justify-around items-start'>
					{label &&
						label.map((item, index) => (
							<div
								className='py-0 px-[10px] flex justify-start items-start'
								key={index}>
								<span
									style={{backgroundColor: colors[index]}}
									className='w-[15px] h-[15px] rounded-[50%] mr-[10px] flex-shrink-0'
								/>
								<div className='flex flex-col'>
									<span className='mb-[10px] text-[#666d92] leading-5 font-normal text-[13px]'>
										{helperText[index]}
									</span>
									<span className='text-[21px] leading-5 font-bold text-[#161f6a]'>
										{label[index]}
									</span>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Radial;

// .f0 {
//     font-size: 21px;
// }

// <style>
// .ex {
//     line-height: 1.2;
// }
// <style>
// .cs {
//     font-weight: 700;
// }
// <style>
// .cr {
//     font-family: Lato, sans-serif;
// }
// <style>
// .c1 {
//     color: #161f6a;
// }
