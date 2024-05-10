"use client";

import AccessError from "@/components/accessError";
import Loading from "@/components/ui-element/loading";
import { Card, CardContent } from "@/components/ui/card";
import { auth, db } from "@/firebase";
import { OrderType } from "@/types/stallInfo";
import { UUID } from "crypto";
import { ref, set } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObjectVal } from "react-firebase-hooks/database";

export default function ReceivePage() {
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, userInfoLoading, userInfoError] = useObjectVal<{
    stallId?: string;
  }>(ref(db, `users/${user?.uid}`));
  const [orders, ordersLoading, ordersError] = useObjectVal<{
    [key: UUID]: OrderType;
  }>(ref(db, `stalls/${userInfo?.stallId}/orders`));
  if (loading || userInfoLoading || ordersLoading || !orders)
    return <Loading />;
  if (!user || !userInfo?.stallId) return <AccessError />;
  function setOrderState(id: string, status: OrderType["status"]) {
    set(ref(db, `stalls/${userInfo?.stallId}/orders/${id}/status`), status);
  }
  return (
    <>
      <h2 className="text-2xl"></h2>
      <section className="grid gap-4 p-4">
        {Object.entries(orders)
          .reverse()
          // @ts-ignore
          .filter(([_, o]: [_: any, o: OrderType]) => o.status == "ready")
          .map(
            // @ts-ignore // なぜかidがstringとなるため踏み倒す
            ([id, order]: [id: UUID, order: OrderType]) => (
              <button
                className="max-w-52"
                key={id}
                onClick={() => setOrderState(id, "completed")}
              >
                <Card>
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-center">
                      {order.ticket}
                    </p>
                  </CardContent>
                </Card>
              </button>
            )
          )}
      </section>
    </>
  );
}
