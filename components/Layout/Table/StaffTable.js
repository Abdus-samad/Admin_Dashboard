import {staff, staffs} from '../data';

const StaffTable = () => {
	return (
		<div className='shadow bg-white max-h-[450px] overflow-auto'>
			<table className='w-full'>
				<thead className='bg-white sticky shadow border-b '>
					<tr>
						{staff.map((item, index) => (
							<th className='p-2 border-r text-sm font-thin text-gray-500 sticky'>
								<div className='flex items-center justify-center text-[14px] font-bold text-[#161f6a] sticky'>
									{item}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{staffs.map((item, index) => (
						<tr className='bg-white text-center text-[14px] font-normal text-[#161f6a]'>
							<td className='p-2'>{item.id}</td>

							<td className='p-2'>{item.name}</td>
							<td className='p-2'>{item.email}</td>
							<td className='p-2'>{item.contact}</td>
							<td className='p-2'>{item.date}</td>
							<td className='p-2'>{item.role}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default StaffTable;
