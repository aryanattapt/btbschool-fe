'use client'
import { 
    FileInput, 
    HR, 
    Label 
} from "flowbite-react";

const AttachmentForm = ({formChangeHandler}) => {
    return <>
        <div>
            <HR.Text text="Upload Attachment"/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="birthcertificateattachment" value="Copy Of Birth Certificate" />
            </div>
            <FileInput accept="application/pdf" multiple={true} id="birthcertificateattachment" name="birthcertificateattachment" helperText="Ukuran Maksimum 2MB. Format PDF (.pdf)" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="familycardattachment" value="Copy Of Family Card" />
            </div>
            <FileInput accept="application/pdf" multiple={true} id="familycardattachment" name="familycardattachment" helperText="Ukuran Maksimum 2MB. Format PDF (.pdf)" onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="reportcardattachment" value="Copy Of Report Card From Previous School" />
            </div>
            <FileInput accept="application/pdf" multiple={true} id="reportcardattachment" name="reportcardattachment" helperText="Ukuran Maksimum 2MB. Format PDF (.pdf)" onChange={formChangeHandler}/>
        </div>
    </>
}

export default AttachmentForm;