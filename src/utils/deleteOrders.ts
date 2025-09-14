import { useMutation } from "@tanstack/react-query";
import { putAccept } from "../http/putAccept";
import { queryClient } from "../service/queryClient";

export function deleteOrders() {
    
    return useMutation({
        mutationFn: putAccept,
            onSuccess: (_, variable) => {
                queryClient.refetchQueries({
                    queryKey: ["keyGetRendBookLibrary", variable.accountId]
                })
            },
        }
    )
}