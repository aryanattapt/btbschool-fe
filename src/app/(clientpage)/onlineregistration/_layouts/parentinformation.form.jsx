"use client";
import {
  Datepicker,
  HR,
  Label,
  Radio,
  Select,
  TextInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";

const ParentsInformationForm = ({
  formChangeHandler,
  datePickerHandler,
  payload,
}) => {
  return (
    <>
      <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
        Parent / Guardian Information
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fathername" value="Father's Name" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.fathername || ""}
          id="fathername"
          name="fathername"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherbirthplace" value="Birth Place" />
        </div>
        <Select
          className="w-full pr-10 md:pr-0"
          value={payload.fatherbirthplace || ""}
          id="fatherbirthplace"
          name="fatherbirthplace"
          onChange={formChangeHandler}
        >
          <option value="">Select Birth Place</option>
          <option value="aceh">Aceh</option>
          <option value="bali">Bali</option>
          <option value="banten">Banten</option>
          <option value="bengkulu">Bengkulu</option>
          <option value="gorontalo">Gorontalo</option>
          <option value="jakarta">Jakarta</option>
          <option value="jambi">Jambi</option>
          <option value="jawa barat">Jawa Barat</option>
          <option value="jawa tengah">Jawa Tengah</option>
          <option value="jawa timur">Jawa Timur</option>
          <option value="kalimantan barat">Kalimantan Barat</option>
          <option value="kalimantan tengah">Kalimantan Tengah</option>
          <option value="kalimantan selatan">Kalimantan Selatan</option>
          <option value="kalimantan timur">Kalimantan Timur</option>
          <option value="kepulauan bangka belitung">Kepulauan Bangka Belitung</option>
          <option value="kepulauan riau">Kepulauan Riau</option>
          <option value="maluku">Maluku</option>
          <option value="maluku utara">Maluku Utara</option>
          <option value="nusa tenggara barat">Nusa Tenggara Barat</option>
          <option value="nusa tenggara timur">Nusa Tenggara Timur</option>
          <option value="papua">Papua</option>
          <option value="papua barat">Papua Barat</option>
          <option value="riau">Riau</option>
          <option value="sulawesi barat">Sulawesi Barat</option>
          <option value="sulawesi selatan">Sulawesi Selatan</option>
          <option value="sulawesi tengah">Sulawesi Tengah</option>
          <option value="sulawesi tenggara">Sulawesi Tenggara</option>
          <option value="sulawesi utara">Sulawesi Utara</option>
          <option value="sumatera barat">Sumatera Barat</option>
          <option value="sumatera selatan">Sumatera Selatan</option>
          <option value="sumatera utara">Sumatera Utara</option>
        </Select>
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherbirthdate" value="Birth Date" />
        </div>
        <Datepicker
          className="w-full pr-10 md:pr-0"
          value={payload.fatherbirthdate || ""}
          id="fatherbirthdate"
          name="fatherbirthdate"
          language="en-id"
          showClearButton={false}
          showTodayButton={false}
          onSelectedDateChanged={(date) =>
            datePickerHandler("fatherbirthdate", date)
          }
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatherphoneno" value="Phone No" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.fatherphoneno || ""}
          id="fatherphoneno"
          name="fatherphoneno"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fatheremail" value="Email" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.fatheremail || ""}
          icon={HiMail}
          type="email"
          id="fatheremail"
          name="fatheremail"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="fathermaritalstatus" value="Marital Status" />
        </div>
        <div
          className="w-full pr-10 md:pr-0 flex items-center gap-2"
          id="fathermaritalstatus"
        >
          <Radio
            checked={payload.fathermaritalstatus == "Married"}
            id="marriedfather"
            name="fathermaritalstatus"
            value="Married"
            onChange={formChangeHandler}
          />
          <Label htmlFor="marriedfather">Married</Label>
          <Radio
            checked={payload.fathermaritalstatus == "Divorced"}
            id="divorcedfather"
            name="fathermaritalstatus"
            value="Divorced"
            onChange={formChangeHandler}
          />
          <Label htmlFor="divorcedfather">Divorced</Label>
        </div>
      </div>
        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="fatheroccupation" value="father occupation" />
          </div>
          <TextInput
            className="w-full pr-10 md:pr-0"
            value={payload.fatheroccupation || ""}
            type="text"
            id="fatheroccupation"
            name="fatheroccupation"
            onChange={formChangeHandler}
          />
        </div>

        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="fathercompanyname" value="Company Name" />
          </div>
          <TextInput
            className="w-full pr-10 md:pr-0"
            value={payload.fathercompanyname || ""}
            type="text"
            id="fathercompanyname"
            name="fathercompanyname"
            onChange={formChangeHandler}
          />
        </div>

        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="fatherbusinessAddress" value="Business Address" />
          </div>
          <TextInput
            className="w-full pr-10 md:pr-0"
            value={payload.fatherbusinessAddress || ""}
            type="text"
            id="fatherbusinessAddress"
            name="fatherbusinessAddress"
            onChange={formChangeHandler}
          />
        </div>

        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="fathertelephone" value="Telp" />
          </div>
          <TextInput
            className="w-full pr-10 md:pr-0"
            value={payload.fathertelephone || ""}
            type="text"
            id="fathertelephone"
            name="fathertelephone"
            onChange={formChangeHandler}
          />
        </div>

        <div className="md:inline-flex">
          <div className="mb-2 block w-72">
            <Label htmlFor="fatherfax" value="father fax" />
          </div>
          <TextInput
            className="w-full pr-10 md:pr-0"
            value={payload.fatherfax || ""}
            type="text"
            id="fatherfax"
            name="fatherfax"
            onChange={formChangeHandler}
          />
        </div>

      <div>
        <HR />
      </div>
      
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="mothername" value="Mother's Name" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.mothername || ""}
          id="mothername"
          name="mothername"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherbirthplace" value="Birth Place" />
        </div>
        <Select
          className="w-full pr-10 md:pr-0"
          value={payload.motherbirthplace || ""}
          id="motherbirthplace"
          name="motherbirthplace"
          onChange={formChangeHandler}
        >
          <option value="">Select Birth Place</option>
          <option value="aceh">Aceh</option>
          <option value="bali">Bali</option>
          <option value="banten">Banten</option>
          <option value="bengkulu">Bengkulu</option>
          <option value="gorontalo">Gorontalo</option>
          <option value="jakarta">Jakarta</option>
          <option value="jambi">Jambi</option>
          <option value="jawa barat">Jawa Barat</option>
          <option value="jawa tengah">Jawa Tengah</option>
          <option value="jawa timur">Jawa Timur</option>
          <option value="kalimantan barat">Kalimantan Barat</option>
          <option value="kalimantan tengah">Kalimantan Tengah</option>
          <option value="kalimantan selatan">Kalimantan Selatan</option>
          <option value="kalimantan timur">Kalimantan Timur</option>
          <option value="kepulauan bangka belitung">Kepulauan Bangka Belitung</option>
          <option value="kepulauan riau">Kepulauan Riau</option>
          <option value="maluku">Maluku</option>
          <option value="maluku utara">Maluku Utara</option>
          <option value="nusa tenggara barat">Nusa Tenggara Barat</option>
          <option value="nusa tenggara timur">Nusa Tenggara Timur</option>
          <option value="papua">Papua</option>
          <option value="papua barat">Papua Barat</option>
          <option value="riau">Riau</option>
          <option value="sulawesi barat">Sulawesi Barat</option>
          <option value="sulawesi selatan">Sulawesi Selatan</option>
          <option value="sulawesi tengah">Sulawesi Tengah</option>
          <option value="sulawesi tenggara">Sulawesi Tenggara</option>
          <option value="sulawesi utara">Sulawesi Utara</option>
          <option value="sumatera barat">Sumatera Barat</option>
          <option value="sumatera selatan">Sumatera Selatan</option>
          <option value="sumatera utara">Sumatera Utara</option>
        </Select>
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherbirthdate" value="Birth Date" />
        </div>
        <Datepicker
          className="w-full pr-10 md:pr-0"
          value={payload.motherbirthdate || ""}
          id="motherbirthdate"
          name="motherbirthdate"
          language="en-id"
          showClearButton={false}
          showTodayButton={false}
          onSelectedDateChanged={(date) =>
            datePickerHandler("motherbirthdate", date)
          }
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motherphoneno" value="Phone No" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.motherphoneno || ""}
          id="motherphoneno"
          name="motherphoneno"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="motheremail" value="Email" />
        </div>
        <TextInput
          className="w-full pr-10 md:pr-0"
          value={payload.motheremail || ""}
          icon={HiMail}
          id="motheremail"
          name="motheremail"
          type="email"
          onChange={formChangeHandler}
        />
      </div>
      <div className="md:inline-flex">
        <div className="mb-2 block w-72">
          <Label htmlFor="mothermaritalstatus" value="Marital Status" />
        </div>
        <div
          className="w-full pr-10 md:pr-0 flex items-center gap-2"
          id="mothermaritalstatus"
        >
          <Radio
            checked={payload.mothermaritalstatus == "Married"}
            id="marriedmother"
            name="mothermaritalstatus"
            value="Married"
            onChange={formChangeHandler}
          />
          <Label htmlFor="marriedmother">Married</Label>
          <Radio
            checked={payload.mothermaritalstatus == "Divorced"}
            id="divorcedmother"
            name="mothermaritalstatus"
            value="Divorced"
            onChange={formChangeHandler}
          />
          <Label htmlFor="divorcedmother">Divorced</Label>
        </div>
      </div>
      <div className="md:inline-flex">
  <div className="mb-2 block w-72">
    <Label htmlFor="motheroccupation" value="mother occupation" />
  </div>
  <TextInput
    className="w-full pr-10 md:pr-0"
    value={payload.motheroccupation || ""}
    type="text"
    id="motheroccupation"
    name="motheroccupation"
    onChange={formChangeHandler}
  />
</div>

<div className="md:inline-flex">
  <div className="mb-2 block w-72">
    <Label htmlFor="mothercompanyname" value="Company Name" />
  </div>
  <TextInput
    className="w-full pr-10 md:pr-0"
    value={payload.mothercompanyname || ""}
    type="text"
    id="mothercompanyname"
    name="mothercompanyname"
    onChange={formChangeHandler}
  />
</div>

<div className="md:inline-flex">
  <div className="mb-2 block w-72">
    <Label htmlFor="motherbusinessAddress" value="Business Address" />
  </div>
  <TextInput
    className="w-full pr-10 md:pr-0"
    value={payload.motherbusinessAddress || ""}
    type="text"
    id="motherbusinessAddress"
    name="motherbusinessAddress"
    onChange={formChangeHandler}
  />
</div>

<div className="md:inline-flex">
  <div className="mb-2 block w-72">
    <Label htmlFor="mothertelephone" value="Telp" />
  </div>
  <TextInput
    className="w-full pr-10 md:pr-0"
    value={payload.mothertelephone || ""}
    type="text"
    id="mothertelephone"
    name="mothertelephone"
    onChange={formChangeHandler}
  />
</div>

<div className="md:inline-flex">
  <div className="mb-2 block w-72">
    <Label htmlFor="motherfax" value="mother fax" />
  </div>
  <TextInput
    className="w-full pr-10 md:pr-0"
    value={payload.motherfax || ""}
    type="text"
    id="motherfax"
    name="motherfax"
    onChange={formChangeHandler}
  />
</div>

    </>
  );
};

export default ParentsInformationForm;
