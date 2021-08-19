import Dashboard from '../Icons/Dasboard';
import Product from '../Icons/Product';
import CategoryIcon from '../Icons/CategoryIcon';
import Order from '../Icons/Order';
import Customer from '../Icons/Customer';
import Settings from '../Icons/Settings';
import {Member} from '../Icons/Member';
import {SiteSetting} from '../Icons/SiteSetting';
import {Cart} from '../Icons/Cart';
import {PlusSquare} from '../Icons/PlusSquare';
import {BigCategory} from '../Icons/BigCategory';

export const Navdata = [
	{
		path: '/staff',
		name: 'Staff',
	},
	{
		path: '/settings',
		name: 'Settings',
	},
];

export const Sidedata = [
	{
		path: '/',
		name: 'Dashboard',
		icon: <Dashboard />,
	},
	{
		path: '/products',
		name: 'Products',
		icon: <Product />,
	},
	{
		path: '/category',
		name: 'Category',
		icon: <CategoryIcon />,
	},
	{
		path: '/orders',
		name: 'Orders',
		icon: <Order />,
	},
	{
		path: '/customers',
		name: 'Customers',
		icon: <Customer />,
	},
	{
		path: '/settings',
		name: 'Settings',
		icon: <Settings />,
	},
];

export const dropDown = ['Grocery', 'Women Cloths', 'Bags', 'Makeup'];
export const drop = ['Highest To Lowest', 'Lowest To Highest '];
export const thead = ['Id', 'Image', 'Name', 'Slug', 'Type'];
export const status = ['Delivered', 'Pending', 'Processing', 'Failed'];
export const order_time = ['Last 7 orders', 'Last 15 orders', 'Last 30 orders'];
export const customer = [
	'ID',
	'Image',
	'Name',
	'Contacts',
	'Total Order',
	'Total Amount',
	'Joining Date',
];
export const staff = ['ID', 'Name', 'Email', 'Contact', 'Joining Date', 'Role'];

export const tbody = [
	{
		id: 1,
		image: '',
		name: 'Fruits & Vegetables',
		slug: 'fruits-and-vegetables',
		type: 'grocery',
	},
	{
		id: 9,
		image: '',
		name: 'Meat & Fish',
		slug: 'meat-and-fish',
		type: 'grocery',
	},
	{
		id: 14,
		image: '',
		name: 'Purse',
		slug: 'purse',
		type: 'bags',
	},
	{
		id: 15,
		image: '',
		name: 'Hand bags',
		slug: 'hand-bags',
		type: 'bags',
	},
	{
		id: 16,
		image: '',
		name: '	Shoulder bags',
		slug: 'shoulder-bags',
		type: 'bags',
	},
	{
		id: 17,
		image: '',
		name: 'Wallet',
		slug: 'wallet',
		type: 'bags',
	},
	{
		id: 18,
		image: '',
		name: 'Laptop bags',
		slug: 'laptop-bags',
		type: 'bags',
	},
	{
		id: 19,
		image: '',
		name: 'Women Dress',
		slug: 'women-dress',
		type: 'women-cloths',
	},
	{
		id: 23,
		image: '',
		name: 'Outer Wear',
		slug: 'outer-wear',
		type: 'women-cloth',
	},
	{
		id: 32,
		image: '',
		name: 'Tops',
		slug: 'tops',
		type: 'women-cloths',
	},
	{
		id: 34,
		image: '',
		name: 'Shirts',
		slug: 'shirts',
		type: 'women-cloths',
	},
	{
		id: 35,
		image: '',
		name: 'Face',
		slug: 'face',
		type: 'makeup',
	},
	{
		id: 39,
		image: '',
		name: 'Eyes',
		slug: 'eyes',
		type: 'makeup',
	},
	{
		id: 43,
		image: '',
		name: 'Lips',
		slug: 'lips',
		type: 'makeup',
	},
	{
		id: 47,
		image: '',
		name: 'Accessories',
		slug: 'accessories',
		type: 'makeup',
	},

	{
		id: 48,
		image: '',
		name: 'Snacks',
		slug: 'snacks',
		type: 'grocery',
	},
	{
		id: 57,
		image: '',
		name: 'Pet Care',
		slug: 'petcare',
		type: 'grocery',
	},
	{
		id: 69,
		image: '',
		name: 'Dairy',
		slug: 'dairy',
		type: 'grocery',
	},
	{
		id: 76,
		image: '',
		name: 'Home & Cleaning',
		slug: 'home-cleaning',
		type: 'grocery',
	},
	{
		id: 97,
		image: '',
		name: 'Cooking',
		slug: 'cooking',
		type: 'grocery',
	},
	{
		id: 82,
		image: '',
		name: 'Breakfast',
		slug: 'breakfast',
		type: 'grocery',
	},

	{
		id: 90,
		image: '',
		name: 'Beverage',
		slug: 'beverage',
		type: 'grocery',
	},
	{
		id: 98,
		image: '',
		name: 'Beauty & Health',
		slug: 'healt_beauty',
		type: 'grocery',
	},
	{
		id: 107,
		image: '',
		name: 'Shaving Needs',
		slug: 'shaving_needs',
		type: 'makeup',
	},
	{
		id: 108,
		image: '',
		name: 'Oral Care',
		slug: 'Oral_care',
		type: 'makeup',
	},
	{
		id: 109,
		image: '',
		name: 'Facial Care',
		slug: 'face_care',
		type: 'makeup',
	},
	{
		id: 110,
		image: '',
		name: ' Deodarent',
		slug: 'deodarent',
		type: 'makeup',
	},
	{
		id: 111,
		image: '',
		name: 'Bath & Oil',
		slug: ' bath',
		type: 'makeup',
	},
];

