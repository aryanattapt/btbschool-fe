const { Button } = require("flowbite-react")

const InformasiPendaftaran = () => {
    return <div className="p-4">
        <h1 className="text-2xl font-bold text-[#00305E] text-center mb-6">
            Informasi Pendaftaran
        </h1>
        <div className="bg-white p-6 mb-4">
            <h2 className="text-xl font-bold mb-4 text-[#00305E]">Temukan Informasi</h2>
            <p className="mb-4 text-[#00305E]">Memiliki pertanyaan mengenai kehidupan di sekolah BTB, bagaimana kegiatan belajar mengajar dan aktivitas di lingkungan BTB?</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="mailto:admission@btbschool.org" className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center">ADMISSION@BTBSCHOOL.ORG</a>
                <a href="tel:0216698888" className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center">0216698888</a>
            </div>
        </div>
        <div className="bg-white p-6 mb-4">
            <h2 className="text-xl font-bold mb-4 text-[#00305E]">Alur Pendaftaran</h2>
            <div className="relative">
                <img
                    src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/banneraboutus.jpg"
                    alt="banneraboutus"
                    className="w-full object-cover"
                />
            </div>
        </div>
        <div className="flex justify-center">
            <Button onClick={() => {window.location.href='/onlineregistration'}}>
                Click here to Register
            </Button>
        </div>
    </div>
}

export default InformasiPendaftaran;