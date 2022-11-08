import { useState } from "react";
import Checkbox from "./Components/Checkbox,";
import InputError from "./Components/InputError";
import InputSelect from "./Components/InputSelect";
import TextInput from "./Components/TextInput";
import InputLabel from "./Components/InputLabel";

const App = () => {
	const [data,setData] = useState({
		name : '',
		email : '',
		remember : '',
		category : ''
	});
	const [error,setError]  = useState({nameError : '' , emailError : ''})
	const [options,setOptions] = useState(['apple','banan','mango'])
	const onHandleChange = (event) => {
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		const {name} = event.target
		setData({
			...data,
			[name] : value
		});
	}

	const submit = (e) => {
		e.preventDefault();
		console.log('submit');
	}

	return (
		<div className="container  mx-auto mt-5">
			<form onSubmit={submit}>
				<div className="mb-4">
					<InputLabel forInput="Name" value="Name" />
					{/* //name */}
					<TextInput
						type="text"
						name="name"
						value={data.name}
						className="block mt-3 w-full px-3 py-2 bg-gray-100"
						autoComplete="name"
						isFocused={true}
						required={true}
						handelChange={onHandleChange}

					/>

					<InputError message={error.nameError} />
				</div>

				<div className="mb-4">
					<InputLabel forInput="Email" value="Email" />
					{/* //email */}
					<TextInput
						type="email"
						name="email"
						value={data.email}
						className="block mt-3 w-full px-3 py-2 bg-gray-100"
						autoComplete="email"
						isFocused={false}
						handelChange={onHandleChange}
					/>

					<InputError message={error.emailError} />
				</div>

				<div className="mb-4">
					<InputLabel forInput="category" value="Select Category" />
					{/* //email */}
					<InputSelect 
						name="category"
						options={options}
						handelChange={onHandleChange}
					/>

					{/* <InputError message={error.emailError} /> */}
				</div>

				<div className="mb-3">
					<div className="flex items-center">
						<Checkbox name="remember" value={data.remember} handelChange={onHandleChange}/>

						<span className="ml-2 text-gray-600 text-sm">Remember</span>
					</div>
				</div>

				<button type="submit" className="px-4 py-2 bg-black text-white mt-4">Submit</button>
			</form>
		</div>
	);
}
 
export default App;