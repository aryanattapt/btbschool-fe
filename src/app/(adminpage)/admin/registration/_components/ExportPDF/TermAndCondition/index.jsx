import React from "react";
import ARDExportPDFPageContainer from "../_components/PageContainer";
import ARDExportPDFHeader from "../_components/Header";
import { StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import { FaRegCircle } from "react-icons/fa";
import ChecklistIcon from "../_components/ChecklistIcon";
import ARDExportPDFSignatureDisplay from "../_components/SignatureDisplay";

const styles = StyleSheet.create({
	container: {
		fontSize: 9,
		marginTop: 12,
	},
	listContainer: {
		display: "flex",
		flexDirection: "row",
		marginLeft: 12,
		marginTop: 3,
	},
	number: {
		width: 20,
	},
	unOrderContainer: {
		marginLeft: 24,
	},
});

const ARDExportTermAndCondition = ({ data }) => {
	return (
		<ARDExportPDFPageContainer>
			<ARDExportPDFHeader title={"Peraturan dan Persyaratan BTB School"} />
			<View style={styles.container}>
				<Text>
					Dalam melengkapi formulir pendaftaran, calon siswa / siswi dan
					orangtua menyetujui peraturan dan persyaratan yang diberikan oleh
					pihak sekolah sebagai berikut :
				</Text>
				<OrderList
					index="1."
					value="Siswa/ siswi diharapkan untuk setiap saat mengerti dan mematuhi peraturan dan ketetapan yang terdapat pada Handbook."
				/>
				<OrderList
					index="2."
					value="Enrollment Fee dibayarkan paling lambat 3 (tiga) hari setelah pengumuman hasil test."
				/>
				<OrderList
					index="3."
					value="Semua pembayaran wajib dilakukan melalui bank (pihak sekolah tidak menerima pembayaran tunai). Slip pembayaran dari bank wajib disimpan dengan baik dan merupakan tanda bukti pembayaran, karena pihak Sekolah tidak memberikan kwitansi bukti pembayaran."
				/>
				<View style={styles.listContainer}>
					<Text style={styles.number}>4. </Text>
					<View style={styles.unOrderContainer}>
						<Text>School Fee per term :</Text>
						<Text>
							Dibayarkan paling lambat setiap tanggal 5 term yang bersangkutan,
							jika melewati tanggal tersebut, siswa tidak diperkenankan untuk
							mengikuti kegiatan belajar mengajar sebeium pembayaran dilakukan.
						</Text>
						<Text style={{ marginTop: 6 }}>
							School Fee per bulan (dengan menggunakan BRl Auto Debit) :
						</Text>
						<Text>
							Apabila pendebetan rekening gagal, maka diwajibkan untuk melakukan
							pembayaran melalui transfer ke BRI virtual Account masing-masing
							siswa/i sebelum tanggal 5 setiap bulannya untuk menghindari
							penalty fee sebesar 10%. Batas waktu pembayaran school fee +
							penalty fee adalah tiap akhir bulan yang bersangkutan. Apabila
							pembayaran tidak dilakukan sesuai dengan peraturan sekolah maka
							per tanggal 1 bulan berikutnya siswa/i tidak dapat mengikuti
							kegiatan belajar mengajar(skorsing).
						</Text>
					</View>
				</View>
				<OrderList
					index="5."
					value="Pada saat pengambilan raport orang tua siswa / siswi diminta telah melunasi seluruh biaya administrasi."
				/>
				<OrderList
					index="6."
					value="Siswa / siswi yang nilainya tidak cukup untuk naik kelas akan tinggal kelas."
				/>
				<OrderList
					index="7."
					value="Segala macam biaya yang telah diterima pihak sekolah tidak dapat dikembalikan atau dipindah-tangankan dalam kondisi dan situasi apapun."
				/>
				<OrderList
					index="8."
					value="Pihak sekolah berhak melibatkan siswa / siswi dalam pelajaran olah raga dan kegitan ekstra kurikuler, baik di dalam maupun di luar sekolah kecuali ada pemintaan resmi secara tertulis dari orang tua dan disetujui oleh pihak BTB School."
				/>
				<OrderList
					index="9."
					value="Apabila dikemudian hari pihak sekolah menemukan bahwa siswa / siswi tersebut merupakan siswa / siswi special needs ( Non Mainstream ), maka pihak sekolah dapat membatalkan hak sekolah siswa / siswi tersebut dan semua biaya enrollment fee yang telah diterima oleh pihak sekolah tidak dapat dikembalikan."
				/>
				<OrderList
					index="10."
					value="Siswa / siswi dari Grade 7 sampai Grade 12 wajib membawa buku dan laptop sesuai dengan jadwal pelajaran dan tidak diijinkan meminjam laptop dari siswa/siswi lain."
				/>
				<OrderList
					index="11."
					value="Pendaftaran ulang untuk siswa / siswi yang akan naik ke jenjang berikutnya (misalnya : dari Kindergarten 2 naik ke Grade 1) dilakukan pada bulan September. Pendaftaran ulang untuk siswa / siswi yang bukan naik jenjang (misalnya : dari Grade 1 ke Grade 2) akan dilakukan pada bulan Februari."
				/>
				<OrderList
					index="12."
					value="Siswa/siswi BTB School wajib mengikuti ujian Cambridge IGCSE di grade 10 sesuai dengan ketentuan jumlah minimum mata pelajaran yang ditentukan sekolah."
				/>
				<OrderList
					index="13."
					value="BTB School hanya menyelenggarakan IB Diploma Programme untuk Grade 11 dan Grade 12. Siswa/siswi BTB School diwajibkan untuk mengikuti IB Diploma Programme."
				/>
				<OrderList
					index="14."
					value="Pihak sekolah berhak untuk membatalkan hak sekolah apabila ada siswa / siswi yang tidak dapat melaksanakan ketentuan yang berlaku di sekolah dan pihak sekolah tidak berkewajiban mengembalikan biaya apapun kepada orang tua murid."
				/>
				<OrderList
					index="15."
					value="Orang tua murid menyatakan tidak keberatan apabila putra/putrinya diikutsertakan dalam program untuk mempromosikan sekolah baik melalui media promosi brosur, DVD, Koran dan media lainnya. Dan keikutsertaannya dalam kegiatan promosi tersebut tidak diberikan imbalan dalam bentuk apapun."
				/>
				<OrderList
					index="16."
					value="Orang tua murid mengetahui bahwa usaha jasa antarjemput siswa/i BTB School tidak terkait dengan manajemen dari BTB School, oleh karena itu segala hal yang terkait dengan antar - jemput siswa dan segala konsekuensinya menjadi tanggung jawab sepenuhnya orang tua murid."
				/>
				<OrderList
					index="17."
					value="Segala kesalahan atau ketidaklengkapan informasi di dalam formulir ini adalah diluar tanggung jawab pihak BTB School."
				/>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						marginTop: 8,
						alignItems: "center",
					}}
				>
					<ChecklistIcon checked />
					<Text style={{ marginLeft: 4 }}>
						Saya telah membaca dan menyetujui seluruh peraturan dan persyaratan
						tersebut diatas.
					</Text>
				</View>
				<View style={{ width: 100, marginTop: 8 }}>
					<ARDExportPDFSignatureDisplay data={data} />
				</View>
			</View>
		</ARDExportPDFPageContainer>
	);
};

const OrderList = ({ index = "", value = "" }) => {
	return (
		<View style={styles.listContainer}>
			<Text style={styles.number}>{index}</Text>
			<Text>{value}</Text>
		</View>
	);
};

export default ARDExportTermAndCondition;
