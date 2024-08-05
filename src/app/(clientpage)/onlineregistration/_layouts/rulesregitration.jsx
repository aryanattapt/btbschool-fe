"use client";
import { Checkbox, HR, Label, Radio, TextInput } from "flowbite-react";
import { useState } from "react";
import { CgEditBlackPoint } from "react-icons/cg";

const RulesRegistrationForm = ({ formChangeHandler, payload }) => {
  return (
    <>
      <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
        Rules and Requirements
      </div>

      <div className="text-black">
        <p>
          Dalam melengkapi formulir pendaftaran, calon siswa / siswi dan
          orangtua menyetujui peraturan dan persyaratan yang diberikan oleh
          pihak sekolah sebagai berikut :
        </p>
        <ol>
          <li>
            1. Siswa/ siswi diharapkan untuk setiap saat mengerti dan mematuhi
            peraturan dan ketetapan yang terdapat pada Handbook.
          </li>
          <li>
            2. Enrollment Fee dibayarkan paling lambat 3 (tiga) hari setelah
            pengumuman hasil test.
          </li>
          <li>
            3. Semua pembayaran wajib dilakukan melalui bank (pihak sekolah
            tidak menerima pembayaran tunai). Slip pembayaran dari bank wajib
            disimpan dengan baik dan merupakan tanda bukti pembayaran, karena
            pihak Sekolah tidak memberikan kwitansi bukti pembayaran.
          </li>
          <li>
            4.
            <ul>
              <li>
                <CgEditBlackPoint />
                <span>
                  <b>School Fee per term :</b>
                  <br />
                  Dibayarkan paling lambat setiap tanggal 5 term yang
                  bersangkutan, jika melewati tanggal tersebut, siswa tidak
                  diperkenankan untuk mengikuti kegiatan belajar mengajar
                  sebeium pembayaran dilakukan.
                </span>
              </li>
              <li>
                <CgEditBlackPoint />
                <span>
                  <b>
                    School Fee per bulan (dengan menggunakan BRl Auto Debit) :
                  </b>
                  <br />
                  Apabila pendebetan rekening gagal, maka diwajibkan untuk
                  melakukan pembayaran melalui transfer ke BRI virtual Account
                  masing-masing siswa/i sebelum tanggal 5 setiap bulannya
                  untuk menghindari penalty fee sebesar 10%. Batas waktu
                  pembayaran school fee + penalty fee adalah tiap akhir bulan
                  yang bersangkutan. Apabila pembayaran tidak dilakukan sesuai
                  dengan peraturan sekolah maka per tanggal 1 bulan berikutnya
                  siswa/i tidak dapat mengikuti kegiatan belajar
                  mengajar(skorsing).
                </span>
              </li>
            </ul>
          </li>
          <li>
            5. Pada saat pengambilan raport orang tua siswa / siswi diminta
            telah melunasi seluruh biaya administrasi.
          </li>
          <li>
            6. Siswa / siswi yang nilainya tidak cukup untuk naik kelas akan
            tinggal kelas.
          </li>
          <li>
            7. Segala macam biaya yang telah diterima pihak sekolah tidak
            dapat dikembalikan atau dipindah-tangankan dalam kondisi dan
            situasi apapun.
          </li>
          <li>
            8. Pihak sekolah berhak melibatkan siswa / siswi dalam pelajaran
            olah raga dan kegitan ekstra kurikuler, baik di dalam maupun di
            luar sekolah kecuali ada pemintaan resmi secara tertulis dari
            orang tua dan disetujui oleh pihak BTB School.
          </li>
          <li>
            9. Apabila dikemudian hari pihak sekolah menemukan bahwa siswa /
            siswi tersebut merupakan siswa / siswi special needs ( Non
            Mainstream ), maka pihak sekolah dapat membatalkan hak sekolah
            siswa / siswi tersebut dan semua biaya enrollment fee yang telah
            diterima oleh pihak sekolah tidak dapat dikembalikan.
          </li>
          <li>
            1o. Siswa / siswi dari Grade 7 sampai Grade 12 wajib membawa buku
            dan laptop sesuai dengan jadwal pelajaran dan tidak diijinkan
            meminjam laptop dari siswa/siswi lain.
          </li>
          <li>
            11. Pendaftaran ulang untuk siswa / siswi yang akan naik ke
            jenjang berikutnya (misalnya : dari Kindergarten 2 naik ke Grade
            1) dilakukan pada bulan September. Pendaftaran ulang untuk siswa /
            siswi yang bukan naik jenjang (misalnya : dari Grade 1 ke Grade 2)
            akan dilakukan pada bulan Februari.
          </li>
          <li>
            12. Siswa/siswi BTB School wajib mengikuti ujian Cambridge IGCSE
            di grade 10 sesuai dengan ketentuan jumlah minimum mata pelajaran
            yang ditentukan sekolah.
          </li>
          <li>
            13. BTB School hanya menyelenggarakan IB Diploma Programme untuk
            Grade 11 dan Grade 12. Siswa/siswi BTB School diwajibkan untuk
            mengikuti IB Diploma Programme.
          </li>
          <li>
            14. Pihak sekolah berhak untuk membatalkan hak sekolah apabila ada
            siswa / siswi yang tidak dapat melaksanakan ketentuan yang berlaku
            di sekolah dan pihak sekolah tidak berkewajiban mengembalikan
            biaya apapun kepada orang tua murid.
          </li>
          <li>
            15. Orang tua murid menyatakan tidak keberatan apabila
            putra/putrinya diikutsertakan dalam program untuk mempromosikan
            sekolah baik melalui media promosi brosur, DVD, Koran dan media
            lainnya. Dan keikutsertaannya dalam kegiatan promosi tersebut
            tidak diberikan imbalan dalam bentuk apapun.
          </li>
          <li>
            16. Orang tua murid mengetahui bahwa usaha jasa antarjemput
            siswa/i BTB School tidak terkait dengan manajemen dari BTB School,
            oleh karena itu segala hal yang terkait dengan antar - jemput
            siswa dan segala konsekuensinya menjadi tanggung jawab sepenuhnya
            orang tua murid.
          </li>
          <li>
            17. Segala kesalahan atau ketidaklengkapan informasi di dalam
            formulir ini adalah diluar tanggung jawab pihak BTB School.
          </li>
          <li>
            <Checkbox
              label="Saya telah membaca dan menyetujui seluruh peraturan dan persyaratan tersebut diatas."
              defaultChecked={true}
              className="text-black"
            />
          </li>
        </ol>
      </div>
    </>
  );
};

export default RulesRegistrationForm;
