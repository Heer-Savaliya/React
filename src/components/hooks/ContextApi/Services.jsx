import { useBioContext } from './ContextApiIndex'

const Services = () => {
    const myName=useBioContext();
  return (
    <div className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white text-xl`}>
      <h1>Services Page , Hello Context Api ,My name is {myName}</h1>
    </div>
  )
}

export default Services
