import phoneIcon from '../../assets/icon bg.png'
import emailIcon from '../../assets/icon bg (1).png'
import locationIcon from '../../assets/icon bg (2).png'
const CardInfo= () => {
    return(
        <div className="my-8">
            <div >
                <h2 className="text-4xl text-slate-700 font-bold">Contact Info</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 my-10">
                <div className="flex gap-4 px-6 py-3 border rounded-xl">
                    <div>
                        <img src={phoneIcon} alt="" />
                    </div>
                    <div>
                        <div className="mb-2">
                            <h2>Phone number</h2>
                        </div>
                        <div>
                            <span className="text-sm">+2348125422332</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 px-8 py-3 border rounded-xl">
                    <div> <img src={emailIcon} alt="" /></div>
                    <div>
                        <div className="mb-2">
                            <h2>Email Address</h2>
                        </div>
                        <div>
                           <span className="text-sm"> example@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 px-8 py-3 border rounded-xl">
                    <div>
                    <img src={locationIcon} alt="" />
                    </div>
                    <div>
                        <div className="mb-2">
                            <h2>Location</h2>
                        </div>
                        <div>
                       <span className="text-sm"> 6391 Elgin St. Celina, Delaware 10299</span>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default CardInfo