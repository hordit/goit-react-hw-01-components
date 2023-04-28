import { Profile } from "./Profile";
import user from "../user.json";
import { Statistics } from "./Statistics";
import data from "../data.json";
import { FriendList } from "./FriendList";
import friends from "../friends.json";
import { TransactionHistory } from "./TransactionHistory";
import transaction from "../transaction.json"

export const App = () => {
  const title = "Upload stats";
  return (
    <div>
      <Profile
        user={user}
      />

      {title ? (
        <Statistics title={title} stats={data} />
      ) : (
        <Statistics stats={data} />
      )}

      <FriendList friends={friends} />

      <TransactionHistory items={transaction} />

    </div>
  );
}

