import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import TopMovers from "./components/TopMovers";
function App() {
  return (
    <Layout>
      <Navbar />
      <div className="px-24 py-10">
        <div className="flex flex-row justify-between ">
          <div className="flex w-[36em]">
            <p className="font-semibold text-3xl">Harga Crypto dalam rupiah hari ini</p>
          </div>

          {/* INPUT SEARCH  */}
          <div className="flex w-[24rem] ">
            <form className="max-w-sm px-4">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari aset di pintu..."
                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-100 focus:bg-gray-100 focus:border-gray-500"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="pt-4">
          <h2 className="font-bold text-2xl">🔥 Top Movers (24Jam)</h2>
        </div>
        <div className="flex space-x-5">
          <TopMovers />
          <TopMovers />
          <TopMovers />
          <TopMovers />
          <TopMovers />
          <TopMovers />
        </div>
      </div>
    </Layout>
  );
}

export default App;
