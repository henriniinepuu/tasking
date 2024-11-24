import { useQueryState, parseAsBoolean } from "nuqs"; 

export const useCreateWorkspaceModal = () => {
    const [isOpen, setIsOpen] = useQueryState(
        //this paramter controls what parameter in URL is controlling querychnage 
        "create-workspace",
        parseAsBoolean.withDefault(false).withOptions({clearOnDefault: true})
    )

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return {
        isOpen,
        open,
        close,
        setIsOpen,
    };
};