import { FaRegCheckSquare } from "react-icons/fa";
import ARDContentTitle from "../ContentTitle";
import ARDSignatureDisplay from "../SignatureDisplay";

const ARDTermAndCondition = ({ data }) => {
	return (
		<div>
			<ARDContentTitle title={"Peraturan dan Persyaratan BTB School"} />
			<div className="mt-6 text-[#424a57] text-xs">
				<p>
					Dalam melengkapi formulir pendaftaran, calon siswa / siswi dan
					orangtua menyetujui peraturan dan persyaratan yang diberikan oleh
					pihak sekolah sebagai berikut :{" "}
				</p>
				<div className="py-4 px-8 leading-5">
					<ol className="list-decimal">
						<li>
							Siswa / siswi diharapkan untuk setiap saat mengerti dan mematuhi
							peraturan dan ketetapan yang terdapat pada handbook.
						</li>
						<li>
							Enrollment Fee dibayarkan paling lambat 3 (tiga) hari setelah
							pengumuman hasil test.
						</li>
						<li>
							Semua pembayaran wajib dilakukan melalui bank (pihak sekolah tidak
							menerima pembayaran tunai). Slip pembayaran dari bank wajib
							disimpan dengan baik dan merupakan tanda bukti pembayaran, karena
							pihak Sekolah tidak memberikan kwitansi bukti pembayaran.
						</li>
						<li>
							<div className="pl-12">
								<ul className="list-disc">
									<li>
										<p className="font-bold">School Fee per term :</p>
										<p>
											Dibayarkan paling lambat setiap tanggal 5 term yang
											bersangkutan, jika melewati tanggal tersebut, siswa tidak
											diperkenankan untuk mengikuti kegiatan belajar mengajar
											sebelum pembayaran dilakukan.
										</p>
									</li>
								</ul>
								<ul className="list-disc">
									<li>
										<p className="font-bold">
											School Fee per bulan (dengan menggunakan BRI Auto Debit) :
										</p>
										<p>
											Apabila pendebatan rekening gagal, maka diwajibkan untuk
											melakukan pembayaran melalui transfer ke BRI virtual
											Account masing-masing siswa/i sebelum tanggal 5 setiap
											bulannya untuk menghindari penalty fee sebesar 10%. Batas
											waktu pembayaran school fee + penalty fee adalah tiap
											akhir bulan yang bersangkutan. Apabila pembayaran tidak
											dilakukan sesuai dengan peraturan sekolah maka per tanggal
											1 bulan berikutnya siswa/i tidak dapat mengikuti kegiatan
											belajar mengajar (skorsing).
										</p>
									</li>
								</ul>
							</div>
						</li>
						<li>
							Pada saat pengambilan raport orang tua siswa / siswi diminta telah
							melunasi seluurh biaya administratsi.
						</li>
						<li>
							Siswa / siswi yang nilainya tidak cukup untuk naik kelas akan
							tinggal kelas.
						</li>
						<li>
							Segala macam biaya yang telah diterima sekolah tidak dapat
							dikembalikan atau dipindah-tangankan dalam kondisi dan situasi
							apapun.
						</li>
						<li>
							Pihak sekolah berhak melibatkan siswa / siswi dalam pelajaran olah
							raga dan kegiatan ekstra kurikuler, baik di dalam maupun di luar
							sekolah kecuali ada permintaan resmi secara tertulis dari orang
							tua dan disetujui oleh pihak BTB School.
						</li>
						<li>
							Apabila dikemudian hari pihak sekolah menemukan bahwa siswa /
							siswi tersebut merupakan siswa / siswi speial needs ( Non
							Mainstream ), maka pihak sekolah dapat membatalkan hak sekolah
							siswa / siswi tersebut dan semua biaya enrollmen fee yang telah
							diterima oleh pihak sekolha tidak dapat dikembalikan.
						</li>
						<li>
							Siswa / siswi dari Grade 7 sampai Grade 12 wajib membawa buku dan
							laptop sesuai dengan jadwal pelajaran dan tidak diijinkan meminjam
							laptop dari siswa/siswi lain.
						</li>
						<li>
							Pendaftaran ulang untuk siswa / siswi yang akan naik ke jenjang
							berikutnya (misalnya : dari Kindergarten 2 naik ke Grade 1)
							dilakukan pad bulan September. Pendaftaran ulang untuk siswa /
							siswi yang bukan naik jenjang (misalnya : dari Grade 1 ke Grade 2)
							akan dilakukan pada bulan Februari.
						</li>
						<li>
							Siswa/siswi BTB School wajib mengikuti ujian Cambridge IGCSE di
							grade 10 sesuai dengan ketentuan jumlah minimum mata pelajaran
							yang ditentukan sekolah.
						</li>
						<li>
							BTB School hanya menyelenggarakan IB Diploma Programme untuk Grade
							11 dan Grade 12. Siswa/siswi BTB School diwajibkan untuk mengikuti
							IB Diploma Programme.
						</li>
						<li>
							Pihak sekolah berhak untuk membatalkan hak sekolah apabila ada
							siswa / siswi yang tidak dapat melaksanakan ketentuan yang berlaku
							di sekolah dan pihak sekolah tidak berkewajiban dan mengembalikan
							biaya apapun kepada orang tua murid.
						</li>
						<li>
							Orang tua murid menyatakan tidak keberatan apabila putra/putrinya
							diikutsertakan dalam program untuk mempromosikan sekolah baik
							melalui media promosi brosur, DVD, Koran dan media lainnya. Dan
							keikutsertaannya dalam kegiatan promosi tersebut tidak diberikan
							imbalan dalam bentuk apapun.
						</li>
						<li>
							Ornag tua murid mengetahui bahwa usaha jasa antarjemput siswa/i
							BTB School tidak terkait dengan manajemen dari BTB School, oleh
							karena itu segala hal yang terkait dengan antar - jemput siswa dan
							segala konsekuensinya menjadi tanggung jawab sepenuhnya orang tua
							murid.
						</li>
						<li>
							Segala kesalahan atau ketidaklengkapan informasi di dalam formulir
							ini adalah diluar tanggung jawab pihak BTB School.
						</li>
					</ol>
				</div>
				<div className="flex items-center">
					<div className="mr-2 text-xl">
						<FaRegCheckSquare />
					</div>
					<p>
						Saya telah membaca dan menyetujui seluruh peraturan dan persyaratan
						tersebut diatas.
					</p>
				</div>
			</div>
			<div className="flex justify-end">
				<ARDSignatureDisplay src={data?.ttdpage2 ?? data?.ttdpage1} />
			</div>
		</div>
	);
};

export default ARDTermAndCondition;
