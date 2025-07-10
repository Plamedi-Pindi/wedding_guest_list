import type { ReactNode } from "react"

const MainComponent = ({children}: {children: ReactNode})=> {

    return (
        <main className=" p-4 ">
            {children}
        </main>
    )
}

export default MainComponent