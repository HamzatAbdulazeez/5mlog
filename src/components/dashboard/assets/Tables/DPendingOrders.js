import dayjs from 'dayjs'
import React from 'react'

export const DashBoardPendingOrders = ({tableList}) => {
    console.log(tableList)
  return (
    <div>
        <div className="overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead className="thead-light bg-light">
                <tr>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    S/N
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Order ID
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Item type
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Pickup
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Destination
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Weight(kg)
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Status
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Date Received
                    </th>
                </tr>
                </thead>
                <tbody>
                      {!!tableList.length && tableList.map((lists) =>
                          lists?.order?.map((list, j) => 
                          <tr key={j}>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {j + 1}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.order_id}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  --
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.package_address}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.dropoff_address}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.weight}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  <p className='px-2 py-1 rounded-lg bg-orange-100 text-orange-600 fw-600'>---</p>
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                      {dayjs(list.created_at).format('DD-MM-YYYY')}
                              </td>
                          </tr>
                      ))
                      }
                </tbody>
            </table>
            </div>
    </div>
  )
}