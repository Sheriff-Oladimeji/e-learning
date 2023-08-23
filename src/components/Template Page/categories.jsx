import allIcon from '../../assets/Icon bg (3).png' 
import marketingIcon from '../../assets/Icon bg (4).png' 

const Categories  = () =>{
    return(
        <div className="my-10">
            <div>
                <h3 className="text-gray-600 text-xl font-bold">Categories</h3>
            </div>
            <div className="grid grid-cols-6 mt-4 gap-9">
                <div className="bg-[#0443AA]  py-8 rounded-lg text-center text-white">
                    <div className='flex justify-center mb-6'>
                        <img src={allIcon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>All</span>
                    </div>

                </div>
                <div className="bg-[#E6E7E9]  py-8 rounded-lg text-center text-[#0443AA]">
                    <div className='flex justify-center mb-6'>
                        <img src={marketingIcon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>Marketing</span>
                    </div>

                </div>


            </div>

        </div>
    );

}

export default Categories