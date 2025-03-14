const VisiMisiPage = ({ data, language }) => {
  return (
    <>
      <div className="mt-10 md:mx-32 mx-10 grid md:grid-cols-1 grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 text-black leading-loose">
        <div>
          <h2 className="md:text-[25px] text-[28px] mb-[10px] font-semibold">
            {/* Visi */}
            Motto
          </h2>
          <Justified>{data[language]["motto"]}</Justified>
          <h2 className="md:text-[25px] text-[28px] mb-[10px] font-semibold">
            {/* Visi */}
            {data[language]?.visimisi?.titlevisi}
          </h2>
          <Justified>
            {/* Untuk memberikan pendidikan holistik dan membina siswa untuk menjadi
            pemimpin yang dinamis dalam masyarakat global. */}
            {data[language]?.visimisi?.descvisi}
          </Justified>
          <h2 className="md:text-[25px] text-[28px] mb-[10px] font-semibold mt-3">
            {/* Misi */}
            {data[language]?.visimisi?.titlemisi}
          </h2>
          <Justified>
            {/* Menyelenggarakan pendidikan internasional berkualitas yang akan
            mengembangkan kebutuhan individu siswa secara akademis, emosional,
            fisik dan sosial dengan:  */}
            {data[language]?.visimisi?.descmisi}
          </Justified>
          <ul className="list-disc text-[14px] md:text-[16px]">
            {data[language]?.visimisi?.misilist.map((val, idx) => {
              return (
                <li key={idx} className="text-justify">
                  {val}
                </li>
              );
            })}
            {/* <li>Menanamkan nilai moral dan budi pekerti
            yang baik kepada siswa agar bertanggung jawab atas tindakannya.</li>
            <li>Mengembangkan Profil Pelajar BTB dengan menerapkan praktik
            pendidikan terbaik dan mempromosikan literasi digital.</li>
            <li>Menyediakan
            lingkungan belajar yang aman dan nyaman di mana rasa hormat,
            kejujuran, dan penghargaan terhadap perbedaan individu dipupuk.</li> */}
          </ul>
        </div>
        <div className="pl-[0px] md:pl-[50px] py-5 md:py-5 xl:py-0">
          {data?.image2 && (
            <img
              // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/bannercontact.jpeg"
              src={`${data?.image2}`}
              alt="aboutus2"
              className="md:h-[500px] md:w-[546px] px-4 object-cover"
            />
          )}
        </div>
      </div>
    </>
  );
};

const Justified = ({ children }) => {
  return (
    <p className="text-[14px] md:text-[16px] leading-[35px] text-justify">
      {children}
    </p>
  );
};

export default VisiMisiPage;
