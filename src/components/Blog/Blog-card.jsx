import BlogA from '../../assets/Blog 1.png'
import BlogB from '../../assets/Business.png'
import BlogC from '../../assets/Design 1.png'
import BlogD from '../../assets/Design 2.png'
import BlogE from '../../assets/Design 3.png'

const BlogCard = () => {
    return(
        <div className="my-9">
<div className="flex justify-between">
  <div>
    <h3 className="text-xl font-bold">
      Popular<span className="text-[#F0A305] px-2">Articles</span>
    </h3>
  </div>
  <div className="flex">
    <div>

    </div>
  </div>

</div>

<div className="mx-auto w-full">
  <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  mx-auto  gap-6 mt-8'>


    <div className="bg-white shadow-md items-center  rounded-lg max-w-xs ">
      <a href="#" className='h-[200px] overflow-hidden'>
        <img className="rounded-t-lg bg-cover" src={BlogA} alt="product image" />
      </a>
      <div className="px-2 py-5">
        <div className="flex justify-between">
          <div>
            <span className="text-blue-500">Web Development</span>
          </div>
          <div>
            <span className="text-gray-500">May 27, 2023</span>
          </div>


        </div>
        <div className="mt-4">
        <a className='my-8' href="#">
            <h3 className="  text-[15px] tracking-tight text-black font-bold">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
          </a>

          <div className="flex items-center justify-between mt-5">
            <span className="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
            <a href="#"
              className="text-blue shadow-2xl  text-sm font-bold">Read post</a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white shadow-md items-center  rounded-lg max-w-xs ">
      <a href="#" className='h-[200px] overflow-hidden'>
        <img className="rounded-t-lg bg-cover" src={BlogB} alt="product image" />
      </a>
      <div className="px-2 py-5">
        <div className="flex justify-between">
          <div>
            <span className="text-blue-500">Web Development</span>
          </div>
          <div>
            <span className="text-gray-500">May 27, 2023</span>
          </div>


        </div>
        <div className="mt-4">
        <a className='my-8' href="#">
            <h3 className="  text-[15px] tracking-tight text-black font-bold">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
          </a>


          <div className="flex items-center justify-between mt-5">
            <span className="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
            <a href="#"
              className="text-blue  text-sm font-bold">Read post</a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white shadow-md  rounded-lg max-w-xs ">
      <a href="#" className='h-[200px] overflow-hidden'>
        <img className="rounded-t-lg bg-cover" src={BlogC} alt="product image" />
      </a>
      <div className="px-2 py-5">
        <div className="flex justify-between">
          <div>
            <span className="text-blue-500">Web Development</span>
          </div>
          <div>
            <span className="text-gray-500">May 27, 2023</span>
          </div>


        </div>
        <div className="mt-4">
        <a className='my-8' href="#">
            <h3 className="  text-[15px] tracking-tight text-black font-bold">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
          </a>


          <div className="flex items-center justify-between mt-5">
            <span className="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
            <a href="#"
              className="text-blue  text-sm font-bold">Read post</a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white shadow-md  rounded-lg max-w-xs ">
      <a href="#" className='h-[200px] overflow-hidden'>
        <img className="rounded-t-lg bg-cover" src={BlogD} alt="product image" />
      </a>
      <div className="px-2 py-5">
        <div className="flex justify-between">
          <div>
            <span className="text-blue-500">Web Development</span>
          </div>
          <div>
            <span className="text-gray-500">May 27, 2023</span>
          </div>


        </div>
        <div className="mt-4">
        <a className='my-8' href="#">
            <h3 className="  text-[15px] tracking-tight text-black font-bold">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
          </a>


          <div className="flex items-center justify-between mt-5">
            <span className="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
            <a href="#"
              className="text-blue  text-sm font-bold">Read post</a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white shadow-md items-center  rounded-lg max-w-xs ">
      <a href="#" className='h-[200px] overflow-hidden'>
        <img className="rounded-t-lg bg-cover" src={BlogE} alt="product image" />
      </a>
      <div className="px-2 py-5">
        <div className="flex justify-between">
          <div>
            <span className="text-blue-500">Web Development</span>
          </div>
          <div>
            <span className="text-gray-500">May 27, 2023</span>
          </div>


        </div>
        <div className="mt-4">
        <a className='my-8' href="#">
            <h3 className="  text-[15px] tracking-tight text-black font-bold">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
          </a>


          <div className="flex items-center justify-between mt-5">
            <span className="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
            <a href="#"
              className="text-blue  text-sm font-bold">Read post</a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white shadow-md items-center  rounded-lg max-w-xs ">
      <a href="#" className='h-[200px] overflow-hidden'>
        <img className="rounded-t-lg bg-cover" src={BlogA} alt="product image" />
      </a>
      <div className="px-2 py-5">
        <div className="flex justify-between">
          <div>
            <span className="text-blue-500">Web Development</span>
          </div>
          <div>
            <span className="text-gray-500">May 27, 2023</span>
          </div>


        </div>
        <div className="mt-4">
        <a className='my-8' href="#">
            <h3 className="  text-[15px] tracking-tight text-black font-bold">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
          </a>

          <div className="flex items-center justify-between mt-5">
            <span className="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
            <a href="#"
              className="text-blue  text-sm font-bold">Read post</a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white shadow-md  rounded-lg max-w-xs ">
      <a href="#" className='h-[200px] overflow-hidden'>
        <img className="rounded-t-lg bg-cover" src={BlogB} alt="product image" />
      </a>
      <div className="px-2 py-5">
        <div className="flex justify-between">
          <div>
            <span className="text-blue-500">Web Development</span>
          </div>
          <div>
            <span className="text-gray-500">May 27, 2023</span>
          </div>


        </div>
        <div className="mt-4">
        <a className='my-8' href="#">
            <h3 className="  text-[15px] tracking-tight text-black font-bold">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
          </a>


          <div className="flex items-center justify-between mt-5">
            <span className="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
            <a href="#"
              className="text-blue  text-sm font-bold">Read post</a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white shadow-md  rounded-lg max-w-xs ">
      <a href="#" className='h-[200px] overflow-hidden'>
        <img className="rounded-t-lg bg-cover" src={BlogD} alt="product image" />
      </a>
      <div className="px-2 py-5">
        <div className="flex justify-between">
          <div>
            <span className="text-blue-500">Web Development</span>
          </div>
          <div>
            <span className="text-gray-500">May 27, 2023</span>
          </div>


        </div>
        <div className="mt-4">
          <a className='my-8' href="#">
            <h3 className="  text-[15px] tracking-tight text-black font-bold">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
          </a>


          <div className="flex items-center justify-between mt-5">
            <span className="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
            <a href="#"
              className="text-blue  text-sm font-bold">Read post</a>
          </div>
        </div>
      </div>
    </div>


  </div>

</div>



</div>
    );
}

export default BlogCard;




