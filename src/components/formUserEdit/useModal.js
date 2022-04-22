import { useState } from 'react'

export const useModal = (initialValue) => {
    const [open, setOpen] = useState(initialValue = true);
    const toggle = () => setOpen(!open);
    return [open, toggle, setOpen];
}
