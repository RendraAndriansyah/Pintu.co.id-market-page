import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import TopMovers from "./components/TopMovers";
import { Category } from "./components/Category";
import { TableContent } from "./components/TableContent";
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
              <div className="relative ">
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
        <div className="flex space-x-5  overflow-auto">
          <TopMovers />
          <TopMovers />
          <TopMovers />
          <TopMovers />
          <TopMovers />
          <TopMovers />
        </div>
        <Category />
        <div className="overflow-x-auto pt-5 ">
          <table className="table  w-full ">
            {/* head */}
            <thead className="">
              <tr className="text-gray-500 ">
                <th className="text-base text-center">CRYPTO</th>
                <th className="text-base">HARGA</th>
                <th className="text-base">24 JAM</th>
                <th className="text-base">1 MNG</th>
                <th className="text-base">1 BLN</th>
                <th className="text-base">1 THN</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              <TableContent />
              <TableContent />
              <TableContent />
            </tbody>
          </table>
        </div>
        <div className="w-full border rounded-lg h-auto my-5 p-5">
          <h2 className="font-medium text-lg py-2">Tentang Cryptocurrency</h2>
          <p className="text-zinc-500 pb-8">
            Cryptocurrency adalah aset mata uang digital yang diamankan menggunakan metode
            cryptography diatas open database yang disebut blockchain. Terdapat 2 jenis
            crypto, yaitu coin dan token. Coin adalah cryptocurrency yang berdiri diatas
            blockchain-nya sendiri dengan contoh bitcoin dan ethereum, sedangkan token
            adalah cryptocurrency yang “menumpang” diatas blockchain dari native aset
            lain.
          </p>

          <button className="border rounded-full py-2 px-8 border-slate-500 hover:bg-slate-100 hover:transition-all hover:border-white">
            Pelajari lebih lanjut <span className="font-bold text-xl"> → </span>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
