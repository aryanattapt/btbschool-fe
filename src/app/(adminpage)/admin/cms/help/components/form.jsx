'use client'
import {
    Label,
    Textarea,
    TextInput,
} from "flowbite-react";

const Form = ({formChangeHandler, language, payload}) => {
    return <>
        <div className="mb-2 block">
            <div className="mb-2 block">
                <Label htmlFor="title" value={`Title (${language})`} />
            </div>
            <TextInput value={payload[`title[${language}]`]} id="title" name={`title[${language}]`} onChange={formChangeHandler}/>
        </div>
        <div className="mb-2 block">
            <div className="mb-2 block">
                <Label htmlFor="subtitle" value={`Sub Title (${language})`} />
            </div>
            <TextInput value={payload[`subtitle[${language}]`]} id="subtitle" name={`subtitle[${language}]`} onChange={formChangeHandler}/>
        </div>
        <div className="mb-2 block">
            <div className="mb-2 block">
                <Label htmlFor="description" value={`Description (${language})`} />
            </div>
            <Textarea value={payload[`description[${language}]`]} id="description" name={`description[${language}]`} required rows={4} onChange={formChangeHandler}/>
        </div>
        <div className="mb-2 block">
            <div className="mb-2 block">
                <Label htmlFor="registitle" value={`Judul Pendaftaran (${language})`} />
            </div>
            <TextInput value={payload[`registitle[${language}]`]} id="registitle" name={`registitle[${language}]`} onChange={formChangeHandler}/>
        </div>
        <div className="mb-2 block">
            <div className="mb-2 block">
                <Label htmlFor="faqtitle" value={`Judul F.A.Q (${language})`} />
            </div>
            <TextInput value={payload[`faqtitle[${language}]`]} id="faqtitle" name={`faqtitle[${language}]`} onChange={formChangeHandler}/>
        </div>
    </>
}

export default Form;