import {customer, customers} from '../data';

const OrderTable = () => {
	return (
		<div className='shadow bg-white max-h-[450px] overflow-auto'>
			<table className='w-full'>
				<thead className='bg-white sticky shadow border-b '>
					<tr>
						<th className='border-r p-2'>
							<input type='checkbox' className='check' />
						</th>
						{customer.map((item, index) => (
							<th className='p-2 border-r text-sm font-thin text-gray-500 sticky'>
								<div className='flex items-center justify-center text-[14px] font-bold text-[#161f6a] sticky'>
									{item}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{customers.map((item, index) => (
						<tr className='bg-white text-center text-[14px] font-normal text-[#161f6a]'>
							<td className='p-2'>
								<input type='checkbox' className='check' />
							</td>
							<td className='p-2'>{item.id}</td>
							<td className='p-2'>
                                
                                <div className='rounded-[20px] h-[38px] w-[38px] bg-white inline-block'>{item.image}</div>
                                
                                </td>
							<td className='p-2'>{item.name}</td>
							<td className='p-2'>{item.contact}</td>
							<td className='p-2'>{item.order}</td>
							<td className='p-2'>${item.amount}</td>
							<td className='p-2'>{item.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OrderTable;


