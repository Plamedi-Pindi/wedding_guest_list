import type React from "react"

//  Import Images
import img from "../../assets/items/Group.png"
import img1 from "../../assets/items/Group-1.png"
import img3 from "../../assets/items/Group-3.png"
import img6 from "../../assets/items/Group-6.png"

// Import Hooks
import { useState } from "react"

// Import Navigate
import { useNavigate } from "react-router-dom"


const LoginPage: React.FC = () => {
    const [form, setForm] = useState({ email: '', senha: '' });
    const [error, setError] = useState({ emailError: false, senhaError: false, messageError: '' });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        form.email.trim().length === 0
            ? setError({
                emailError: true,
                senhaError: false,
                messageError: 'Este campo não pode estar vazio!'
            })
            : form.senha.trim().length === 0
                ? setError({
                    emailError: false,
                    senhaError: true,
                    messageError: 'Este campo não pode estar vazio!'
                })
                : (
                    setError({
                        ...error,
                        emailError: false,
                        senhaError: false,
                        messageError: ''
                    }),

                    
                    navigate('/home')
                );
    }

    return (
        <div className="bg-radial from-[#0085FF] to-[#003465] h-screen relative overflow-hidden ">
            <img src={img1} className="w-[10rem] h-[10rem] absolute top-2 left-4 opacity-70" />
            <img src={img} className="w-[7rem] h-[7rem] absolute right-4 top-3 opacity-70" />
            <img src={img3} className="w-[10rem] h-[10rem] absolute bottom-4 left-2 opacity-70" />
            <img src={img6} className="w-[rem] h-[4rem] absolute left-6 top-60 opacity-70" />
            <img src={img1} className="w-[10rem] h-[10rem] absolute bottom-20 left-40 opacity-70" />

            <div className="w-full h-full flex items-center justify-center bg-gray-900  ">
                <div className="w-76 h-[30rem] bg-[#5882C1]/20 z-[10] rounded-3xl backdrop-xl shadow-xl text-gray-200 p-4 ">
                    <h1 className="text-center text-xl font-medium mt-7">HWT-Guest</h1>
                    <form onSubmit={handleSubmit} className="p-4 w-full mt-4">
                        <h2 className="font-medium mb-4 text-lg">Login</h2>

                        <div className="mb-4">
                            <label className="mb-2"> Email:  </label>
                            <input
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                value={form.email}
                                type="text"
                                className="bg-gray-50 w-full p-2 rounded-md mt-1 outline-none bg-gray-300 text-gray-900 "
                            />

                            <div className={`${error.emailError === true ? 'block' : 'hidden'} bg-gray-600/80 text-sm p-1 `} >{error.messageError}</div>
                        </div>

                        <div className="">
                            <label className=""> Senha:  </label>
                            <input
                                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                                value={form.senha}
                                type="password"
                                className="bg-gray-50 w-full p-2 rounded-md mt-1 outline-none bg-gray-300 text-gray-900 "
                            />

                            <div className={`${error.senhaError === true ? 'block' : 'hidden'} bg-gray-600/80 text-sm p-1`} >{error.messageError}</div>
                        </div>

                        <button className="bg-[#003465] w-full p-2 mt-8 rounded-md font-medium"> Entrar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage