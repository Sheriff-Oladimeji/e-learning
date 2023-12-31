
import { useParams } from "react-router-dom";
import { allCourses, testmonal } from "../../data/templates/alltem";
const CourseTemDescription = () => {
  const { courseId } = useParams();

  const selectedCourse = allCourses.find(
    (course) => course.id === parseInt(courseId)
  );

  return (
    <div className="">
      {selectedCourse ? (
        <div>
             <div>
        <div className="p-7 md:p-7 lg:p-14 lg:grid lg:grid-cols-3 md:gap-7">
        <div className="max-w-[800px] md:max-w-full lg:max-w-[800px] md:col-span-2">
          <div className="border-b-2">
            <div><img src={selectedCourse.image} class="w-[800px] md:w-full" /></div><br />
              <p class="font-bold text-4xl text-[#353F50]">{selectedCourse.title}</p>
          </div>
          <div class="border-b-2">
            <h1 class="font-semibold text-[20px] py-3">Overview: </h1>
            <p class="text-[16px] text-[#555E6C]">{selectedCourse.description}</p>
          </div>
          <div>
            <h1 class="font-semibold text-[20px] py-3">Key Features:</h1>
           <p>{selectedCourse.keyfeature}</p>
          </div>
        </div>
        <div class="max-w-full lg:max-w-[500px] pt-16 lg:pt-0 md:px-16 lg:px-0">
          <div class="">
            <div class="bg-[#E6EFFE] flex flex-col p-8 rounded-xl">
              <h1 class="text-[#0751CB] pb-5 text-[18px] flex justify-center">One Time Payment</h1>
              <p class="text-[#033484] py-3 font-bold text-[24px] flex justify-center">{selectedCourse.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}<span class="line-through text-[#8B919A] text-[16px] flex items-center"> {selectedCourse.discount}</span></p>
              <div class="py-3"><div class="py-3 border border-[#B1B5BB] rounded-2xl flex justify-center"><a class="font-semibold text-[16px] text-[#353F50]">Add to Cart</a></div></div>
              <div class="py-3"><div class="bg-[#055FF0] py-3 rounded-2xl flex justify-center"><a class="font-semibold text-[16px] text-[#d2b1b1]">Buy Now</a></div></div>
              <p class="flex justify-center text-[12px] text-[#8B919A]">A month money back guarantee</p>
            </div>
          </div>
          <div>
            <h1 class="text-[#353F50] text-[20px] font-semibold py-5">Included files and component</h1>
            <ul>
              <li class="text-[#555E6C] text-[16px] pb-3">Pre-designed UI Elements</li>
              <li class="text-[#555E6C] text-[16px] pb-3">Wireframe Templates</li>
              <li class="text-[#555E6C] text-[16px] pb-3">Interactive Prototyping Tools</li>
              <li class="text-[#555E6C] text-[16px] pb-3">5000+ Icon Library</li>
              <li class="text-[#555E6C] text-[16px] pb-3">Typography Styles</li>
              <li class="text-[#555E6C] text-[16px] pb-3">Color Palette</li>
              <li class="text-[#555E6C] text-[16px] pb-3">Additional Design Assets</li>
              <li class="text-[#555E6C] text-[16px] pb-3">Design Documentation</li>
            </ul>
          </div>
          <div class="py-5">
            <div class="p-8 border border-[#E6E7E9] rounded-xl">
              <div class="flex justify-between pb-6">
                <h1 class="text-[18px] text-[#555E6C] font-semibold">Last Updated</h1>
                <p class="text-[16px] text-[#555E6C]">February 2023 </p>
              </div>
              <div class="flex justify-between pb-6">
                <h1 class="text-[18px] text-[#555E6C] font-semibold">Published</h1>
                <p class="text-[16px] text-[#555E6C]">January 2023 </p>
              </div>
              <div class="flex justify-between pb-6">
                <h1 class="text-[18px] text-[#555E6C] font-semibold">Graphics Asset</h1>
                <p class="text-[16px] text-[#555E6C]">Figma FIG</p>
              </div>
              <div class="flex justify-between pb-6">
                <h1 class="text-[18px] text-[#555E6C] font-semibold">Compatible Software Version</h1>
                <p class="text-[16px] text-[#555E6C]">Figma </p>
              </div>
              <div>
                <h1 class="text-[20px] text-[#353F50]">Tags</h1>
                <div class="flex justify-between gap-4 py-5">
                  <a class="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">Visual Design</a>
                  <a class="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">UI/UX Designers</a>
                  <a class="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">Design Workflow</a>
                </div>
                <div class="flex gap-4 justify-around">
                  <a class="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">Visual Design</a>
                  <a class="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">Design Elements</a>
                  <a class="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">Patterns</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-7 py-7 md:px-7 lg:px-14">
        <h1 class="text-[24px] font-semibold text-[#020F24]">Student Reviews</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         
          <div>
            <div class="bg-white p-5 rounded-xl shadow-xl">
              <span class="text-[#8B919A] text-[10px] flex justify-end">2 months ago</span>
              <div class="md:flex md:justify-between">
                <div class="flex">
                  <img src={selectedCourse.avarta} alt="" className="w-10 h-10 object-cover rounded-full" />
                    <p class="flex items-center text-[#020F24] text-[16px] font-medium">hello</p>
                </div>
                <div class="flex items-center justify-end">
                  <i class="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                  <i class="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                  <i class="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                  <i class="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                  <i class="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                  <span class="flex items-center text-[#8B919A] text-[10px]">(4.5)</span>
                </div>
              </div>
              <div>
                <p class="text-[#353F50] text-[14px] pt-5">I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations. It's been an incredible learning adventure</p>
              </div>
            </div>
          </div>
        
         
         
        
        </div>
      </div>
    
    
     
    </div>

         
          
        </div>
      ) : (
        <div>Course not found.</div>
      )}
    </div>
  );
};

export default CourseTemDescription;
