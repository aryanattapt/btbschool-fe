'use client'
import { 
    FileInput, 
    HR, 
    Label 
} from "flowbite-react";
import { forwardRef } from "react";

const AttachmentForm = forwardRef(({formChangeHandler}, ref) => {
    return <>
        <div className="mt-10 w-fit font-semibold text-[15px] text-[#00305E] border-b-8 border-b border-[#EF802B]">
            Upload Attachment
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="birthcertificateattachment" value="Copy Of Birth Certificate" />
            </div>
            <FileInput ref={ref.birthcertificateattachment} accept="application/pdf" multiple={true} id="birthcertificateattachment" name="birthcertificateattachment" helperText="Ukuran Maksimum 2MB. Format PDF (.pdf)" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="familycardattachment" value="Copy Of Family Card" />
            </div>
            <FileInput ref={ref.familycardattachment} accept="application/pdf" multiple={true} id="familycardattachment" name="familycardattachment" helperText="Ukuran Maksimum 2MB. Format PDF (.pdf)" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="reportcardattachment" value="Copy Of Report Card From Previous School" />
            </div>
            <FileInput ref={ref.reportcardattachment} accept="application/pdf" multiple={true} id="reportcardattachment" name="reportcardattachment" helperText="Ukuran Maksimum 2MB. Format PDF (.pdf)" onChange={formChangeHandler}/>
        </div>
    </>
})

export default AttachmentForm;