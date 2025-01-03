import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import {Helmet, HelmetProvider} from "react-helmet-async";
import { Toaster } from 'sonner'
import {ThemeProvider} from "./components/theme/theme-provider.tsx";

export function App() {

  return (
      <HelmetProvider>
        <ThemeProvider defaultTheme="system" storageKey="pizzashop-thme">
            <Helmet titleTemplate="%s | Pizza Shop"/>
            <Toaster richColors/>
            <RouterProvider router={router}/>
        </ThemeProvider>
      </HelmetProvider>
  )
}