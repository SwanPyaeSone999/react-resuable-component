import { useEffect, useRef } from "react";

const TextInput = ({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handelChange,
    }) => {
        
    const input = useRef();

    useEffect(() => {
        if(isFocused){
            input.current.focus();
        }
    },[])  

    return ( 
        <div>
            <input 
                type={type}
                name={name}
                value={value}
                className={`
                    border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handelChange(e)}
            />
        </div>
     );
}
 
export default TextInput;