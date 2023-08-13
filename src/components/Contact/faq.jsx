const Faq = () => {
return(
    <div className=" py-12">
    <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
     
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">What is Tailwind CSS?</h3>
                <p className="text-gray-600">Tailwind CSS is a utility-first CSS framework that helps you build modern and responsive web interfaces.</p>
            </div>

      
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">How do I install Tailwind CSS?</h3>
                <p className="text-gray-600">You can install Tailwind CSS using npm or yarn. Check the official documentation for detailed instructions.</p>
            </div>

         
        </div>
    </div>
</div>

);
}  
export default Faq