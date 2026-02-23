import DailyGraph from "../components/graph/attendence/dailyGraph"
import MontlyGraph from "../components/graph/attendence/montlyGraph"
const attendence = () => {
  return (
    <div>
        <div className='bg-[#00B4ED] w-full h-16 flex items-center p-2 text-white font-semibold text-lg'>
            <h1>Attendance</h1>
        </div>
        <div className="flex items-center my-4">
            <div className="w-6/12">
                <p className="bg-[#00B4ED] text-white p-2 rounded-md mb-2 w-6/12 m-auto text-center ">
                    Daily
                </p>
                <div className="">
                    
                <DailyGraph/>
                </div>
            </div>
            <div className="w-6/12">
                <p className="bg-[#00B4ED] text-white p-2 rounded-md mb-2 w-6/12 m-auto text-center ">
                    Montly
                </p>
                <div className="">
                    
                <MontlyGraph/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default attendence
