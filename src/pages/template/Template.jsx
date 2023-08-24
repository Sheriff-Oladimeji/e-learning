
import header from "../../assets/Title Backgrounds (1).png"
import AllTemplate from "../../components/Template Page/allTemplate"
import Categories from "../../components/Template Page/categories"
const Template = () => {
  return (
    <main className="mt-28 md:mt-6 w-[90%] mx-auto">
      <div>
        <img src={header} alt="" />
        <Categories />
        <AllTemplate />
      </div>

    </main>
  )
}

export default Template