import allIcon from '../../assets/Icon bg (3).png' 
import marketingIcon from '../../assets/Icon bg (4).png' 
import Financeicon from '../../assets/Icon bg (5).png'
import DevelopmentIcon from '../../assets/Icon bg (6).png'
import Designicon from '../../assets/Icon bg (7).png'
import ManagementIcon from '../../assets/Icon bg (8).png'
import Bloggingicon from '../../assets/Icon bg (9).png'
import WordPressicon from '../../assets/Icon bg (10).png'
import CVWritingicon from '../../assets/Icon bg (11).png'

const Categories  = () =>{
    return(
        <div className="my-10">
            <div>
                <h3 className="text-gray-600 text-xl font-bold">Categories</h3>
            </div>
            <div className="grid lg:grid-cols-6  md:grid-cols-4 sm:grid-cols-2   mt-4 gap-5">
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
                <div className="bg-[#E6E7E9]  py-8 rounded-lg text-center text-[#0443AA]">
                    <div className='flex justify-center mb-6'>
                        <img src={Financeicon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>Finance</span>
                    </div>

                </div>
                <div className="bg-[#E6E7E9]  py-8 rounded-lg text-center text-[#0443AA]">
                    <div className='flex justify-center mb-6'>
                        <img src={DevelopmentIcon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>Development</span>
                    </div>

                </div>
                <div className="bg-[#E6E7E9]  py-8 rounded-lg text-center text-[#0443AA]">
                    <div className='flex justify-center mb-6'>
                        <img src={Designicon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>Design</span>
                    </div>

                </div>
                <div className="bg-[#E6E7E9]  py-8 rounded-lg text-center text-[#0443AA]">
                    <div className='flex justify-center mb-6'>
                        <img src={ManagementIcon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>Management</span>
                    </div>

                </div>
                <div className="bg-[#E6E7E9]  py-8 rounded-lg text-center text-[#0443AA]">
                    <div className='flex justify-center mb-6'>
                        <img src={Bloggingicon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>Blogging</span>
                    </div>

                </div>
                <div className="bg-[#E6E7E9]  py-8 rounded-lg text-center text-[#0443AA]">
                    <div className='flex justify-center mb-6'>
                        <img src={WordPressicon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>WordPress</span>
                    </div>

                </div>
                <div className="bg-[#E6E7E9]  py-8 rounded-lg text-center text-[#0443AA]">
                    <div className='flex justify-center mb-6'>
                        <img src={CVWritingicon} alt="" />

                    </div>
                    <div className=''>
                        <span className='text-lg'>CV Writing</span>
                    </div>

                </div>


            </div>

        </div>
    );

}

export default Categories