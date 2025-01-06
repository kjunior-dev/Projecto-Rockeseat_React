import {RouterProvider} from "react-router-dom"; // Componente para fornecer o roteador definido.
import {router} from "./routes.tsx"; // Importa a configuração de rotas.
import {Helmet, HelmetProvider} from "react-helmet-async"; // Fornece controle sobre a manipulação de metadados HTML, como título e meta tags.
import { Toaster } from 'sonner'; // Componente para exibir notificações toast.
import {ThemeProvider} from "./components/theme/theme-provider.tsx"; // Provedor de tema para gerenciar temas no aplicativo.
import {QueryClientProvider} from "@tanstack/react-query"; // Fornece o cliente React Query para gerenciar consultas assíncronas.
import {queryClient} from "./lib/react-query.ts"; // Instância do cliente React Query configurada.

export function App() {
    return (
        // Provedor de contexto para gerenciar o Helmet (manipulação de cabeçalhos e metadados HTML).
        <HelmetProvider>
            {/* Provedor de tema, permitindo alternar entre temas como "sistema", "claro" ou "escuro". */}
            <ThemeProvider defaultTheme="system" storageKey="pizzashop-thme">
                {/* Define o modelo de título para o Helmet, adicionando "Pizza Shop" ao título das páginas. */}
                <Helmet titleTemplate="%s | Pizza Shop"/>
                {/* Componente para exibir notificações toast com cores ricas. */}
                <Toaster richColors/>
                {/* Provedor para gerenciar consultas e estados assíncronos com React Query. */}
                <QueryClientProvider client={queryClient}>
                    {/* Provedor de roteamento, gerenciando as rotas definidas em `router`. */}
                    <RouterProvider router={router}/>
                </QueryClientProvider>
            </ThemeProvider>
        </HelmetProvider>
    );
}