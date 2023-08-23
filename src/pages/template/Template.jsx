
import header from "../../assets/Title Backgrounds (1).png"
import Categories from "../../components/Template Page/categories"
const Template = () => {
  return (
    <main className="mt-28 md:mt-6 w-[90%] mx-auto">
      <div>
        <img src={header} alt="" />
        <Categories />
      </div>

    </main>
  )
}

export default Template