export const head = [
	'ID',
	'Customer ID',
	'Time',
	'Delivery Address',
	'Amount',
	'Payment Method',
	'Contact',
	'Status',
];

export const order_table = [
	{
		id: 1,
		customer: 1,
		time: '17 Aug 2021',
		address: '29 Eve Street, 543 Evenue Road, Ny 87876',
		amount: '249.7',
		payment: 'Cash On Delivery',
		contact: '715-371-3507',
		status: 'Delivered',
		cls: 'gu p-2',
	},
	{
		id: 2,
		customer: 2,
		time: '17 Aug 2021',
		address: '29 Eve Street, 543 Evenue Road, Ny 87876',
		amount: '339',
		payment: 'Cash On Delivery',
		contact: '937-667-7660',
		status: 'Pending',
		cls: 'gu py-[8px] px-[16px]',
	},
	{
		id: 3,
		customer: 3,
		time: '17 Aug 2021',
		address: '29 Eve Street, 543 Evenue Road, Ny 87876',
		amount: '249.7',
		payment: 'Cash On Delivery',
		contact: '508-588-6165',
		status: 'Failed',
		cls: 'pu p-2',
	},
	{
		id: 4,
		customer: 1,
		time: '17 Aug 2021',
		address: '33 Baker Street, Crescent Road, CA 65746',
		amount: '450',
		payment: 'Cash On Delivery',
		contact: '989-981-9455',
		status: 'Delivered',
		cls: 'gu p-2',
	},
	{
		id: 5,
		customer: 2,
		time: '17 Aug 2021',
		address: '29 Eve Street, 543 Evenue Road, Ny 87876',
		amount: '250',
		payment: 'Cash On Delivery',
		contact: '352-368-4009',
		status: 'Failed',
		cls: 'gu p-2',
	},
	{
		id: 6,
		customer: 2,
		time: '17 Aug 2021',
		address: '29 Eve Street, 543 Evenue Road, Ny 87876',
		amount: '250',
		payment: 'Cash On Delivery',
		contact: '15-645-0615',
		status: 'Processing',
		cls: 'gu p-2',
	},
	{
		id: 7,
		customer: 4,
		time: '17 Aug 2021',
		address: '24092 Ocello Street San Diego, CA 92111',
		amount: '600',
		payment: 'Cash On Delivery',
		contact: '727-438-6098',
		status: 'Processing',
		cls: 'gu p-2',
	},
	{
		id: 8,
		customer: 4,
		time: '17 Aug 2021',
		address: '24092 Ocello Street San Diego, CA 92111',
		amount: '600',
		payment: 'Cash On Delivery',
		contact: '208-610-3130',
		status: 'Delivered',
		cls: 'gu p-2',
	},

	{
		id: 9,
		customer: 6,
		time: '17 Aug 2021',
		address: '2971 Waldeck Street Arlington, TX 75760',
		amount: '250',
		payment: 'Cash On Delivery',
		contact: '208-410-3130',
		status: 'Processing',
		cls: 'gu p-2',
	},

	{
		id: 10,
		customer: 6,
		time: '17 Aug 2021',
		address: '2971 Waldeck Street Arlington, TX 75760',
		amount: '350',
		payment: 'Cash On Delivery',
		contact: '901-268-7845',
		status: 'Processing',
		cls: 'gu p-2',
	},

	{
		id: 11,
		customer: 5,
		time: '17 Aug 2021',
		address: '2396 Gordon Street Los Angeles, CA 90017',
		amount: '250',
		payment: 'Cash On Delivery',
		contact: '715-402-6676',
		status: 'Processing',
		cls: 'gu p-2',
	},
	{
		id: 12,
		customer: 2,
		time: '17 Aug 2021',
		address: '3090 Marshall Street Baltimore, MD 21202',
		amount: '350',
		payment: 'Cash On Delivery',
		contact: '917-536-4332',
		status: 'Pending',
		cls: 'gu p-2',
	},
	{
		id: 13,
		customer: 2,
		time: '17 Aug 2021',
		address: '343 Street, 2341 Road Visalia, Ny 24252',
		amount: '400',
		payment: 'Cash On Delivery',
		contact: '956-971-8877',
		status: 'Delivered',
		cls: 'gu p-2',
	},
	{
		id: 14,
		customer: 3,
		time: '17 Aug 2021',
		address: '2852 Duck Creek Road Palo Alto, CA 94306',
		amount: '350',
		payment: 'Cash On Delivery',
		contact: '870-585-7592',
		status: 'Pending',
		cls: 'gu p-2',
	},
	{
		id: 15,
		customer: 9,
		time: '17 Aug 2021',
		address: '4270 Kennedy Court Mansfield, MA 02048',
		amount: '750',
		payment: 'Cash On Delivery',
		contact: '320-692-5287',
		status: 'Pending',
		cls: 'gu p-2',
	},
];

