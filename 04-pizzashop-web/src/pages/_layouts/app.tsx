import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../../components/header.tsx";
import {useEffect} from "react";
import {api} from "../../lib/axios.ts";
import {isAxiosError} from "axios";

export function AppLayout(){
    const navigate = useNavigate();

    useEffect(() => {
        const interceptorId = api.interceptors.response.use(
            (response) => response, // Em caso de sucesso, retorna a resposta
            (error) => { // Em caso de erro, executa a lógica de tratamento
                if (isAxiosError(error)) { // Verifica se é um erro do Axios
                    const status = error.response?.status;
                    const code = error.response?.data.code;

                    if (status === 401 && code === 'UNAUTHORIZED') {
                        navigate('/sign-in', { replace: true }); // Redireciona para o login
                    }
                }
            }
        );

        return () => {
            api.interceptors.response.eject(interceptorId); // Remove o interceptador ao desmontar o componente
        };
    }, [navigate]);

    return(
        <div className="flex min-h-screen flex-col antialiased">
            <Header/>

            <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
                <Outlet/>
            </div>
        </div>
    )
}