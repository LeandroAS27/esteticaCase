"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface FormsProps{
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormsProps>();

    const onSubmit: SubmitHandler<FormsProps> = (data) => {
        console.log("Form data: ", data)
        // Aqui você pode enviar os dados para o backend ou tratá-los de acordo com sua necessidade
    }

    return(
        <>
            <section 
            id="contato" 
            className="min-h-96 my-8 flex justify-center items-center">
                <form 
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4 max-w-lg w-full mx-auto mx-2"
                >
                    {/* nome */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 font-medium text-black font-quicksand">Seu nome (obrigatório)</label>
                        <input 
                        type="text" 
                        {...register('name', {required: "O nome é obrigatório"})} 
                        className="border w-full max-w-screen p-2 box-border text-[#4A4A4A]"
                        id="name" 
                        />  
                        {errors.name && <p className="text-red-500 font-nunito">{errors.name.message}</p>}
                    </div>

                    {/* email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 font-medium text-black font-quicksand">Seu e-mail(obrigatório)</label>
                        <input 
                        type="text" 
                        {...register("email", {required: "O e-mail é obrigatório.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Formato de e-mail inválido.",
                            }
                        })}
                        className="border w-full max-w-screen p-2 box-border text-[#4A4A4A]"
                        id="email" 
                        />
                        {errors.email && <p className="text-red-500 font-nunito">{errors.email.message}</p>}
                    </div>

                    {/* telefone */}
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-1 font-medium text-black font-quicksand">Telefone:</label>
                        <input 
                        type="text" 
                        {...register("phone", {
                            pattern: {
                                value: /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/,
                                message: "Digite um número de telefone válido (10-11 dígitos)",
                            },
                        })}
                        className="border w-full max-w-screen p-2 box-border text-[#4A4A4A]"
                        id="phone" 
                        />
                        {errors.phone && <p className="text-red-500 font-nunito">{errors.phone.message}</p>}
                    </div>

                    {/* Assunto */}
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="mb-1 font-medium text-black font-quicksand">Assunto</label>
                        <select 
                        {...register("subject", { required: "Por favor, selecione um assunto."})} 
                        className="border w-full max-w-screen p-2 box-border font-quicksand text-[#4A4A4A]"
                        id="subject">
                            <option value="">Selecione um assunto</option>
                            <option value="Informação">Informação</option>
                            <option value="Orçamentos">Orçamentos</option>
                            <option value="Parcerias">Parcerias</option>
                            <option value="Compras">Compras</option>
                            <option value="Vendas">Vendas</option>
                            <option value="Sugestão/Reclamação">Sugestão/Reclamação</option>
                        </select>
                        {errors.subject && <p className="text-red-500 font-nunito">{errors.subject.message}</p>}

                        <label htmlFor="message" className="mb-1 font-medium text-black font-quicksand">Sua mensagem</label>
                        <textarea 
                        {...register("message", { required: "A mensagem é obrigatória."})} 
                        className="border w-full max-w-screen p-2 box-border font-quicksand text-[#4A4A4A]"                   
                        id="message"></textarea>
                    </div>

                    <button 
                    className="mt-4 bg-blue-500 text-white p-2"
                    type="submit">Enviar</button>
                </form>
            </section>
        </>
    )
}

export default Contact;