import React, { useEffect, useRef } from "react";
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({formChangeHandler, name, value}) => {
    const SignatureCanvasRef = useRef({});
    const handleClear = () => {
        SignatureCanvasRef.current.clear()
        formChangeHandler({
            "target": {
                "name": name,
                "value": "", 
                "type": "signaturepad"
            }
        });
    }

    useEffect(() => {
        SignatureCanvasRef.current.fromDataURL(value);
    }, []);

    const onEndHandler = () => {
        formChangeHandler({
            "target": {
                "name": name,
                "value": SignatureCanvasRef.current.getCanvas().toDataURL('image/png'), 
                "type": "signaturepad"
            }
        });
    };

    return(
        <div className="pr-10 md:pr-0 mt-20">
            <div style={{border:"2px solid black", width: 500, height: 200}}>
                <SignatureCanvas 
                    onEnd = {onEndHandler}
                    willReadFrequently = {true}
                    canvasProps={{width: 500, height: 200, className: 'sigCanvas', id:`${name}`, name:`${name}`}}
                    ref={SignatureCanvasRef}
                />
            </div>

            <br></br>
            <button style={{height:"30px",width:"60px", backgroundColor:"#00305E", color: "white"}} onClick={handleClear}>Clear</button>
        </div>
    )
}
export default SignaturePad;