export default function InputSelect({name,options,handelChange}){
    return (
        <select 
            name={name} 
            className="mt-3 w-full block px-2 py-2 bg-gray-100 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            onChange={(e) => handelChange(e)} 
        >
            <option disabled>Select One Category</option>
            {options?.map((option,i) => (
                <option key={i} value={option}>{option}</option>
            ))}
        </select>
       
    )
}