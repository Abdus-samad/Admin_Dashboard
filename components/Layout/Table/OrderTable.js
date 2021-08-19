import {head, order_table} from '../data';

const OrderTable = () => {
	return (
		<div className='shadow bg-white max-h-[450px] overflow-auto'>
			<table className='w-full'>
				<thead className='bg-white sticky shadow border-b '>
					<tr>
						<th className='border-r p-2'>
							<input type='checkbox' className='check' />
						</th>
						{head.map((item, index) => (
							<th className='p-2 border-r text-sm font-thin text-gray-500 sticky'>
								<div className='flex items-center justify-center text-[14px] font-bold text-[#161f6a] sticky'>
									{item}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{order_table.map((item, index) => (
						<tr className='bg-white text-center text-[14px] font-normal text-[#161f6a]'>
							<td className='p-2'>
								<input type='checkbox' className='check' />
							</td>
							<td className='p-2'>{item.id}</td>
							<td className='p-2'>{item.customer}</td>
							<td className='p-2'>{item.time}</td>
							<td className='p-2'>{item.address}</td>
							<td className='p-2'>${item.amount}</td>
							<td className='p-2'>{item.payment}</td>
							<td className='p-2'>
								<div className={item.cls}>{item.contact}</div>
							</td>
							<td className='p-2'>{item.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OrderTable;
