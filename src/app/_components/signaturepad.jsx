import React, { useRef } from "react";
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({formChangeHandler, name}) => {
    const SignatureCanvasRef = useRef({});
    const handleClear = () => {
        SignatureCanvasRef.current.clear()
    }

    const onEndHandler = () => {
        formChangeHandler({
            "target": {
                "name": name,
                "value": SignatureCanvasRef.current.getTrimmedCanvas().toDataURL('image/png'), 
                "type": "signaturepad"
            }
        });
    };

    return(
        <div className="pr-10 md:pr-0">
            <div style={{border:"2px solid black", width: 500, height: 200}}>
                <SignatureCanvas 
                    onEnd = {onEndHandler}
                    willReadFrequently = {true}
                    canvasProps={{width: 500, height: 200, className: 'sigCanvas', id:`${name}`, name:`${name}`}}
                    ref={SignatureCanvasRef}
                />
            </div>

            <br></br>
            <button style={{height:"30px",width:"60px"}} onClick={handleClear}>Clear</button>
        </div>
    )
}
export default SignaturePad;