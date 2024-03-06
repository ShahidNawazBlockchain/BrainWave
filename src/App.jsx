import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
const App = () => {
  return (
    <>
    <Button className="mt-20">
    Some </Button>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-20" href="#login">
        Something
        </Button>
      </div>
      <h1> <ButtonGradient /> </h1>
    </>
  )
}
export default App
