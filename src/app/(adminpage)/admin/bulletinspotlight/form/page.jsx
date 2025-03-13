"use client";
import {
  Label,
  FileInput,
  Button,
  Spinner,
  TextInput,
  Select,
  Radio,
} from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import NavbarSidebarLayout from "../../_layouts/navigation";
import {
  GetConfig,
  SubmitConfig,
} from "../../../../../../services/config.service";
import { UploadAttachment } from "../../../../../../services/attachment.service";
import Swal from "sweetalert2";
import Loader from "../../../../_components/loader";
import { checkPermission } from "../../../../../../services/auth.service";

const initialPayload = {
  school: "",
};

const BulletinSpotlightForm = () => {
  const fileInputRef = useRef(null);
  const [payload, setPayload] = useState({ ...initialPayload });
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(null);
  const [school, setSchool] = useState([]);

  useEffect(() => {
    fetchData(fetchBulletinSpotlight);
  }, []);

  const fetchData = async (callback) => {
    setIsLoading(true);
    try {
      await checkPermission("manage_bulletin");
      setIsAuthorized(true);
      await callback();
    } catch (error) {
      console.log(error);
      if (error.status != "401") {
        try {
          await callback();
        } catch (error) {
          console.log(error);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBulletinSpotlight = async () => {
    try {
      const res = await GetConfig("general", { type: "generalsetting" });
      if (res.length > 0) {
        setSchool(res[0]["contact"].map((data) => data["buildingName"]).sort());
      }
    } catch (error) {}
    // if (id) {
    //   try {
    //     const res = await GetConfig("bulletinspotlight", { _id: id });
    //     setPayload(res[0]);
    //   } catch (err) {
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       title: "Error Notification!",
    //       text: err,
    //       icon: "error",
    //     });
    //   }
    // }
  };

  const clearFile = (name) => {
    fileInputRef.current.value = null;
    setPayload((prevState) => ({
      ...prevState,
      [name]: null,
    }));
  };

  const formChangeHandler = (e) => {
    const { name, value, type, files } = e.target;
    if (type == "file") {
      const validFiles = [];
      const maxFileSize = 20 * 1024 * 1024;
      Object.keys(files).forEach((key) => {
        const file = files[key];
        if (file.type === "application/pdf") {
          if (file.size <= maxFileSize) {
            validFiles.push(file);
          } else {
            clearFile(name);
            alert(`${file.name} exceeds the maximum size of 20 MB.`);
          }
        } else {
          clearFile(name);
          alert(`${file.name} is not a valid PDF file.`);
        }
      });

      if (validFiles.length > 0) {
        setPayload((prevState) => ({
          ...prevState,
          [name]: prevState[name]
            ? [...prevState[name], ...validFiles]
            : validFiles,
        }));
      }
    } else if (type == "checkbox") {
      if (e.target.checked) {
        setPayload((prevState) => ({
          ...prevState,
          [name]: prevState[name] ? [...prevState[name], value] : [value],
        }));
      } else {
        setPayload((prevState) => ({
          ...prevState,
          [name]: prevState[name].filter((val) => val !== value),
        }));
      }
    } else {
      setPayload((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onFormChange = (val, prop) => {
    setPayload((prev) => ({ ...prev, [prop]: val }));
  };

  const swalError = (label) => {
    return Swal.fire({
      allowOutsideClick: false,
      title: "Submit Notification!",
      text: label,
      icon: "error",
    });
  };

  const submitHandler = async (e) => {
    try {
      setIsLoading(true);
      const finalPayload = { ...payload, date: new Date() };
      if (!payload.school) {
        return swalError("Please fill School");
      }
      if (!payload.type) {
        return swalError("Please fill Type");
      }
      if (!payload.title) {
        return swalError("Please fill Title");
      }
      if (!payload.attachment) {
        return swalError("Please fill Attachment");
      }

      try {
        var formData = new FormData();
        payload?.attachment?.map((val) => {
          formData.append("attachment", val);
        });

        const attachmentResult = await UploadAttachment(
          "bulletinNews",
          formData
        );
        if (attachmentResult && attachmentResult.data) {
          finalPayload.attachment = attachmentResult.data;
        }
      } catch (error) {
        console.log(error);
      }

      await SubmitConfig("bulletinspotlight", [finalPayload]).then((res) => {
        setPayload({ ...initialPayload });
      });
      // window.location.href = '/admin/bulletinspotlight';
    } catch (error) {
      Swal.fire({
        allowOutsideClick: false,
        title: "Submit Notification!",
        text: error,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  } else
    return (
      <NavbarSidebarLayout>
        {isAuthorized ? (
          <div className="max-w-full grid gap-3 md:px-8">
            <div className=" flex justify-between">
              <div className="text-[35px] text-[#00305E] font-bold">
                Bulletin Form
              </div>
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="school" value="Pilih Sekolah" />
              </div>
              <Select
                id="school"
                onChange={(e) => onFormChange(e.target.value, "school")}
                required
                value={payload?.school}
              >
                <option disabled value={""}>
                  Pilih Sekolah
                </option>
                {school.map((res) => (
                  <option>{res}</option>
                ))}
              </Select>
            </div>
            <div className="my-2">
              <fieldset className="flex max-w-md flex-col gap-4">
                <Label value="Pilih Tipe File" />
                <div
                  onClick={() => onFormChange("Bulletin", "type")}
                  className="w-fit flex items-center gap-2"
                >
                  <Radio
                    value="Bulletin"
                    checked={payload?.["type"] === "Bulletin"}
                  />
                  <Label htmlFor="bulletin">Bulletin</Label>
                </div>
                <div
                  onClick={() => onFormChange("News Letter", "type")}
                  className="w-fit flex items-center gap-2"
                >
                  <Radio
                    value="News Letter"
                    checked={payload?.["type"] === "News Letter"}
                  />
                  <Label htmlFor="newsLetter">News Letter</Label>
                </div>
              </fieldset>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bulletintitle" value="Bulletin Title" />
              </div>
              <TextInput
                value={payload.title || ""}
                id="title"
                name="title"
                type="text"
                autoFocus={true}
                onChange={formChangeHandler}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="attachment" value="Unggah File" />
              </div>
              <FileInput
                accept=".pdf"
                ref={fileInputRef}
                id="attachment"
                name="attachment"
                helperText="Ukuran Maksimum 20MB. Format PDF"
                onChange={formChangeHandler}
              />
            </div>
            <div className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75">
              <div className="flex">
                <div className="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                  <Button
                    type="submit"
                    id="btnSaveAndSend"
                    name="btnSaveAndSend"
                    className="w-full lg:w-auto"
                    disabled={isLoading}
                    onClick={submitHandler}
                  >
                    {isLoading ? (
                      <>
                        <Spinner
                          aria-label="Spinner button example"
                          size="sm"
                        />
                        <span className="pl-3">Please Wait...</span>
                      </>
                    ) : (
                      <>Save</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Unauthorized</div>
        )}
      </NavbarSidebarLayout>
    );
};

const BulletinSpotlightFormPage = () => {
  return (
    <Suspense>
      <BulletinSpotlightForm />
    </Suspense>
  );
};

export default BulletinSpotlightFormPage;
