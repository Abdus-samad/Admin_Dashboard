import CoinIcon from '../Icons/CoinIcon';
import {ArrowNarrowUpIcon, ArrowNarrowDownIcon} from '@heroicons/react/outline';
import CartIcon from '../Icons/CartIcon';
import {UserIcon} from '../Icons/User';
import {DeliveryIcon} from '../Icons/DeliveryIcon';
import {Revenue} from '../Icons/Revenue';
import {Refund} from '../Icons/Refund';


export const helperText = ['Weekly Targets', 'Monthly Targets'];
export const label = ['$1,342', '$8,908'];
export const colors = ['#03d3b5', '#666d92'];
export const color = ['#03d3b5'];
export const data = [
	{
		name: 'Total Revenue',
		days: '(Last 30 Days)',
		icon: <CoinIcon />,
		price: '$711.66',
		cName: 'text-[#03d3b5] leading-5 font-bold text-[14px] mb-[50px]',
		rate: <ArrowNarrowUpIcon className='h-[11px]' />,
		last: '(previous 30 days)',
		title: ' Revenue up ',
	},
	{
		name: 'Total Order',
		days: '(Last 30 Days)',
		icon: <CartIcon />,
		price: '88,568',
		cName: 'text-[#fc6687] leading-5 font-bold text-[14px] mb-[50px]',
		title: 'Order down',
		rate: <ArrowNarrowDownIcon className='h-[11px]' />,
		last: '(previous 30 days)',
	},
	{
		name: 'New Customer',
		days: '(Last 30 Days)',
		icon: <UserIcon />,
		price: '5,678',
		cName: 'text-[#03d3b5] leading-5 font-bold text-[14px] mb-[50px]',
		title: 'Customer up',
		rate: <ArrowNarrowUpIcon className='h-[11px]' />,
		last: '(previous 30 days)',
	},
	{
		name: 'Total Delivery',
		days: '(Last 30 Days)',
		icon: <DeliveryIcon />,
		price: '78,000',
		cName: 'text-[#03d3b5] leading-5 font-bold text-[14px] mb-[50px]',
		title: 'Delivery up',
		rate: <ArrowNarrowUpIcon className='h-[11px]' />,
		last: '(previous 30 days)',
	},
];

export const labels = ['Todays Revenue', 'Todays Refund'];
export const series = ['$30,634', '$6,340'];
export const Icon = [<Revenue />, <Refund />];
