import ApproApprovalsTable from './../components/tables/ApprovalsTable'
import RejectedTable from '../components/tables/RejectedTable'
const approvals = () => {
    return (
        <div className="w-full font-sans my-4">
            <div>
                <div className=" ">
                    <h1 className='font-semibold text-3xl text-gray-800'>Booking Approvals </h1>
                </div>
                <div>
                    <ApproApprovalsTable/>
                </div>
            </div>
            <div>
                <div className=" my-4">
                    <h1 className='font-semibold text-3xl text-gray-800'>Rejected Booking </h1>
                </div>
                <div>
                    <RejectedTable/>
                </div>
            </div>
        </div>
    )
}

export default approvals