export const customers = [
	{
		id: 1,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'James L. Frank',
		contact: '715-371-3507',
		order: 20,
		amount: 2563,
		date: '01 Jan 2020',
	},
	{
		id: 2,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Andre M. Pollock',
		contact: '937-667-7660',
		order: 30,
		amount: 6583,
		date: '01 Jan 2020',
	},
	{
		id: 3,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Debra J. Nguyen',
		contact: '320-692-5287',
		order: 40,
		amount: 2563,
		date: '01 Jan 2020',
	},

	{
		id: 4,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Erin E. Gonzales',
		contact: '989-981-9455',
		order: 5,
		amount: 3215,
		date: '01 Jan 2020',
	},

	{
		id: 5,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: '	Carolyn B. Coulter',
		contact: '352-368-4009',
		order: 20,
		amount: 7863,
		date: '01 Jan 2020',
	},
	{
		id: 6,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Bryan G. Hathaway',
		contact: '320-692-5287',
		order: 2,
		amount: 1257,
		date: '01 Jan 2020',
	},

	{
		id: 7,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Tony L. Dematteo',
		contact: '320-692-5287',
		order: 25,
		amount: 5563,
		date: '01 Jan 2020',
	},

	{
		id: 8,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Leah M. Cassella',
		contact: '208-610-3130',
		order: 40,
		amount: 1102,
		date: '01 Jan 2020',
	},
];
export const staffs = [
	{
		id: 1,
		name: 'James L. Frank',
		contact: '715-371-3507',
		order: 20,
		amount: 2563,
		date: '01 Jan 2020',
	},
	{
		id: 2,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Andre M. Pollock',
		contact: '937-667-7660',
		order: 30,
		amount: 6583,
		date: '01 Jan 2020',
	},
	{
		id: 3,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Debra J. Nguyen',
		contact: '320-692-5287',
		order: 40,
		amount: 2563,
		date: '01 Jan 2020',
	},

	{
		id: 4,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Erin E. Gonzales',
		contact: '989-981-9455',
		order: 5,
		amount: 3215,
		date: '01 Jan 2020',
	},

	{
		id: 5,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: '	Carolyn B. Coulter',
		contact: '352-368-4009',
		order: 20,
		amount: 7863,
		date: '01 Jan 2020',
	},
	{
		id: 6,
		image: (
			<img
				src='/user.jpg'
				alt=''
				className='w-full h-auto rounded-[20px]'
			/>
		),
		name: 'Bryan G. Hathaway',
		contact: '320-692-5287',
		order: 2,
		amount: 1257,
		date: '01 Jan 2020',
	},

	{
		id: 7,

		name: 'Tony L. Dematteo',
		contact: '320-692-5287',
		order: 25,
		amount: 5563,
		date: '01 Jan 2020',
	},

	{
		id: 8,

		name: 'Leah M. Cassella',
		contact: '208-610-3130',
		order: 40,
		amount: 1102,
		date: '01 Jan 2020',
	},
];

export const setting = [
	{
		icon: <Member />,
		header: 'Staff Members',
		text: 'Manage your employees and their permission',
	},
	{
		icon: <SiteSetting />,
		header: 'Site Settings',
		text: 'View and update your site settings',
	},
	{
		icon: <Cart />,
		header: 'Add Products',
		text: 'Add products from here',
	},
	{
		icon: <BigCategory />,
		header: 'Add Categories',
		text: 'Add product categories from here',
	},
	{
		icon: <Member />,
		header: 'Staff Members',
		text: 'Manage your employees and their permission',
	},
];
