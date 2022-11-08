export default function InputError({message,className}){
    return message ? <p className={`text-red-500 text-xs ` + className}>{message}</p> : null
}