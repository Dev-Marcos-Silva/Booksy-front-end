import { useEffect, useState } from "react";
import { deleteOrders } from "../../utils/deleteOrders";
import { authContex } from "../../hook/authContext";

type StopWatchProps = {
    id: number;
};

export function StopWatch({ id }: StopWatchProps) {

    const [timeLeft, setTimeLeft] = useState(0);
    const { account } = authContex()
    const deleteOrder = deleteOrders()

    if(!account){
        return
    }

    useEffect(() => {
        const storageKey = `stopwatch-${id}`;
        const expiration = localStorage.getItem(storageKey);

        if (!expiration) return; // se não tiver cronômetro, não mostra nada

        const expirationTime = Number(expiration);

        const update = () => {
            const diff = expirationTime - Date.now();

                if (diff > 0) {
                    setTimeLeft(diff);
                } else {
                    setTimeLeft(0);

                    deleteOrder.mutate({
                        isAccepted: "false",
                        rendBookId: id,
                        accountId: account.id,
                        token: account.token
                    })
                    
                    localStorage.removeItem(storageKey);
                    clearInterval(interval);
                }
        };

        update();

        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
        
    }, [id]);

    const formatTime = (ms: number) => {
        const total = Math.floor(ms / 1000);
        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60);
        const s = total % 60;
        return `${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    return (
        <div className="text-xl font-mono">
            {timeLeft > 0 ? formatTime(timeLeft) : "Expirado"}
        </div>
    );
}