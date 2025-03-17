import React, { useEffect } from "react";
import FieldTitle from "../../_components/FieldTitle";
import countries from "world-countries";
import AlumniAutocomplete from "./Autocomplete";
import AddUnivFileBtn from "./AddUnivFileBtn";
import UnivPreviewer from "./UnivPreviewer";
import { Button } from "flowbite-react";

const CMSRegionMap = ({ alumniPayload, setAlumniPayload }) => {
  const onChangeRegion = (country, index) => {
    const updatedPayload = { ...alumniPayload };
    if (!updatedPayload.regionMap) updatedPayload.regionMap = [];
    updatedPayload.regionMap[index] = {
      latitude: country.latlng[0],
      longitude: country.latlng[1],
      icon: `https://hatscripts.github.io/circle-flags/flags/${country.cca2.toLowerCase()}.svg`,
      title: country.name.common,
      attachment: [],
    };
    setAlumniPayload(updatedPayload);
  };

  const onAddRegion = () => {
    const updatedPayload = { ...alumniPayload };
    if (!updatedPayload.regionMap) updatedPayload.regionMap = [];
    updatedPayload.regionMap.push({
      latitude: "",
      longitude: "",
      icon: "",
      title: "",
      attachment: [],
    });
    setAlumniPayload(updatedPayload);
  };

  const onAddAttachment = (file, index) => {
    if (file) {
      const updatedPayload = { ...alumniPayload };
      updatedPayload.regionMap[index].attachment.push(file);
      setAlumniPayload({ ...updatedPayload });
    }
  };

  const onDeleteRegion = (index) => {
    const updatedPayload = { ...alumniPayload };
    updatedPayload.regionMap.splice(index, 1);
    setAlumniPayload(updatedPayload);
  };

  const onDeleteUniv = (index, attIdx) => {
    const updatedPayload = { ...alumniPayload };
    updatedPayload.regionMap[index].attachment.splice(attIdx, 1);
    setAlumniPayload(updatedPayload);
  };

  return (
    <div>
      <FieldTitle>List Negara</FieldTitle>
      <table class="bg-white table-fixed w-full border-collapse border border-gray-300">
        <thead className="bg-[#FAFAFB]">
          <tr>
            <TH className="w-80 border border-gray-300 px-4 py-2">Negara</TH>
            <TH className="w-full border border-gray-300 px-4 py-2">
              Universitas
            </TH>
            <TH className="w-44 border border-gray-300 px-4 py-2">Action</TH>
          </tr>
        </thead>
        <tbody>
          {alumniPayload?.regionMap?.map((res, index) => (
            <tr key={index}>
              <TD
                className={`w-80 flex ${
                  index > 0 ? "border-t-[1px]" : "border-t-0"
                } border-b-0 border-r-0 border-l-0 border`}
              >
                <AlumniAutocomplete
                  options={countries}
                  onChange={(val) => onChangeRegion(val, index)}
                  value={res?.title ?? ""}
                />
              </TD>
              <TD className="w-full">
                <div className="flex flex-wrap gap-x-6 gap-y-2 p-4">
                  {res.attachment.length > 0 &&
                    res.attachment.map((attach, attIdx) => (
                      <div>
                        <UnivPreviewer
                          file={attach}
                          onDelete={() => onDeleteUniv(index, attIdx)}
                        />
                      </div>
                    ))}
                </div>
              </TD>
              <TD className="w-44">
                <AddUnivFileBtn
                  onFileSelect={(file) => onAddAttachment(file, index)}
                  onDelete={() => onDeleteRegion(index)}
                />
              </TD>
            </tr>
          ))}
        </tbody>
      </table>

      <Button
        id="btnAddRegion"
        name="btnAddRegion"
        className="w-full md:w-auto mt-3"
        onClick={onAddRegion}
        color={"success"}
      >
        Tambah
      </Button>
    </div>
  );
};

const TH = ({ className = "", children }) => {
  return (
    <th className={`border border-gray-300 px-4 py-2 ${className}`}>
      {children}
    </th>
  );
};
const TD = ({ className = "", children }) => {
  return (
    <td className={`border border-gray-300 px-4 py-2 ${className}`}>
      {children}
    </td>
  );
};

export default CMSRegionMap;
