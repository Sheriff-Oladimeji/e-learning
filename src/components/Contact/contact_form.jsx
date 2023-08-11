const CardForm = () => {
    return (
        <div className="max-w-3xl mx-auto py-4">
            <div>
                <div>
                    <h2 className="text-3xl font-semibold text-slate-800">Were Here for You</h2>
                </div>
                <div>
                    <span className="text-sm">Your feedback matters! Share your thoughts and suggestions to help us grow and deliver an exceptional e-learning journey.</span>
                </div>
            </div>
            <div className="mt-5">
                <form>
                    <div className="grid md:grid-cols-2 gap-10 mb-10">
                        <div>
                            <div className="mb-2">
                                <h2>First Name</h2>
                            </div>
                            <div>
                                <input className="w-full h-10 px-3 border outline-none rounded-md" type="text" />
                            </div>
                        </div>

                        <div>
                            <div className="mb-2">
                                <h2>Last Name</h2>
                            </div>
                            <div>
                                <input className="w-full h-10 px-3 border outline-none rounded-md" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="mb-2">
                            <h2>Email</h2>
                        </div>
                        <div>
                            <input className="w-full h-10 px-3 border outline-none rounded-md" type="email" />
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="mb-2">
                            <h2>Subject</h2>
                        </div>
                        <div>
                            <input className="w-full h-10 px-3 border outline-none rounded-md" type="text" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="mb-2">
                            <h2>Message</h2>
                        </div>
                        <div>
                            <textarea className="w-full p-3 border outline-none rounded-md h-32"></textarea>
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#055FF0] px-6 py-2 rounded-xl text-white">Send Message</button>
                    </div>
                </form>
            </div>

        </div>
    );
}
export default CardForm