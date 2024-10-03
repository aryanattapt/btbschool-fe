'use client'
import {
    Label,
    Textarea,
} from "flowbite-react";

const HomePageGradeForm = ({formChangeHandler, language, payload}) => {
    return <>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="smalltitle" value={`Small Title (${language})`} />
            </div>
            <Textarea value={payload[`smalltitle[${language}]`]} id="smalltitle" name={`smalltitle[${language}]`} required rows={4} onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="title" value={`Title (${language})`} />
            </div>
            <Textarea value={payload[`title[${language}]`]} id="title" name={`title[${language}]`} required rows={4} onChange={formChangeHandler}/>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="desc" value={`Description (${language})`} />
            </div>
            <Textarea value={payload[`desc[${language}]`]} id="desc" name={`desc[${language}]`} required rows={4} onChange={formChangeHandler}/>
        </div>
    </>
}

export default HomePageGradeForm;