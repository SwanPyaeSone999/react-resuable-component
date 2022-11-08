const InputLabel = ({forInput,value,className,children}) => {
    return ( 
        <div>
            <label htmlFor={forInput} className={`block text-sm font-medium text-gray-700 ` + className}>
                {value ? value : children}
            </label> 
        </div>
     );
}
 
export default InputLabel;