import { type ReactNode, forwardRef } from "react"

// Type
type ModalProsType = {
    children: ReactNode,
    onclick?: () => void
}

const ModalBackground = forwardRef<HTMLDivElement, ModalProsType>(({ children, onclick }, ref) => {

    return (
        <div ref={ref} onClick={onclick} className={`w-full h-0 bg-black/50 backdrop-blur-[0.12rem] absolute left-0 top-0 flex  justify-center overflow-hidden `}>
            {children}
        </div>

    )
})

export default ModalBackground