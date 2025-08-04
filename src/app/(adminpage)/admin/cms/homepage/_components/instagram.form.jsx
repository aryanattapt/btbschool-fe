'use client'
import {
    Label,
    Textarea,
} from "flowbite-react";

const InstagramForm = ({formChangeHandler, language, payload}) => {
    return <>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="instagramtitle" value={`Title (${language})`} />
            </div>
            <Textarea value={payload[`instagramtitle[${language}]`]} id="instagramtitle" name={`instagramtitle[${language}]`} required rows={4} onChange={formChangeHandler}/>
        </div>
    </>
}

export default InstagramForm;